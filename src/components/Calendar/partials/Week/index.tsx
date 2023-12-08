import { useContext } from 'react';

import { getUnixTime } from '~/libs/date-fns';
import { Box } from '~/libs/mui';
import { useDayPicker } from '~/libs/react-day-picker';

import { CalendarContext } from '~/components/Calendar/context/CalendarContext';
import { getWeekdays } from '~/components/Calendar/helpers/getWeekdays';
import { Caption } from '~/components/Calendar/partials/Caption';
import { HeadRow } from '~/components/Calendar/partials/HeadRow';

export default function Week() {
  const { week } = useContext(CalendarContext);
  const { classNames, styles } = useDayPicker();

  const weekdays = getWeekdays(week);

  return (
    <div className={classNames.month}>
      <Caption />
      <div style={{ height: '700px', overflowY: 'scroll' }}>
        <table className={classNames.table} style={styles.table}>
          <thead className={classNames.head}>
            <HeadRow />
          </thead>
          <tbody className={classNames.tbody} style={styles.tbody}>
            <tr className={classNames.row} style={{ ...styles.row }}>
              {weekdays.map((weekday) => (
                <th
                  key={getUnixTime(weekday)}
                  className={classNames.cell}
                  role='presentation'
                  scope='row'
                  style={{ ...styles.cell }}
                >
                  <Box sx={{ height: '1500px' }}>{weekday.getDate()}</Box>
                </th>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
