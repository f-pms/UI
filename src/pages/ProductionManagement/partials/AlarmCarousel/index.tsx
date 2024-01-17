import Carousel from 'react-material-ui-carousel';

import { MOCK_DATA_ALARMS } from '~/pages/ProductionManagement/helpers/alarmMockData';
import AlarmBar from '~/pages/ProductionManagement/partials/AlarmCarousel/AlarmBar';

export interface IAlarmCarouselProps {}

export default function AlarmCarousel() {
  return (
    <Carousel
      animation='slide'
      indicators={false}
      interval={5000}
      navButtonsAlwaysInvisible={true}
    >
      {MOCK_DATA_ALARMS.map((alarm) => (
        <AlarmBar key={alarm.id} alarm={alarm} />
      ))}
    </Carousel>
  );
}
