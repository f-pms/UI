import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  OutlinedInputProps,
  SxProps,
  Typography,
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

export interface InputWithLabelProps<T extends FieldValues>
  extends Omit<OutlinedInputProps, 'defaultValue' | 'name' | 'label' | 'error'>,
    Omit<UseControllerProps, 'defaultValue' | 'name' | 'control'> {
  defaultValue?: FieldPathValue<T, FieldPath<T>>;
  name: FieldPath<T>;
  control?: Control<T>; // The React Hook Form control object, if using React Hook Form
  label?: string;
  description?: string;
  styled?: SxProps;
  error?: FieldError;
  clearErrors?: (name?: FieldPath<T>) => void;
}

export function InputWithLabel<T extends FieldValues>(
  props: InputWithLabelProps<T>,
) {
  const {
    name,
    control,
    defaultValue,
    label,
    description,
    styled,
    error,
    type,
    clearErrors,
    ...rest
  } = props;

  const controllerProps = {
    control,
    defaultValue,
    name,
    valueAsNumber: type === 'number',
  };

  return (
    <FormControl sx={{ width: '100%', ...styled }} variant='outlined'>
      <Typography
        color='text.strong'
        sx={{ fontWeight: 'bold' }}
        variant='subtitle2'
      >
        {label}
      </Typography>
      <Typography variant='body2'>{description}</Typography>
      {control ? (
        <Controller<T>
          {...controllerProps}
          render={({ field }) => (
            <OutlinedInput
              {...field}
              {...rest}
              size='small'
              sx={{ fontSize: '14px' }}
              type={type}
              onChange={(e) => {
                clearErrors?.(name);
                field.onChange(e.target.value);
              }}
            />
          )}
        />
      ) : (
        <OutlinedInput
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
