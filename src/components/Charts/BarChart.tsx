import { useEffect, useMemo, useState } from 'react';
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

import { ReportComplexBarData } from '~/pages/Report/mocks/chartDataset';

import { getColorNumber } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';

type BarChartProps = StackProps & {
  title: string;
  dataset: ReportComplexBarData[];
  isStacked?: boolean;
};

const BarChart = ({
  isStacked = false,
  dataset,
  title,
  ...props
}: BarChartProps) => {
  const [reportType, setReportType] = useState(dataset[0].title);
  const [hiddenLabels, setHiddenLabels] = useState<string[]>([]);
  const [visibleData, setVisibleData] = useState<ReportComplexBarData>(
    dataset[0],
  );

  useEffect(() => {
    const selectedData = dataset.find((data) => data.title === reportType);

    if (selectedData) {
      setVisibleData(selectedData);
      setHiddenLabels([]);
    }
  }, [reportType, dataset]);

  const data = useMemo(
    () => ({
      labels: visibleData.labelStep,
      datasets: visibleData.data.map((item, index) => ({
        label: item.label,
        data: item.dataset,
        backgroundColor: getColorNumber(index + 1),
        hidden: hiddenLabels.includes(item.label),
      })),
    }),
    [hiddenLabels, visibleData.labelStep, visibleData.data],
  );

  const options = useMemo(
    () => ({
      plugins: {
        datalabels: {
          formatter: () => ``,
        },
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
      animation: false as const,
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
      const newHiddenLabels = [...prevValue];
      const removedIndex = newHiddenLabels.indexOf(label);

      if (removedIndex >= 0) newHiddenLabels.splice(removedIndex, 1);

      return newHiddenLabels;
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
    <ChartContainer height={'auto'} title={title} {...props}>
      <Stack direction='row'>
        <Box width={1000}>
          <Bar data={data} options={options} />
        </Box>
        <Stack alignItems={'center'} spacing={5} width={380}>
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
              {dataset.map((data, index) => (
                <FormControlLabel
                  key={`DATA_ITEM_${index}`}
                  control={<Radio />}
                  label={<Typography variant='body2'>{data.title}</Typography>}
                  sx={{
                    width: 'fit-content',
                  }}
                  value={data.title}
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
            {visibleData.data.map(({ label }, index) => (
              <Stack
                key={`DEVICE_${index}`}
                alignItems={'flex-st1art'}
                direction='row'
                gap={1}
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() => handleLegendClick(label)}
              >
                <Box
                  sx={{
                    background: getColorNumber(index + 1),
                    height: 15,
                    width: 55,
                  }}
                />
                <Typography
                  sx={{
                    textDecoration: hiddenLabels.includes(label)
                      ? 'line-through'
                      : '',
                  }}
                  variant='body2'
                  width={180}
                >
                  {label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </ChartContainer>
  );
};

export default BarChart;
