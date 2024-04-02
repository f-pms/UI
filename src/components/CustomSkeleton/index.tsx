import { Paper, Skeleton, SxProps, Typography } from '@mui/material';

import { Box, CircularProgress } from '~/components/MuiComponents';

export interface ICustomSkeletonProps {
  height?: number;
  width?: number;
  sx?: SxProps;
  isEmpty?: boolean;
}

export function CustomSkeleton(props: ICustomSkeletonProps) {
  const { height, width, sx, isEmpty = false } = props;
  return (
    <Paper sx={{ position: 'relative' }}>
      <Skeleton
        sx={{
          height: height ?? '100%',
          width: width ?? '100%',
          bgcolor: 'white',
          border: '1px solid #e0e0e0',
          borderRadius: 1,
          ...sx,
        }}
        variant='rounded'
      ></Skeleton>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isEmpty ? (
          <Typography>Không có dữ liệu</Typography>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Paper>
  );
}
