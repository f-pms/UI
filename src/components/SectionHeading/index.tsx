import { Divider, Typography } from '~/components/MuiComponents';

export interface ISectionHeadingProps {
  header?: string;
  description?: string;
}

export function SectionHeading(props: ISectionHeadingProps) {
  const { header, description } = props;
  return (
    <>
      <Typography sx={{ fontWeight: 'bold' }} variant='h6'>
        {header}
      </Typography>
      <Typography variant='body2'>{description}</Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
