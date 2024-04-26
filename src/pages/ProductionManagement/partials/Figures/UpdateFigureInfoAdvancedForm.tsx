import { FigureInfoType } from '~/services/blueprint/queries/useQueryBlueprintById';

import { TextField } from '~/components';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '~/components/MuiComponents';

interface UpdateFigureInfoAdvancedFormProps {
  handleClose: () => void;
  figureInfo: FigureInfoType | undefined;
}

export default function UpdateFigureInfoAdvancedForm({
  handleClose,
  figureInfo,
}: UpdateFigureInfoAdvancedFormProps) {
  return (
    <Box marginX={3} marginY={2}>
      <DialogTitle>Cập nhật địa chỉ biến PLC</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          required
          defaultValue={figureInfo?.address}
          id='address'
          label='Địa chỉ'
          margin='dense'
          name='address'
          size='small'
          type='text'
          variant='standard'
        />
      </DialogContent>
      <DialogActions>
        <Button size='small' variant='outlined' onClick={handleClose}>
          Đóng
        </Button>
        <Button
          size='small'
          type='submit'
          variant='contained'
          onClick={() => {}}
        >
          Cập nhật
        </Button>
      </DialogActions>
    </Box>
  );
}
