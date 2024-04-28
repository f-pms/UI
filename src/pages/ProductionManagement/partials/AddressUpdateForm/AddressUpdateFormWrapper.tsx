import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';

import {
  Box,
  Button,
  DialogActions,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface AddressUpdateFormWrapperProps<T extends FieldValues> {
  children: React.ReactNode;
  methods: UseFormReturn<T>;
  onSubmit: () => void;
  onClose: () => void;
}

export default function AddressUpdateFormWrapper<T extends FieldValues>({
  children,
  methods,
  onSubmit,
  onClose,
}: AddressUpdateFormWrapperProps<T>) {
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
        {children}
        <DialogActions>
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='flex-end'
            spacing={1}
            sx={{ width: '100%', p: 2 }}
          >
            <Button color='inherit' variant='outlined' onClick={onClose}>
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
