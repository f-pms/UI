import { useEffect } from 'react';

import { useLoadingStore } from '~/stores';

import { Calendar } from '~/components';

export function CalendarPage() {
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [setLoading]);
  return <Calendar />;
}
