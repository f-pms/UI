export const storage = {
  get: (key: string): string | null => {
    const result = localStorage.getItem(key);
    if (!result) return null;
    try {
      return JSON.parse(result) as string;
    } catch {
      return result;
    }
  },
  set: (key: string, value: string | object | []): void => {
    localStorage.setItem(
      key,
      typeof value === 'string' ? value : JSON.stringify(value),
    );
  },
  clear: (): void => {
    localStorage.clear();
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};
