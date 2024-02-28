import { createElement, ElementType } from 'react';

import { Color } from '~/types';

import { SoftChip } from '~/components';
import { ErrorOutlineOutlinedIcon } from '~/components/Icons';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IAlertDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAgree: () => void;
  title: string;
  content: string;
  color?: Color;
  icon?: ElementType;
}

export function AlertDialog(props: IAlertDialogProps) {
  const {
    open,
    handleClose,
    handleAgree,
    title,
    content,
    color = 'primary',
    icon: Icon,
  } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <Stack alignItems='flex-start' direction='row' justifyContent='center'>
        <SoftChip
          color={color}
          icon={
            Icon ? (
              createElement(Icon, { sx: { fontSize: 20 } })
            ) : (
              <ErrorOutlineOutlinedIcon sx={{ fontSize: 20 }} />
            )
          }
          style={{ marginTop: '16px', marginLeft: '24px' }}
        />
        <Box>
          <DialogTitle
            component='div'
            id='alert-dialog-title'
            sx={{ paddingBottom: '8px' }}
          >
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='h6'
            >
              {title}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              <Typography variant='body2'>{content}</Typography>
            </DialogContentText>
          </DialogContent>
        </Box>
      </Stack>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button color='inherit' variant='outlined' onClick={handleClose}>
          Hủy
        </Button>
        <Button
          autoFocus
          color={color}
          variant='contained'
          onClick={handleAgree}
        >
          Tiếp tục
        </Button>
      </DialogActions>
    </Dialog>
  );
}
