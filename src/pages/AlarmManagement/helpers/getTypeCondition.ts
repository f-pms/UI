import { TypeCondition } from '~/pages/AlarmManagement/partials/AlarmInfoForm/TypeConditionSelect';

export const getTypeCondition = (
  min?: number | null | string,
  max?: number | null | string,
) => {
  if (min && max) {
    return TypeCondition.RANGE;
  } else if (min) {
    return TypeCondition.GREATER_THAN;
  } else if (max) {
    return TypeCondition.LESS_THAN;
  }
  return TypeCondition.RANGE;
};
