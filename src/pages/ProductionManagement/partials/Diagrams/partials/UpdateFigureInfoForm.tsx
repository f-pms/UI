import React from 'react';

import { TextField } from '~/components';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '~/components/MuiComponents';

interface UpdateFigureInfoFormProps {
  open: boolean;
  handleClose: () => void;
}

export default function UpdateFigureInfoForm({
  open,
  handleClose,
}: UpdateFigureInfoFormProps) {
  return (
    <Dialog
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          // const formData = new FormData(event.currentTarget);
          // const formJson = Object.fromEntries((formData as any).entries());
          // const email = formJson.email;
          handleClose();
        },
      }}
      maxWidth='xs'
      open={open}
      onClose={handleClose}
    >
      <Box marginX={3} marginY={2}>
        <DialogTitle>Cập nhật địa chỉ biến PLC</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            required
            id='name'
            label='Datablock'
            margin='dense'
            name='email'
            type='email'
            variant='standard'
          />
          <TextField
            autoFocus
            fullWidth
            required
            id='name'
            label='Offset'
            margin='dense'
            name='email'
            type='email'
            variant='standard'
          />
          <TextField
            autoFocus
            fullWidth
            required
            id='name'
            label='Kiểu dữ liệu'
            margin='dense'
            name='email'
            type='email'
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ĐÓNG</Button>
          <Button type='submit'>CẬP NHẬT</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
