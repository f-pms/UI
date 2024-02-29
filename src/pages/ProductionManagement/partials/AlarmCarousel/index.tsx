import Carousel from 'react-material-ui-carousel';

import { useQueryAlarmHistories } from '~/services/alarm-history/queries/useQueryAlarmHistories';
import { AlarmHistoryStatus } from '~/types';

import AlarmBar from '~/pages/ProductionManagement/partials/AlarmCarousel/AlarmBar';

export interface IAlarmCarouselProps {}

export default function AlarmCarousel() {
  const { data: sentAlarms } = useQueryAlarmHistories({
    status: AlarmHistoryStatus.SENT,
  });
  return sentAlarms?.length ? (
    <Carousel
      animation='slide'
      indicators={false}
      interval={5000}
      navButtonsAlwaysInvisible={true}
    >
      {sentAlarms?.map((alarm) => <AlarmBar key={alarm.id} alarm={alarm} />)}
    </Carousel>
  ) : null;
}
