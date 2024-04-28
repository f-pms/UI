import { useContext, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
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
import AddressUpdateFormWrapper from '~/pages/ProductionManagement/partials/AddressUpdateForm/AddressUpdateFormWrapper';

import { DialogContent, Stack } from '~/components/MuiComponents';

interface AddressUpdateBasicFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function AddressUpdateBasicForm({
  handleClose,
  figureInfo,
}: AddressUpdateBasicFormProps) {
  const defaultData = useMemo(
    () => ({
      dataBlock: figureInfo?.db ?? 0,
      offset: figureInfo?.offset ?? 0,
      dataType: figureInfo?.dataType ?? DataTypeEnum.REAL,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const methods = useForm<AddressUpdateBasicFormData>({
    defaultValues: defaultData,
    resolver: yupResolver(AddressUpdateBasicSchema),
  });
  const [submittedData, setSubmittedData] =
    useState<AddressUpdateBasicFormData>(defaultData);
  const [dataType, setDataType] = useState<DataTypeEnum>(DataTypeEnum.REAL);
  const handleChange = (event: SelectChangeEvent) => {
    setDataType(event.target.value as DataTypeEnum);
  };

  const { renderedBlueprintId } = useContext(BlueprintsContext);
  const {
    mutate: updateAddress,
    isSuccess,
    data: updateData,
    isPending,
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
      figureInfo!.address = updateData.address;
      figureInfo!.db = submittedData.dataBlock;
      figureInfo!.offset = submittedData.offset;
      figureInfo!.dataType = submittedData.dataType;
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
    </AddressUpdateFormWrapper>
  );
}
