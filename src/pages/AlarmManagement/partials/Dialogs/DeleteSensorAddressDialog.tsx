import { FormEvent, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';

import { useDeleteAddress } from '~/services/sensorConfiguration/mutations/useDeleteAddress';
import { SensorConfiguration } from '~/types';
import { displayErrorMessage } from '~/utils/errorMessage';

import { AlarmFormData } from '~/pages/AlarmManagement/helpers/alarmForm';

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IDeleteSensorAddressDialogProps {
  open: boolean;
  onCloseDialog: (open?: boolean) => void;
  deletedSensorConfiguration?: SensorConfiguration;
}

export function DeleteSensorAddressDialog(
  props: IDeleteSensorAddressDialogProps,
) {
  const { open, deletedSensorConfiguration, onCloseDialog } = props;
  const { getValues } = useFormContext<AlarmFormData>();

  const {
    mutate: deleteAddress,
    isPending,
    isSuccess,
    isError,
    error,
  } = useDeleteAddress();

  const deleteAddressHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const blueprintId = getValues('info.station')?.id;

    if (!blueprintId || !deletedSensorConfiguration) return;

    deleteAddress({
      id: deletedSensorConfiguration.id,
      blueprintId,
    });
  };

  const handleClose = () => {
    onCloseDialog();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success(
        <Typography variant='body2'>Xóa địa chỉ biến thành công!</Typography>,
      );
      handleClose();
      onCloseDialog(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(displayErrorMessage(error));
    }
  }, [isError, error]);

  return (
    <Dialog
      PaperProps={{
        component: 'form',
        onSubmit: (e: FormEvent<HTMLFormElement>) => deleteAddressHandler(e),
      }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <Typography
          color='text.strong'
          sx={{ fontWeight: 'bold' }}
          variant='body1'
        >
          Xóa địa chỉ biến &quot;{deletedSensorConfiguration?.address}&quot;
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant='body2'>
          Hành động này không thể hoàn tác. Bạn có chắc chắn muốn tiếp tục
          không?
        </Typography>
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
          <Button
            disabled={isPending}
            startIcon={
              isPending && <CircularProgress color='secondary' size={15} />
            }
            type='submit'
            variant='contained'
          >
            Xóa
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
