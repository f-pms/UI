import { Stack, Typography } from '~/components/MuiComponents';

export interface IHeaderProps {
  width: number;
  header: string;
  orderNumber?: string;
}

export default function Header(props: IHeaderProps) {
  const { width, header, orderNumber } = props;
  return (
    <Stack
      alignItems='center'
      direction='column'
      justifyContent='center'
      sx={{ height: '106px' }}
      textAlign='center'
    >
      <Typography
        fontSize={13}
        fontWeight='bold'
        sx={{ width: `${width}px`, textWrap: 'wrap' }}
      >
        {header}
      </Typography>
      {orderNumber && (
        <Typography fontSize={12}>{props.orderNumber}</Typography>
      )}
    </Stack>
  );
}
