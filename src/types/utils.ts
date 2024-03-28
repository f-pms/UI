export interface Pagination<T> {
  pageTotal: number;
  recordTotal: number;
  content: T[];
}
