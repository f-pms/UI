import { useEffect } from 'react';

import { useLoadingStore } from '~/stores';

import { CustomBorderButton } from '~/components';

export function ChartPage() {
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading]);
  return (
    <div>
      <h1>Chart Page</h1>
      <CustomBorderButton>Hello</CustomBorderButton>
    </div>
  );
}
