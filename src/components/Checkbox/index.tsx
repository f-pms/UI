import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '~/libs/mui';
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  UseControllerProps,
} from '~/libs/react-hook-form';

interface CheckboxProps<T extends FieldValues>
  extends Omit<MuiCheckboxProps, 'defaultValue' | 'name'>,
    Omit<UseControllerProps, 'defaultValue' | 'name' | 'control'> {
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  name: FieldPath<T>;
  control?: Control<T>; // The React Hook Form control object, if using React Hook Form
}

// This component renders a checkbox input field with Material UI styling.
// It can be used with or without the React Hook Form library.
// If used with React Hook Form, it will be wrapped in a Controller component.
export function Checkbox<T extends FieldValues>(props: CheckboxProps<T>) {
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
        render={({ field }) => <MuiCheckbox {...field} {...rest} />}
      />
    );
  }

  return <MuiCheckbox defaultValue={defaultValue} name={name} {...rest} />;
}
