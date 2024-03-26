import {
  FormControl,
  FormHelperText,
  OutlinedInput as MuiOutlinedInput,
  OutlinedInputProps as MuiOutlinedInputProps,
  SxProps,
} from '~/libs/mui';
import {
  Control,
  Controller,
  FieldError,
  FieldPath,
  FieldPathValue,
  FieldValues,
  UseControllerProps,
} from '~/libs/react-hook-form';

export interface OutlinedInputProps<T extends FieldValues>
  extends Omit<
      MuiOutlinedInputProps,
      'defaultValue' | 'name' | 'label' | 'error'
    >,
    Omit<UseControllerProps, 'defaultValue' | 'name' | 'control'> {
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  name: FieldPath<T>;
  control?: Control<T>; // The React Hook Form control object, if using React Hook Form
  styled?: SxProps;
  error?: FieldError;
}

export function OutlinedInput<T extends FieldValues>(
  props: OutlinedInputProps<T>,
) {
  const { name, control, defaultValue, styled, error, type, ...rest } = props;

  const controllerProps = {
    control,
    defaultValue,
    name,
    valueAsNumber: type === 'number',
  };

  return (
    <FormControl sx={{ width: '100%', ...styled }} variant='outlined'>
      {control ? (
        <Controller<T>
          {...controllerProps}
          render={({ field }) => (
            <MuiOutlinedInput
              {...field}
              {...rest}
              size='small'
              sx={{ fontSize: '14px' }}
              type={type}
            />
          )}
        />
      ) : (
        <MuiOutlinedInput
          defaultValue={defaultValue}
          name={name}
          size='small'
          sx={{ fontSize: '14px' }}
          {...rest}
        />
      )}
      <FormHelperText error={!!error} sx={{ ml: 0 }}>
        {error?.message}
      </FormHelperText>
    </FormControl>
  );
}
