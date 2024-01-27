import { ReactNode } from 'react';
import _ from 'lodash';

import {
  Autocomplete as MuiAutocomplete,
  AutocompleteProps,
  AutocompleteRenderInputParams,
  ChipTypeMap,
} from '~/libs/mui';
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  UseControllerProps,
} from '~/libs/react-hook-form';

interface BaseOption {
  id: number | string;
  label: string;
}

interface IAutocompleteProps<
  T extends FieldValues,
  Value extends BaseOption,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
> extends Omit<
      AutocompleteProps<
        Value,
        Multiple,
        DisableClearable,
        FreeSolo,
        ChipComponent
      >,
      'defaultValue' | 'options' | 'renderInput'
    >,
    Omit<UseControllerProps, 'defaultValue' | 'name' | 'control'> {
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  name: FieldPath<T>;
  control?: Control<T>;
  options: Value[];
  renderInput: (params: AutocompleteRenderInputParams) => ReactNode;
}

export function Autocomplete<
  T extends FieldValues,
  Value extends BaseOption,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = ChipTypeMap['defaultComponent'],
>(
  props: IAutocompleteProps<
    T,
    Value,
    Multiple,
    DisableClearable,
    FreeSolo,
    ChipComponent
  >,
) {
  const { name, control, defaultValue, rules, shouldUnregister, ...rest } =
    props;

  // Set up props for the Controller component if control is provided
  const controllerProps = {
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  };

  // Render the input component with or without the Controller component
  if (control) {
    return (
      <Controller<T>
        {...controllerProps}
        render={({ field }) => (
          <MuiAutocomplete
            {...field}
            {...rest}
            isOptionEqualToValue={(option, value) => _.isEqual(option, value)}
            options={props.options}
            renderInput={props.renderInput}
            onChange={(data) => {
              return data;
            }}
          />
        )}
      />
    );
  }

  return <MuiAutocomplete {...rest} />;
}
