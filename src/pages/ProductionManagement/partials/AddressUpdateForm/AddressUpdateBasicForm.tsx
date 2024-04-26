import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import {
  DataTypeEnum,
  FigureInfoType,
} from '~/services/blueprint/queries/useQueryBlueprintById';
import { useUpdateAddress } from '~/services/sensorConfiguration';
import { displayErrorMessage } from '~/utils/errorMessage';

import { BlueprintsContext } from '~/pages/ProductionManagement/context/BlueprintContext';

import { TextField } from '~/components';
import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Typography,
} from '~/components/MuiComponents';

interface IFormInput {
  dataBlock: number;
  offset: number;
  dataType: DataTypeEnum;
}

const dataTypeOptions = [
  {
    value: DataTypeEnum.REAL,
    label: DataTypeEnum.REAL,
  },
  {
    value: DataTypeEnum.INT,
    label: DataTypeEnum.INT,
  },
];

interface AddressUpdateBasicFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function AddressUpdateBasicForm({
  handleClose,
  figureInfo,
}: AddressUpdateBasicFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dataBlock: figureInfo?.db ?? 0,
      offset: figureInfo?.offset ?? 0,
      dataType: figureInfo?.dataType ?? DataTypeEnum.REAL,
    },
  });

  const { renderedBlueprintId } = useContext(BlueprintsContext);
  const {
    mutate: updateAddress,
    isPending,
    isSuccess,
    isError,
    error,
  } = useUpdateAddress();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateAddress({
      id: figureInfo?.id ?? 0,
      blueprintId: renderedBlueprintId,
      db: data.dataBlock,
      offset: data.offset,
      dataType: data.dataType,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        <Typography variant='body2'>Cập nhật địa chỉ thành công!</Typography>,
      );
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isError, error]);

  return (
    <Box
      component='form'
      marginX={3}
      marginY={2}
      onSubmit={handleSubmit(onSubmit)}
    >
      <DialogTitle>Cập nhật địa chỉ biến PLC</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
          error={!!errors.dataBlock}
          helperText={errors.dataBlock?.message}
          id='dataBlock'
          label='Data Block'
          margin='dense'
          name='dataBlock'
          rules={{
            required: 'Data Block không được trống',
            pattern: {
              value: /^(0|[1-9]\d*)$/,
              message: 'Data Block phải là số nguyên không âm',
            },
          }}
          size='small'
          type='number'
          variant='standard'
        />
        <TextField
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
          error={!!errors.offset}
          helperText={errors.offset?.message}
          id='offset'
          label='Offset'
          margin='dense'
          name='offset'
          rules={{
            required: 'Offset không được trống',
            pattern: {
              value: /^(0|[1-9]\d*)$/,
              message: 'Offset phải là số nguyên không âm',
            },
          }}
          size='small'
          type='number'
          variant='standard'
        />
        <TextField
          fullWidth
          select
          InputLabelProps={{
            shrink: true,
          }}
          control={control}
          error={!!errors.dataType}
          helperText={errors.dataType?.message}
          id='dataType'
          label='Kiểu dữ liệu'
          margin='dense'
          name='dataType'
          rules={{ required: true }}
          size='small'
          variant='standard'
        >
          {dataTypeOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button size='small' variant='outlined' onClick={handleClose}>
          Đóng
        </Button>
        <Button
          disabled={isPending}
          size='small'
          startIcon={
            isPending && <CircularProgress color='secondary' size={15} />
          }
          type='submit'
          variant='contained'
        >
          Cập nhật
        </Button>
      </DialogActions>
    </Box>
  );
}
