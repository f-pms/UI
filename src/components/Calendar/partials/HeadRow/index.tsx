import { useContext } from 'react';

import { useDayPicker } from '~/libs/react-day-picker';
import { ViewTypes } from '~/types';

import { CalendarContext } from '~/components/Calendar/context/CalendarContext';
import { getWeekdays } from '~/components/Calendar/helpers/getWeekdays';
import MonthHeadRowCell from '~/components/Calendar/partials/HeadRow/MonthHeadRowCell';
import WeekHeadRowCell from '~/components/Calendar/partials/HeadRow/WeekHeadRowCell';

export function HeadRow(): JSX.Element {
  const { week } = useContext(CalendarContext);
  const { viewBy } = useContext(CalendarContext);
  const {
    classNames,
    styles,
    locale,
    labels: { labelWeekday },
  } = useDayPicker();

  const weekdays = getWeekdays(week);

  if (viewBy === ViewTypes.Day) {
    return <></>;
  }

  return (
    <tr
      className={classNames.head_row}
      style={{
        ...styles.head_row,
        height: viewBy == ViewTypes.Month ? '40px' : '56px',
        position: 'sticky',
        top: 0,
        backgroundColor: '#fff',
      }}
    >
      {weekdays.map((weekday, i) => (
        <th
          key={i}
          aria-label={labelWeekday(weekday, { locale })}
          className={classNames.head_cell}
          scope='col'
          style={styles.head_cell}
        >
          {viewBy === ViewTypes.Month ? (
            <MonthHeadRowCell weekday={weekday} />
          ) : (
            <WeekHeadRowCell weekday={weekday} />
          )}
        </th>
      ))}
    </tr>
  );
}
