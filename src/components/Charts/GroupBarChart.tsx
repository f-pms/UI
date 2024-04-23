import { useEffect, useMemo, useState } from 'react';
import { TooltipItem } from 'chart.js';
import _ from 'lodash';
import { Bar } from 'react-chartjs-2';

import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  StackProps,
  Typography,
} from '@mui/material';

import { ReportComplexBarData } from '~/pages/Report/mocks/chartDataset';

import { getColorNumber } from '~/components/Charts/chartColorsUtil';
import ChartContainer from '~/components/Charts/ChartContainer';
import {
  VisibilityOffOutlinedIcon,
  VisibilityOutlinedIcon,
} from '~/components/Icons';

import { formatNumber } from './../../utils/formatNumber';

type GroupBarChartProps = StackProps & {
  title: string;
  dataset: ReportComplexBarData[];
  isStacked?: boolean;
  legendTitle: string;
  disableLabels?: boolean;
};

export const GroupBarChart = ({
  isStacked = false,
  dataset,
  title,
  legendTitle,
  disableLabels = false,
  ...props
}: GroupBarChartProps) => {
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
        tooltip: {
          callbacks: {
            label: (tooltipItem: TooltipItem<'bar'>) => {
              const label = tooltipItem.dataset.label;
              const value = tooltipItem.parsed.y;
              return `${label}: ${formatNumber(value, 6)} KWh`;
            },
          },
        },
      },
      scales: {
        x: {
          stacked: isStacked,
          ticks: {
            callback: function (index: number | string): string {
              return disableLabels
                ? ''
                : visibleData.labelStep[parseInt(index as string)];
            },
          },
        },
        y: {
          stacked: isStacked,
        },
      },
      maintainAspectRatio: false,
    }),
    [isStacked, disableLabels, visibleData.labelStep],
  );

  const handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportType(event.target.value as string);
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

  const handleHideAll = () => {
    setHiddenLabels(visibleData.data.map(({ label }) => label));
  };

  const handleShowAll = () => {
    setHiddenLabels([]);
  };

  return (
    <ChartContainer height={'auto'} title={title} {...props}>
      <Grid container columnSpacing={5} justifyContent='center'>
        <Grid item sx={{ height: 'auto', minHeight: '580px' }} xs={9}>
          <Bar data={data} options={options} />
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography
              color='text.strong'
              sx={{ fontWeight: 'bold' }}
              variant='body2'
            >
              Công đoạn sản xuất
            </Typography>
            <RadioGroup
              aria-labelledby='demo-controlled-radio-buttons-group'
              name='controlled-radio-buttons-group'
              value={reportType}
              onChange={handleChangeType}
            >
              {dataset.map((data) => (
                <FormControlLabel
                  key={data.id}
                  control={<Radio />}
                  label={
                    <Typography variant='body2'>
                      {_.capitalize(data.title)}
                    </Typography>
                  }
                  sx={{
                    width: 'fit-content',
                  }}
                  value={data.title}
                />
              ))}
            </RadioGroup>
          </Stack>

          <Stack gap={1} mt={2}>
            <Typography
              color='text.strong'
              marginBottom={1}
              sx={{ fontWeight: 'bold' }}
              variant='body2'
            >
              {legendTitle}
            </Typography>

            {visibleData.data.map(({ label }, index) => (
              <Stack
                key={label}
                alignItems='center'
                direction='row'
                gap={2}
                sx={{
                  cursor: 'pointer',
                  my: '2px',
                }}
                onClick={() => handleLegendClick(label)}
              >
                <Box
                  sx={{
                    background: getColorNumber(index + 1),
                    height: 16,
                    width: 55,
                  }}
                />
                <Typography
                  sx={{
                    textDecoration: hiddenLabels.includes(label)
                      ? 'line-through'
                      : '',
                  }}
                  variant='caption'
                  width={180}
                >
                  {label}
                </Typography>
              </Stack>
            ))}
            <Divider sx={{ mb: 1 }} />

            <Stack direction='row' px={1} spacing={2}>
              <Button
                size='small'
                startIcon={<VisibilityOffOutlinedIcon />}
                sx={{ width: '100%' }}
                variant='outlined'
                onClick={handleHideAll}
              >
                Ẩn tất cả
              </Button>
              <Button
                size='small'
                startIcon={<VisibilityOutlinedIcon />}
                sx={{ width: '100%' }}
                variant='contained'
                onClick={handleShowAll}
              >
                Hiện tất cả
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ChartContainer>
  );
};
