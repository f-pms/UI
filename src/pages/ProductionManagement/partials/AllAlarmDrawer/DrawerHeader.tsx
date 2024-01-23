import { HighlightOffOutlinedIcon } from '~/components/Icons';
import { Box, IconButton, Stack, Typography } from '~/components/MuiComponents';

export interface IDrawerHeaderProps {
  onClose: () => void;
}

export default function DrawerHeader({ onClose }: IDrawerHeaderProps) {
  return (
    <Stack
      alignItems='center'
      direction='row'
      justifyContent='space-between'
      sx={{
        p: 2,
        pr: 1,
      }}
    >
      <Box>
        <Typography
          sx={{ color: 'text.strong', fontWeight: 'bold' }}
          variant='subtitle1'
        >
          Cảnh báo
        </Typography>
        <Typography variant='body2'>
          Danh sách các cảnh báo đang được hiển thị
        </Typography>
      </Box>
      <IconButton onClick={onClose}>
        <HighlightOffOutlinedIcon fontSize='small' />
      </IconButton>
    </Stack>
  );
}
