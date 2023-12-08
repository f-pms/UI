import { useLoadingStore } from '~/stores';

import { Box, LinearProgress } from '~/components/MuiComponents';

export default function Loading() {
  const isLoading = useLoadingStore((state) => state.isLoading);

  return (
    isLoading && (
      <Box sx={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000 }}>
        <LinearProgress />
      </Box>
    )
  );
}
