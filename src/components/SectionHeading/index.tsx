import { Box, Divider, Stack, Typography } from '~/components/MuiComponents';

export interface ISectionHeadingProps {
  header?: string;
  description?: string;
  divider?: boolean;
  actions?: React.ReactNode;
}

export function SectionHeading(props: ISectionHeadingProps) {
  const { header, description, divider = true, actions } = props;
  return (
    <>
      <Stack
        alignItems='flex-end'
        direction='row'
        justifyContent='space-between'
      >
        <Box>
          <Typography sx={{ fontWeight: 'bold', mb: 1 }} variant='h5'>
            {header}
          </Typography>
          <Typography variant='body2'>{description}</Typography>
        </Box>
        <Box>{actions}</Box>
      </Stack>
      {divider && <Divider sx={{ my: 2 }} />}
    </>
  );
}
