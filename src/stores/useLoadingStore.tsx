import { create } from 'zustand';

type State = {
  isLoading: boolean;
  setLoading: (item: boolean) => void;
};

export const useLoadingStore = create<State>((set) => ({
  isLoading: false,
  setLoading: (value: boolean) => set(() => ({ isLoading: value })),
}));
