import { MRT_RowData, MRT_TableOptions } from 'material-react-table';

import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export const getDefaultEMRTOptions = <TData extends MRT_RowData>(): Partial<
  MRT_TableOptions<TData>
> => ({
  initialState: {
    density: 'compact',
  },
  enableColumnActions: false,
  enableColumnFilters: false,
  enablePagination: false,
  enableSorting: false,
  enableDensityToggle: false,
  muiTableProps: {
    sx: {
      border: 0,
      caption: {
        captionSide: 'top',
      },
    },
  },
  muiTableHeadCellProps: {
    sx: {
      border: '1px solid #e0e0e0',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      textAlign: 'center',
      fontSize: 12,
      background: grey[200],

      '& > .Mui-TableHeadCell-Content': {
        width: '100%',
        '& > .Mui-TableHeadCell-Content-Labels': {
          width: '100%',
          '& > .Mui-TableHeadCell-Content-Wrapper': {
            width: '100%',
          },
        },
      },

      '& table, th, td': {
        border: '1px solid #e0e0e0',
        borderCollapse: 'collapse',
        fontWeight: 700,
      },

      '& table': {
        width: '100%',
        height: '100%',
        border: 0,
      },

      '& table > thead > tr > th:first-of-type': {
        borderLeft: 0,
      },
      '& table > thead > tr > th:last-of-type': {
        borderRight: 0,
      },
      '& table > thead > tr:last-of-type': {
        '& > th': {
          borderBottom: 0,
          fontWeight: 500,
          fontSize: 11,
        },
      },
      '& table > thead > tr:first-of-type': {
        '& > th': {
          borderTop: 0,
        },
      },
    },
  },
  muiTableBodyCellProps: {
    sx: {
      border: '1px solid #e0e0e0',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: 12,
      backgroundColor: 'gray.100',
      position: 'relative',

      '& table, th, td': {
        border: '1px solid #e0e0e0',
        borderCollapse: 'collapse',
        fontWeight: 500,
      },

      '& table': {
        width: '100%',
        height: '100%',
        border: 0,
      },
      '& table > thead > tr > td:first-of-type': {
        borderLeft: 0,
      },
      '& table > thead > tr > td:last-of-type': {
        borderRight: 0,
      },
      '& table > thead > tr:last-of-type': {
        '& > td': {
          borderBottom: 0,
        },
      },
      '& table > thead > tr:first-of-type': {
        '& > td': {
          borderTop: 0,
        },
      },
    },
  },
  muiTableBodyRowProps: { hover: false },
  muiTopToolbarProps: {
    sx: {
      '& > .MuiBox-root': {
        alignItems: 'center',
      },
    },
  },
  muiBottomToolbarProps: {
    sx: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      pr: 2,
      '& > .MuiBox-root': {
        padding: 0,
      },
    },
  },
  renderTopToolbarCustomActions: () => {
    return (
      <Typography fontWeight='bold' variant='subtitle1'>
        I. Danh mục chốt chỉ số các đồng hồ điện thuộc cụm chế biến dăm
      </Typography>
    );
  },
  filterFns: {
    myCustomFilterFn: (row, _, filterValue: string) => {
      const locationInfo = row.getValue<string>('locationInfo').toLowerCase();
      const electricRoom = row.getValue<string>('electricRoom').toLowerCase();
      const electricMeter = row
        .getValue<string[]>('electricMeter')
        .join(',')
        .toLowerCase();
      const equipments = row
        .getValue<string[]>('equipments')
        .join(',')
        .toLowerCase();
      const keyword = filterValue.toLowerCase();

      return (
        locationInfo.includes(keyword) ||
        electricRoom.includes(keyword) ||
        electricMeter.includes(keyword) ||
        equipments.includes(keyword)
      );
    },
  },
  globalFilterFn: 'myCustomFilterFn',
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
  },
});
