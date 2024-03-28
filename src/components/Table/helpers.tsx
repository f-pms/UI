import { type MRT_RowData, type MRT_TableOptions } from 'material-react-table';

//define re-useable default table options for all tables in your app
export const getDefaultMRTOptions = <TData extends MRT_RowData>(): Partial<
  MRT_TableOptions<TData>
> => ({
  enableColumnFilters: false,
  manualFiltering: false,
  manualPagination: false,
  manualSorting: false,
  paginationDisplayMode: 'pages',
  initialState: { pagination: { pageSize: 10, pageIndex: 0 } },
  localization: {
    and: 'và',
    cancel: 'Đóng',
    clearFilter: 'Xóa',
    clearSearch: 'Xóa',
    toggleFullScreen: 'Toàn mành hình',
    toggleDensity: 'Tăng/Giảm dãn cách dòng',
    showHideColumns: 'Ẩn/Hiện cột',
    sortByColumnAsc: 'Sắp xếp tăng dần theo {column}',
    sortByColumnDesc: 'Sắp xếp giảm dần theo {column}',
    sortedByColumnAsc: 'Đã sắp xếp tăng dần theo {column}',
    sortedByColumnDesc: 'Đã sắp xếp giảm dần theo {column}',
    clearSort: 'Không sắp xếp',
    rowsPerPage: 'Số dòng mỗi trang',
    hideAll: 'Ẩn tất cả',
    hideColumn: 'Ẩn cột {column}',
    showAll: 'Hiện tất cả',
    showAllColumns: 'Hiện tất cả cột',
    select: 'Lựa chọn',
    save: 'Lưu',
    search: 'Tìm kiếm',
    toggleSelectAll: 'Chọn/Hủy tất cả',
    toggleSelectRow: 'Chọn/Hủy dòng này',
    showHideSearch: 'Ẩn/Hiện thanh tìm kiếm',
    actions: 'Thao tác',
    noRecordsToDisplay: 'Không có dữ liệu',
    noResultsFound: 'Không tìm thấy kết quả',
    toggleVisibility: 'Ẩn/Hiện',
    selectedCountOfRowCountRowsSelected:
      '{selectedCount}/{rowCount} hàng được chọn',
    rowNumber: 'STT',
    rowNumbers: 'STT',
    unpin: 'Bỏ ghim',
    unpinAll: 'Bỏ ghim tất cả',
    pin: 'Ghim',
    pinToLeft: 'Ghim trái',
    pinToRight: 'Ghim phải',
  },
  muiTopToolbarProps: {
    sx: {
      '& > .MuiBox-root': {
        pl: 2,
        alignItems: 'center',
        height: '100%',
        width: '100%',
      },
    },
  },
});
