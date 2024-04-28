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
  AddressUpdateBasicFormData,
  AddressUpdateBasicSchema,
} from '~/pages/ProductionManagement/helpers/addressUpdateForm';
import DataBlockInput from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateBasicForm/DataBlockInput';
import DataTypeSelect from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateBasicForm/DataTypeSelect';
import OffsetInput from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateBasicForm/OffsetInput';

import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

interface AddressUpdateBasicFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function AddressUpdateBasicForm({
  handleClose,
  figureInfo,
}: AddressUpdateBasicFormProps) {
  const methods = useForm<AddressUpdateBasicFormData>({
    defaultValues: {
      dataBlock: figureInfo?.db ?? 0,
      offset: figureInfo?.offset ?? 0,
      dataType: figureInfo?.dataType ?? DataTypeEnum.REAL,
    },
    resolver: yupResolver(AddressUpdateBasicSchema),
  });
  const [dataType, setDataType] = useState<DataTypeEnum>(DataTypeEnum.REAL);
  const handleChange = (event: SelectChangeEvent) => {
    setDataType(event.target.value as DataTypeEnum);
  };

  const { renderedBlueprintId } = useContext(BlueprintsContext);
  const {
    mutate: updateAddress,
    isSuccess,
    data: updateData,
    isError,
    error,
  } = useUpdateAddress();

  const onSubmit = () => {
    const data = methods.getValues();
    const payload: UpdateAddressDTO = {
      db: data.dataBlock,
      offset: data.offset,
      dataType: data.dataType,
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
          <Stack
            alignItems='flex-start'
            justifyContent='space-between'
            spacing={2}
            sx={{ mt: 2 }}
          >
            <DataBlockInput />
            <OffsetInput />
            <DataTypeSelect dataType={dataType} handleChange={handleChange} />
          </Stack>
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
