import {
  GetMultiDayReportSummaryParams,
  QueryChartType,
  QueryDateType,
} from '~/services/report/queries/useQueryReportCharts';
import { MultiDateReportSummaryChart, OneDayChartByShift } from '~/types/chart';
import { toISOStringWithoutTimeZone } from '~/utils/date';

import {
  DateTypes,
  StatisticReportFormData,
  ViewTypes,
} from '~/pages/Report/helpers/statisticReportForm';
import {
  ReportComplexBarData,
  ReportData,
} from '~/pages/Report/mocks/chartDataset';

function compareDeviceName(firstDevice: string, secondDevice: string) {
  // Extract the numeric part from the strings
  const firstNumber = Number(firstDevice.replace('SUM_SPECIFIC_', '')); // Assuming numbers are after ":"
  const secondNumber = Number(secondDevice.replace('SUM_SPECIFIC_', ''));

  return firstNumber - secondNumber;
}

export const ConvertOneDayChartData = (
  backendChart: OneDayChartByShift[],
  reportType: string,
) => {
  const [shift1, shift2] = backendChart;

  const pieChartTotalReport: ReportData = {
    labelStep: ['Ca 1', 'Ca 2'],
    data: [
      {
        label: reportType,
        dataset: [shift1.SUM_TOTAL, shift2.SUM_TOTAL],
      },
    ],
  };

  const barChartReportByShift: ReportData = {
    labelStep: ['Ca sáng (6h00-18h00)', 'Ca tối(18h00-6h00)'],
    data: [
      {
        label: 'Điện giờ cao điểm',
        dataset: [shift1.SUM_PEAK, shift2.SUM_PEAK],
      },
      {
        label: 'Điện giờ thấp điểm',
        dataset: [shift1.SUM_OFFPEAK, shift2.SUM_OFFPEAK],
      },
      {
        label: 'Điện giờ trung bình',
        dataset: [shift1.SUM_STANDARD, shift2.SUM_STANDARD],
      },
    ],
  };

  const deviceLabels = Object.keys(shift1).filter((key) =>
    key.includes('SUM_SPECIFIC_'),
  );

  const stackedBarChartReportByDeviceList: ReportComplexBarData[] = [
    {
      id: 1,
      title: reportType,
      labelStep: deviceLabels.map(
        (label) => `Thiết bị ${label.replace('SUM_SPECIFIC_', '')}`,
      ),
      data: [
        {
          label: 'Ca sáng (6h00-18h00)',
          dataset: deviceLabels.map(
            (label) => shift1[label as keyof OneDayChartByShift],
          ),
        },
        {
          label: 'Ca tối (18h00-6h00)',
          dataset: deviceLabels.map(
            (label) => shift2[label as keyof OneDayChartByShift],
          ),
        },
      ],
    },
  ];

  return {
    pieChartTotalReport,
    barChartReportByShift,
    stackedBarChartReportByDeviceList,
  };
};

export const ConvertFormDataToQueryData = (
  formData: StatisticReportFormData,
  chartType: QueryChartType,
): GetMultiDayReportSummaryParams => {
  const { selectedDateType, fixedDate, selectedDate, viewType } = formData;
  let start: Date;
  let end: Date;
  let queryType: QueryDateType;

  if (selectedDateType === DateTypes.START_DATE) {
    start = selectedDate;
    end = fixedDate ?? new Date();
  } else {
    start = fixedDate ?? new Date();
    end = selectedDate;
  }

  start.setHours(0, 0, 0, 0);
  end.setHours(23, 59, 0, 0);

  switch (viewType) {
    case ViewTypes.BY_DAY:
      queryType = QueryDateType.DAY;
      break;
    case ViewTypes.BY_WEEK:
      queryType = QueryDateType.WEEK;
      break;
    case ViewTypes.BY_MONTH:
      queryType = QueryDateType.MONTH;
      break;
    case ViewTypes.BY_YEAR:
      queryType = QueryDateType.YEAR;
      break;
    default:
      queryType = QueryDateType.DAY;
      break;
  }

  return {
    start: toISOStringWithoutTimeZone(start),
    end: toISOStringWithoutTimeZone(end),
    chartType,
    queryType,
  };
};

export const convertChartData = (
  chartData: MultiDateReportSummaryChart,
  chartType: 'PIE' | 'LINE' | 'BAR',
): ReportData | ReportComplexBarData[] => {
  const { data, labelSteps } = chartData;

  switch (chartType) {
    case 'PIE':
      return {
        labelStep: ['Chỉ số điện bán thành phẩm', 'Chỉ số điện chế biến dăm'],
        data: [
          {
            label: 'Chỉ số điện',
            dataset: [
              data.BTP?.SUM_TOTAL?.[0] ?? 0,
              data.DAM?.SUM_TOTAL?.[0] ?? 0,
            ],
          },
        ],
      };
    case 'LINE':
      return {
        labelStep: labelSteps,
        data: [
          {
            label: 'Chỉ số điện chế biến dăm',
            dataset: data.DAM.SUM_TOTAL.map((value) => value),
          },
          {
            label: 'Chỉ số điện thành phẩm',
            dataset: data.BTP.SUM_TOTAL.map((value) => value),
          },
        ],
      };
    case 'BAR': {
      const btpDeviceLabels = Object.keys(data.BTP)
        .filter((key) => key.includes('SUM_SPECIFIC_'))
        .sort(compareDeviceName);
      const damDeviceLabels = Object.keys(data.DAM)
        .filter((key) => key.includes('SUM_SPECIFIC_'))
        .sort(compareDeviceName);

      return [
        {
          id: 1,
          title: 'Chỉ số điện chế biến dăm',
          labelStep: labelSteps,
          data: damDeviceLabels.map((deviceLabel) => ({
            label: `Thiết bị ${deviceLabel.replace('SUM_SPECIFIC_', '')}`,
            dataset: data.DAM[deviceLabel as keyof typeof data.DAM],
          })),
        },
        {
          id: 2,
          title: 'Chỉ số điện bán thành phần',
          labelStep: labelSteps,
          data: btpDeviceLabels.map((deviceLabel) => ({
            label: `Thiết bị ${deviceLabel.replace('SUM_SPECIFIC_', '')}`,
            dataset: data.BTP[deviceLabel as keyof typeof data.BTP],
          })),
        },
      ];
    }
  }
};
