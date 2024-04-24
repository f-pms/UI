import _ from 'lodash';

import { AlarmType } from '~/types';

export const getBlueprintName = (blueprint: string) => {
  if (!blueprint) {
    return 'Không xác định';
  }

  if (blueprint === AlarmType.PREDEFINED) {
    return 'Biến cảnh báo (cơ bản)';
  }
  if (blueprint === AlarmType.CUSTOM) {
    return 'Biến cảnh báo (nâng cao)';
  }
  return _.capitalize(blueprint);
};
