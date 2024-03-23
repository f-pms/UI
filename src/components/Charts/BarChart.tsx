import { ReactNode, useMemo, useState } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  StackProps,
  Typography,
} from '@mui/material';

import { ChartData } from '~/pages/Report/mocks/chartDataset';
import { REPORT_TYPE_LIST } from '~/pages/Report/mocks/reportTypeList';

import { getColorNumber } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';

type BarChartProps = StackProps & {
  title: string;
  dataset: ChartData[];
  isStacked?: boolean;
};

const BarChart = ({
  isStacked = false,
  dataset,
  title,
  ...props
}: BarChartProps) => {
  const [reportType, setReportType] = useState(REPORT_TYPE_LIST[0].name);
  const [hiddenLabels, setHiddenLabels] = useState<string[]>([]);

  const data = useMemo(
    () => ({
      labels: dataset.map((item) => item.year),
      datasets: [
        {
          label: 'Chỉ số điện chế biến dăm',
          data: dataset.map((item) => item.consumedElectricity),
          backgroundColor: getColorNumber(1),
          hidden: hiddenLabels.includes('Chỉ số điện chế biến dăm'),
        },
        {
          label: 'Chỉ số điện thành phẩm',
          data: dataset.map((item) => item.consumedElectricity2),
          backgroundColor: getColorNumber(2),
        },
      ],
    }),
    [dataset, hiddenLabels],
  );

  const options = useMemo(
    () => ({
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          stacked: isStacked,
        },
        y: {
          stacked: isStacked,
        },
      },
    }),
    [isStacked],
  );

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportType((event.target as HTMLInputElement).value as string);
  };

  const insertHiddenLabel = (label: string) => {
    setHiddenLabels([...hiddenLabels, label]);
  };

  const removeHiddenLabel = (label: string) => {
    setHiddenLabels((prevValue) => {
      const removedIndex = prevValue.indexOf(label);

      prevValue.splice(removedIndex, 1);

      if (!prevValue.length) prevValue = [''];

      return prevValue;
    });
  };

  const handleLegendClick = (type: string) => {
    if (hiddenLabels.includes(type)) {
      removeHiddenLabel(type);
    } else {
      insertHiddenLabel(type);
    }
  };

  return (
    <ChartContainer title={title} {...props}>
      <Stack direction='row'>
        <Bar data={data} options={options} />
        <Stack alignItems={'center'} height={450} spacing={5} width={380}>
          <Stack marginInline='auto' width={250}>
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='subtitle2'
            >
              Công đoạn sản xuất
            </Typography>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={reportType}
              onChange={handleChangeType}
            >
              {REPORT_TYPE_LIST.map((type) => (
                <FormControlLabel
                  key={type.id}
                  control={<Radio />}
                  label={<Typography variant='body2'>{type.name}</Typography>}
                  sx={{
                    width: 'fit-content',
                  }}
                  value={type.name}
                />
              ))}
            </RadioGroup>
          </Stack>
          <Stack gap={1} marginInline='auto' width={250}>
            <Typography
              color='text.strong'
              marginBottom={1}
              sx={{ fontWeight: 'bold' }}
              variant='subtitle2'
            >
              Thiết bị điện
            </Typography>
            <Stack
              alignItems={'flex-start'}
              direction='row'
              gap={1}
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => handleLegendClick('Chỉ số điện chế biến dăm')}
            >
              <Box
                sx={{
                  background: getColorNumber(1),
                  height: 15,
                  width: 55,
                }}
              />
              <Typography
                sx={{
                  textDecoration: hiddenLabels.includes(
                    'Chỉ số điện chế biến dăm',
                  )
                    ? 'line-through'
                    : '',
                }}
                variant='body2'
                width={180}
              >
                Chỉ số điện chế biến dăm
              </Typography>
            </Stack>
            <Stack alignItems={'flex-start'} direction='row' gap={1}>
              <Box
                sx={{
                  background: getColorNumber(2),
                  height: 15,
                  width: 55,
                }}
              />
              <Typography variant='body2' width={180}>
                Chỉ số điện bán thành phẩm
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ChartContainer>
  );
};

export default BarChart;
