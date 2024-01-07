import { useEffect } from 'react';

import { useQueryPokemonById } from '~/services/pokemon';
import { useLoadingStore } from '~/stores';

export function HomePage() {
  const setLoading = useLoadingStore((state) => state.setLoading);
  const { data, status, error } = useQueryPokemonById(1);

  useEffect(() => {
    if (status === 'pending') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [setLoading, status]);

  if (status === 'error') {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Pokemon: {data?.name}</h2>
    </div>
  );
}
