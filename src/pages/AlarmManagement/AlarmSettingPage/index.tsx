import SettingPageHeading from '~/pages/AlarmManagement/partials/SettingPageHeading';
import { TablePage } from '~/pages/Components';

import { Container } from '~/components/MuiComponents';

export function AlarmSettingPage() {
  return (
    <Container sx={{ py: 2 }}>
      <SettingPageHeading />
      <TablePage />
    </Container>
  );
}
