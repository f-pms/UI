import { useContext, useRef, useState } from 'react';

import { useOnClickOutside } from '~/hooks/useOnClickOutside';

import { DateRangeContext } from '~/components/DateRangePicker/context/DateRangeContext';
import { CustomDatePicker } from '~/components/DateRangePicker/CustomDatePicker';
import { DateInput } from '~/components/DateRangePicker/DateInput';
import { Box, Paper } from '~/components/MuiComponents';

export function CustomInputField() {
  const { onBlur } = useContext(DateRangeContext);

  const refInput = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    setFocused(false);
    onBlur();
  };

  useOnClickOutside(refInput, handleBlur);

  return (
    <Paper
      ref={refInput}
      sx={{ px: 1, position: 'relative' }}
      variant='outlined'
      onFocus={() => setFocused(true)}
    >
      <DateInput focused={focused} setFocused={setFocused} />
      <Box
        sx={{
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          bgcolor: 'background.paper',
          position: 'absolute',
          right: 0,
          top: '42px',
          zIndex: 2,
          display: focused ? 'block' : 'none',
          fontSize: '14px',
        }}
      >
        <CustomDatePicker />
      </Box>
    </Paper>
  );
}
