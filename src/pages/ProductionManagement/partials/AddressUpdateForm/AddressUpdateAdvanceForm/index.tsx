import { useContext, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import { SelectChangeEvent } from '@mui/material';

import {
  DataTypeEnum,
  FigureInfoType,
} from '~/services/blueprint/queries/useQueryBlueprintById';
import {
  UpdateAddressDTO,
  useUpdateAddress,
} from '~/services/sensorConfiguration';
import { displayErrorMessage } from '~/utils/errorMessage';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';
import {
  AddressUpdateAdvanceFormData,
  AddressUpdateAdvanceSchema,
} from '~/pages/ProductionManagement/helpers/addressUpdateForm';
import AddressInput from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateAdvanceForm/AddressInput';

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

interface AddressUpdateAdvanceFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function AddressUpdateAdvanceForm({
  handleClose,
  figureInfo,
}: AddressUpdateAdvanceFormProps) {
  const methods = useForm<AddressUpdateAdvanceFormData>({
    defaultValues: {
      address: figureInfo?.address ?? '%DB1:1:REAL',
    },
    resolver: yupResolver(AddressUpdateAdvanceSchema),
  });

  const { renderedBlueprintId } = useContext(BlueprintsContext);
  const {
    mutate: updateAddress,
    isSuccess,
    // data: updateData,
    isError,
    error,
  } = useUpdateAddress();

  const onSubmit = () => {
    const data = methods.getValues();
    const payload: UpdateAddressDTO = {
      address: data.address,
    };

    updateAddress({
      blueprintId: renderedBlueprintId,
      sensorConfigurationId: figureInfo?.id ?? 0,
      payload,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Cập nhật địa chỉ thành công!');
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        marginX={3}
        marginY={2}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <DialogTitle>
          <Typography
            align='center'
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='h6'
          >
            Cập nhật địa chỉ biến PLC
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <AddressInput />
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='flex-end'
            spacing={1}
            sx={{ width: '100%', p: 2 }}
          >
            <Button color='inherit' variant='outlined' onClick={handleClose}>
              Đóng
            </Button>
            <Button type='submit' variant='contained'>
              Cập nhật
            </Button>
          </Stack>
        </DialogActions>
      </Box>
    </FormProvider>
  );
}
