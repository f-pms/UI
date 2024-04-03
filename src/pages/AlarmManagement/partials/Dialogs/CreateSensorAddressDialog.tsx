import { FormEvent, useEffect } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';

import { useCreateAddress } from '~/services/sensorConfiguration/mutations/useCreateAddress';
import { useQuerySensorConfigurations } from '~/services/sensorConfiguration/queries/useQuerySensorConfigurations';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';
import {
  CreateSensorConfigDTO,
  defaultSensorConfig,
  sensorConfigSchema,
} from '~/pages/AlarmManagement/helpers/sensorConfigForm';

import { InputWithLabel } from '~/components';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface ICreateSensorAddressDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CreateSensorAddressDialog(
  props: ICreateSensorAddressDialogProps,
) {
  const { open, setOpen } = props;
  const { getValues: getValueAlarmForm } = useFormContext<AlarmFormData>();
  const { refetch } = useQuerySensorConfigurations(
    {
      blueprintType: getValueAlarmForm('info.station.type'),
      blueprintName: getValueAlarmForm('info.station.value'),
    },
    {
      enabled: false,
    },
  );
  const { mutate: createAddress, isSuccess } = useCreateAddress();
  const {
    control,
    formState: { errors },
    getValues,
    trigger,
    reset,
  } = useForm<CreateSensorConfigDTO>({
    defaultValues: defaultSensorConfig,
    resolver: yupResolver(sensorConfigSchema),
  });

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trigger().then((isValid) => {
      if (isValid) {
        const blueprintId = getValueAlarmForm('info.station')?.id;
        createAddress({
          blueprintId: blueprintId ?? 0,
          payload: {
            ...getValues(),
            x: getValues('x'),
            y: getValues('y'),
          },
        });
      }
    });
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
      handleClose();
      toast.success(
        `Thêm địa chỉ biến vào ${getValueAlarmForm(
          'info.station.name',
        )} thành công`,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <Dialog
      PaperProps={{
        component: 'form',
        onSubmit: (e: FormEvent<HTMLFormElement>) => handleSubmit(e),
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='h6'
        >
          Tạo mới địa chỉ biến
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant='body2'>
          Địa chỉ mới sẽ tự động cập nhật vào danh sách chọn{' '}
          <b>&quot;Địa chỉ biến&quot;</b>, bạn có thể chọn địa chỉ biến này và
          tiếp tục cấu hình cảnh báo. <br />
          Địa chỉ biến được định nghĩa theo mẫu:{' '}
          <b>%DB&#123;dbblock&#125;:&#123;offset&#125;:&#123;dataType&#125;</b>
        </Typography>
        <Box sx={{ mt: 2 }}>
          <InputWithLabel
            control={control}
            error={errors.address}
            label='Địa chỉ biến'
            name='address'
            placeholder='%DB1:1:REAL'
          />
        </Box>
        <Stack direction='row' spacing={2} sx={{ mt: 2 }}>
          <InputWithLabel
            control={control}
            error={errors.x}
            label='Toa độ X'
            name='x'
            placeholder='00.00'
            type='number'
          />
          <InputWithLabel
            control={control}
            error={errors.y}
            label='Toa độ Y'
            name='y'
            placeholder='00.00'
            type='number'
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{ px: 3, pb: 2, borderTop: 1, borderColor: 'divider' }}
      >
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='space-between'
          sx={{ width: '100%' }}
        >
          <Button color='inherit' variant='outlined' onClick={handleClose}>
            Đóng
          </Button>
          <Button autoFocus type='submit' variant='contained'>
            Thêm địa chỉ
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
