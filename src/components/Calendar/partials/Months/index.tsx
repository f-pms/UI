import { ReactNode, useContext } from 'react';

import { useDayPicker } from '~/libs/react-day-picker';
import { ViewTypes } from '~/types';

import { CalendarContext } from '~/components/Calendar/context/CalendarContext';
import Week from '~/components/Calendar/partials/Week';

export type MonthsProps = { children: ReactNode };

export function Months(props: MonthsProps): JSX.Element {
  const { viewBy } = useContext(CalendarContext);
  const { classNames, styles } = useDayPicker();

  return (
    <div className={classNames.months} style={styles.months}>
      {viewBy === ViewTypes.Month ? props.children : <Week />}
    </div>
  );
}
