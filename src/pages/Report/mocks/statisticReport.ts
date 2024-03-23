export type ElectricityConsumption = {
  id?: number;
  title?: string;
  consumedElectricity?: number;
};

export const ELECTRICITY_CONSUMPTION_LIST: ElectricityConsumption[] = [
  {
    id: 1,
    title: 'Giờ cao điểm',
    consumedElectricity: 1024,
  },
  {
    id: 2,
    title: 'Giờ thấp điểm',
    consumedElectricity: 512,
  },
  {
    id: 3,
    title: 'Giờ bình thường',
    consumedElectricity: 718,
  },
  {
    id: 4,
    title: 'Tổng chỉ số điện',
    consumedElectricity: 2254,
  },
];
