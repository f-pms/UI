import { Box, Divider, Stack, Typography } from '~/components/MuiComponents';

export interface ISectionHeadingProps {
  header?: string;
  description?: string | React.ReactNode;
  divider?: boolean;
  actions?: React.ReactNode;
}

export function SectionHeading(props: ISectionHeadingProps) {
  const { header, description, divider = true, actions } = props;
  return (
    <>
      <Stack
        alignItems='center'
        direction='row'
        justifyContent='space-between'
        sx={{ mb: 1 }}
      >
        <Box>
          <Typography
            color='text.strong'
            sx={{ fontWeight: 'bold' }}
            variant='h5'
          >
            {header}
          </Typography>
          <Typography color='text.primary' component='div' variant='body2'>
            {description}
          </Typography>
        </Box>
        <Box>{actions}</Box>
      </Stack>
      {divider && <Divider sx={{ my: 2 }} />}
    </>
  );
}
