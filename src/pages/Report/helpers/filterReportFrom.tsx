import { array, date, object, ObjectSchema, string } from 'yup';

export enum ReportSortBy {
  TYPE = 'type',
  RECORDING_DATE = 'recordingDate',
}

export enum ReportOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export interface FilterReportFormData {
  typeId: number[];
  startDate: Date;
  endDate: Date;
  sortBy: ReportSortBy;
  order: ReportOrder;
}

export const defaultFilterReportFormData: FilterReportFormData = {
  typeId: [],
  startDate: new Date(),
  endDate: new Date(),
  sortBy: ReportSortBy.RECORDING_DATE,
  order: ReportOrder.ASC,
};

export const filterReportSchema: ObjectSchema<FilterReportFormData> = object({
  typeId: array().min(1, 'Cần chọn ít nhất 1 loại chỉ số điện').required(),
  startDate: date().required(),
  endDate: date().required(),
  sortBy: string().oneOf(Object.values(ReportSortBy)).required(),
  order: string().oneOf(Object.values(ReportOrder)).required(),
});
