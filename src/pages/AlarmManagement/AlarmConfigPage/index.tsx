import { useQueryAlarmConditions } from '~/services/alarm-condition/queries/useQueryAlarmConditions';

import { ConfigPageHeading } from '~/pages/AlarmManagement/partials/Headings/ConfigPageHeading';
import { AlarmConfigTable } from '~/pages/AlarmManagement/partials/Tables/AlarmConfigTable';

import { Container } from '~/components/MuiComponents';

export function AlarmConfigPage() {
  const { data: alarmConditions } = useQueryAlarmConditions();

  return (
    <Container maxWidth='xl' sx={{ py: 2 }}>
      <ConfigPageHeading />
      <AlarmConfigTable alarmConditions={alarmConditions ?? []} />
    </Container>
  );
}
