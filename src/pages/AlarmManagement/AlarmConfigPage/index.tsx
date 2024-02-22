import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';

import { AlarmConfigTable } from '~/pages/AlarmManagement/partials/AlarmConfigTable';
import { ConfigPageHeading } from '~/pages/AlarmManagement/partials/ConfigPageHeading';

import { Container } from '~/components/MuiComponents';

export function AlarmConfigPage() {
  const { data: alarmConditions } = useQueryAlarmConditions();

  return (
    <Container sx={{ py: 2 }}>
      <ConfigPageHeading />
      <AlarmConfigTable alarmConditions={alarmConditions ?? []} />
    </Container>
  );
}
