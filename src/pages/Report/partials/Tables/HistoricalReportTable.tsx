import { useMemo, useState } from 'react';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  useMaterialReactTable,
} from 'material-react-table';

import { HistoricalReportItem } from '~/types';

import { HISTORICAL_REPORT_LIST } from '~/pages/Report/mocks/historicalReportList';

import { SoftButton, SoftChip } from '~/components';
import {
  ArticleOutlinedIcon,
  FileDownloadOutlinedIcon,
} from '~/components/Icons';
import { Box, Link, Stack, Typography } from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IHistoricalReportTableProps {}

const defaultMRTOptions = getDefaultMRTOptions<HistoricalReportItem>();
export function HistoricalReportTable() {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const columns: MRT_ColumnDef<HistoricalReportItem>[] = useMemo(
    () => [
      {
        accessorKey: 'type',
        header: 'Loại chỉ số điện',
      },
      {
        accessorKey: 'recordingDate',
        header: 'Ngày xuất báo cáo',
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    ...defaultMRTOptions,
    initialState: {
      ...defaultMRTOptions.initialState,
    },
    positionActionsColumn: 'last',
    positionToolbarAlertBanner: 'none',
    enableRowNumbers: true,
    enableRowSelection: true,
    enableGlobalFilter: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
    columns,
    data: HISTORICAL_REPORT_LIST,
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    enableColumnPinning: false,
    manualPagination: true,
    rowCount: 100,
    onPaginationChange: setPagination,
    state: { pagination },
    renderTopToolbarCustomActions: ({ table }) => {
      const selectedRows = table.getSelectedRowModel().rows;
      const allRows = table.getRowModel().rows;
      return (
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='space-between'
          sx={{ width: '100%' }}
        >
          <Link
            component='button'
            sx={{
              textDecoration: 'underline',
              opacity: selectedRows.length > 0 ? 1 : 0,
            }}
            variant='body2'
          >
            {`Tải xuống ${selectedRows.length}/${allRows.length} báo cáo đã chọn`}
          </Link>
          <Stack
            alignItems='center'
            direction='row'
            spacing={1}
            sx={{ alignSelf: 'flex-end' }}
          >
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='body2'
            >
              Kết quả tìm kiếm:
            </Typography>
            <SoftChip label={`${100} báo cáo`} shape='square' size='small' />
          </Stack>
        </Stack>
      );
    },
    renderRowActions: () => {
      return (
        <Stack
          alignItems='center'
          direction='row'
          justifyContent='center'
          spacing={2}
          sx={{ minWidth: '240px' }}
        >
          <SoftButton
            color='rose'
            size='small'
            startIcon={<ArticleOutlinedIcon />}
          >
            Xem báo cáo
          </SoftButton>
          <SoftButton
            color='primary'
            size='small'
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Tải xuống
          </SoftButton>
        </Stack>
      );
    },
    displayColumnDefOptions: {
      'mrt-row-actions': {
        size: 0,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
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
  return (
    <Box style={{ flex: 5 }} sx={{ ml: 5 }}>
      <MaterialReactTable table={table} />
    </Box>
  );
}
