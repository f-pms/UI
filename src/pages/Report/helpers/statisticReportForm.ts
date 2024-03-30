import * as yup from 'yup';

import {
  GetMultiDayReportSummaryParams,
  QueryChartType,
} from '~/services/report/queries/useQueryReportCharts';

import { ConvertFormDataToQueryData } from '~/pages/Report/helpers/chartDataConverter';

export enum DateTypes {
  START_DATE = 'Ngày bắt đầu',
  END_DATE = 'Ngày kết thúc',
}

export enum ViewTypes {
  BY_DAY = 'Xem theo ngày',
  BY_WEEK = 'Xem theo tuần',
  BY_MONTH = 'Xem theo tháng',
  BY_YEAR = 'Xem theo năm',
}

export interface StatisticReportFormData {
  viewType: ViewTypes;
  stepField: number;
  selectedDateType: DateTypes;
  selectedDate: Date;
  fixedDate?: Date;
}

export const defaultSelectedDate = new Date();
defaultSelectedDate.setDate(defaultSelectedDate.getDate() - 1);
export const defaultFixedDate = new Date();
defaultFixedDate.setDate(defaultFixedDate.getDate() - 2);

export const defaultStatisticReportFormData: StatisticReportFormData = {
  viewType: ViewTypes.BY_DAY,
  stepField: 2,
  selectedDateType: DateTypes.END_DATE,
  selectedDate: defaultSelectedDate,
  fixedDate: defaultFixedDate,
};

export const statisticReportValidationSchema = yup.object({
  viewType: yup.mixed<ViewTypes>().required().oneOf(Object.values(ViewTypes)),
  stepField: yup
    .number()
    .required('Number field is required')
    .test({
      name: 'Validate step for day',
      exclusive: false,
      params: {},
      message: 'Chỉ được chọn từ 2 đến 12 ngày',
      test: function (value) {
        if (this.parent.viewType === ViewTypes.BY_DAY) {
          return value > 1 && value <= 12;
        }
        return true;
      },
    })
    .test({
      name: 'Validate step for week',
      exclusive: false,
      params: {},
      message: 'Chỉ được chọn từ 2 đến 10 tuần',
      test: function (value) {
        if (this.parent.viewType === ViewTypes.BY_WEEK) {
          return value > 1 && value <= 10;
        }
        return true;
      },
    })
    .test({
      name: 'Validate step for month',
      exclusive: false,
      params: {},
      message: 'Chỉ được chọn từ 2 đến 12 tháng',
      test: function (value) {
        if (this.parent.viewType === ViewTypes.BY_MONTH) {
          return value > 1 && value <= 24;
        }
        return true;
      },
    })
    .test({
      name: 'Validate step for year',
      exclusive: false,
      params: {},
      message: 'Chỉ được chọn từ 2 đến 5 năm',
      test: function (value) {
        if (this.parent.viewType === ViewTypes.BY_YEAR) {
          return value > 1 && value <= 5;
        }
        return true;
      },
    }),
  selectedDateType: yup.string().required('View type is required'),
  selectedDate: yup.date().required(),
  fixedDate: yup.date().test({
    name: 'Validate future fixed day',
    exclusive: false,
    params: {},
    message: 'Ngày kết thúc không thể ở tương lai',
    test: function (value) {
      if (!value) {
        return true;
      }

      if (!!value && this.parent.selectedDateType === DateTypes.START_DATE) {
        return value <= new Date();
      }
      return true;
    },
  }),
});

export type StatisticReportFilterParams = {
  lineChartParams: GetMultiDayReportSummaryParams;
  pieChartParams: GetMultiDayReportSummaryParams;
  barChartParams: GetMultiDayReportSummaryParams;
};

export const defaultStatisticReportFilterParams = {
  lineChartParams: ConvertFormDataToQueryData(
    defaultStatisticReportFormData,
    QueryChartType.LINE,
  ),
  pieChartParams: ConvertFormDataToQueryData(
    defaultStatisticReportFormData,
    QueryChartType.PIE,
  ),
  barChartParams: ConvertFormDataToQueryData(
    defaultStatisticReportFormData,
    QueryChartType.BAR,
  ),
};
