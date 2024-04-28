import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

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
  addressValidationRegex,
} from '~/pages/ProductionManagement/helpers/addressUpdateForm';
import AddressInput from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateAdvanceForm/AddressInput';
import AddressUpdateFormWrapper from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateFormWrapper';

import { Box, DialogContent } from '~/components/MuiComponents';

interface AddressUpdateAdvanceFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function AddressUpdateAdvanceForm({
  handleClose,
  figureInfo,
}: AddressUpdateAdvanceFormProps) {
  const defaultData = useMemo(
    () => ({
      address: figureInfo?.address ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const methods = useForm<AddressUpdateAdvanceFormData>({
    defaultValues: defaultData,
    resolver: yupResolver(AddressUpdateAdvanceSchema),
  });
  const [submittedData, setSubmittedData] =
    useState<AddressUpdateAdvanceFormData>(defaultData);

  const { renderedBlueprintId } = useContext(BlueprintsContext);
  const {
    mutate: updateAddress,
    isSuccess,
    isPending,
    isError,
    error,
  } = useUpdateAddress();

  const onSubmit = () => {
    const data = methods.getValues();
    const payload: UpdateAddressDTO = {
      address: data.address,
    };
    setSubmittedData(data);

    updateAddress({
      blueprintId: renderedBlueprintId,
      sensorConfigurationId: figureInfo?.id ?? 0,
      payload,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Cập nhật địa chỉ thành công!');
      const match = submittedData.address.match(addressValidationRegex);
      const [, dataBlock, offset, , dataType] = match!;
      figureInfo!.address = submittedData.address;
      figureInfo!.db = parseInt(dataBlock);
      figureInfo!.offset = parseFloat(offset);
      figureInfo!.dataType = dataType as DataTypeEnum;
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
    <AddressUpdateFormWrapper
      isLoading={isPending}
      methods={methods}
      onClose={handleClose}
      onSubmit={onSubmit}
    >
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <AddressInput />
        </Box>
      </DialogContent>
    </AddressUpdateFormWrapper>
  );
}
