import { Dispatch, useContext, useMemo } from 'react';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import _ from 'lodash';
import {
  MaterialReactTable,
  MRT_ColumnDef,
  MRT_PaginationState,
  useMaterialReactTable,
} from 'material-react-table';

import { useNavigate } from '~/libs/react-router-dom';
import { HistoricalReport, HistoricalReportPagination, Shift } from '~/types';

import { AuthContext } from '~/pages/Auth/context/AuthContext';
import { REPORT_TYPE_LABELS } from '~/pages/Report/helpers/constants';

import { SoftButton } from '~/components';
import {
  ArticleOutlinedIcon,
  FileDownloadOutlinedIcon,
} from '~/components/Icons';
import { Box, Link, Stack, Typography } from '~/components/MuiComponents';
import { getDefaultMRTOptions } from '~/components/Table';

export interface IHistoricalReportTableProps {
  historicalReports?: HistoricalReportPagination;
  pagination: MRT_PaginationState;
  setPagination: Dispatch<React.SetStateAction<MRT_PaginationState>>;
}

const defaultMRTOptions = getDefaultMRTOptions<HistoricalReport>();
export function HistoricalReportTable(props: IHistoricalReportTableProps) {
  const { historicalReports, pagination, setPagination } = props;
  const navigate = useNavigate();
  const { isAdmin } = useContext(AuthContext);

  const columns: MRT_ColumnDef<HistoricalReport>[] = useMemo(
    () => [
      {
        id: 'reportTypeName',
        header: 'Cụm sản xuất',
        accessorFn: (row) => REPORT_TYPE_LABELS[row.type.name],
      },
      {
        id: 'recordingDate',
        header: 'Ngày xuất báo cáo',
        accessorFn: (row) =>
          _.upperFirst(
            format(new Date(row.recordingDate), 'PPP', { locale: vi }),
          ),
      },
    ],
    [],
  );

  const handleViewDetailsReport = (id: number) => {
    navigate({
      pathname: `/report/history/${id}`,
      search: `?shift=${Shift.ALL_DAY}`,
    });
  };

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
    data: historicalReports?.content ?? [],
    enableRowActions: true,
    getRowId: (row) => row.id.toString(),
    enableColumnPinning: false,
    manualPagination: true,
    rowCount: historicalReports?.recordTotal,
    onPaginationChange: setPagination,
    state: { pagination },
    renderTopToolbarCustomActions: ({ table }) => {
      const selectedRows = table.getSelectedRowModel().rows;
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
            {`Tải xuống ${selectedRows.length} báo cáo đã chọn`}
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
            {isAdmin ? (
              <SoftButton
                color='primary'
                size='small'
                startIcon={<FileDownloadOutlinedIcon />}
              >
                {`${historicalReports?.recordTotal ?? 0} báo cáo`}
              </SoftButton>
            ) : (
              <Typography color='primary' variant='body2'>
                {`${historicalReports?.recordTotal ?? 0} báo cáo`}
              </Typography>
            )}
          </Stack>
        </Stack>
      );
    },
    renderRowActions: ({ row }) => {
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
            onClick={() => handleViewDetailsReport(row.original.id)}
          >
            Xem báo cáo
          </SoftButton>
          {isAdmin && (
            <SoftButton
              color='primary'
              size='small'
              startIcon={<FileDownloadOutlinedIcon />}
            >
              Tải xuống
            </SoftButton>
          )}
        </Stack>
      );
    },
    displayColumnDefOptions: {
      'mrt-row-numbers': {
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
        size: 5,
      },
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
  });
  return (
    <Box style={{ flex: 5 }} sx={{ ml: 5 }}>
      <MaterialReactTable table={table} />
    </Box>
  );
}
