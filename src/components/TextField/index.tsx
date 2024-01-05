import {
  BaseTextFieldProps,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '~/libs/mui';
import {
  Control,
  Controller,
  FieldPath,
  FieldPathValue,
  FieldValues,
  UseControllerProps,
} from '~/libs/react-hook-form';

interface TextFieldProps<T extends FieldValues>
  extends Omit<BaseTextFieldProps, 'defaultValue' | 'name'>,
    Omit<UseControllerProps, 'defaultValue' | 'name' | 'control'> {
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  variant?: MuiTextFieldProps['variant'];
  name: FieldPath<T>;
  control?: Control<T>; // The React Hook Form control object, if using React Hook Form
}

// This component renders a TextField with Material UI styling.
// It can be used with or without the React Hook Form library.
// If used with React Hook Form, it will be wrapped in a Controller component.
export function TextField<T extends FieldValues>(
  props: Readonly<TextFieldProps<T>>,
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
        render={({ field }) => <MuiTextField {...field} {...rest} />}
      />
    );
  }

  return <MuiTextField defaultValue={defaultValue} name={name} {...rest} />;
}
