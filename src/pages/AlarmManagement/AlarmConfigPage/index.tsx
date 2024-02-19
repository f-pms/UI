import { AlarmConfigTable } from '~/pages/AlarmManagement/partials/AlarmConfigTable';
import { ConfigPageHeading } from '~/pages/AlarmManagement/partials/ConfigPageHeading';

import { Container } from '~/components/MuiComponents';

export function AlarmConfigPage() {
  return (
    <Container sx={{ py: 2 }}>
      <ConfigPageHeading />
      <AlarmConfigTable />
    </Container>
  );
}
