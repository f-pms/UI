import { Dispatch, useState } from 'react';

import { COLOR_SCHEME_OPTIONS } from '~/layouts/partials/Header/helpers/colorSchemeOptions';
import { FONT_FAMILY_OPTIONS } from '~/layouts/partials/Header/helpers/fontFamilyOptions';
import { SETTING_ITEMS } from '~/layouts/partials/Header/helpers/settingItems';
import { FontFamilyCustom } from '~/layouts/partials/Header/ThemeCustomization/FontFamilyCustom';
import { ThemeColorCustom } from '~/layouts/partials/Header/ThemeCustomization/ThemeColorCustom';
import { UserSettingItem } from '~/layouts/partials/Header/UserSettingItem';

import { SoftButton } from '~/components';
import {
  ExpandMoreOutlinedIcon,
  FormatColorFillOutlinedIcon,
  HighlightOffOutlinedIcon,
  TextFormatOutlinedIcon,
} from '~/components/Icons';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '~/components/MuiComponents';

export interface IThemeCustomizationProps {
  setAnchorElUser: Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export function ThemeCustomization({
  setAnchorElUser,
}: IThemeCustomizationProps) {
  const [opened, setOpened] = useState(false);

  const onOpen = () => {
    setAnchorElUser(null);
    setOpened(true);
  };

  return (
    <>
      {/* Handle open Theme Customization */}
      <UserSettingItem
        key={SETTING_ITEMS[1].label}
        handleCloseUserMenu={onOpen}
        setting={SETTING_ITEMS[1]}
      />

      {/* Render drawer */}
      <Drawer anchor='right' open={opened} onClose={() => setOpened(false)}>
        <Box sx={{ width: 340 }}>
          {/* Drawer Header */}
          <Stack
            alignItems='center'
            direction='row'
            justifyContent='space-between'
            sx={(theme) => ({
              p: 2,
              pr: 1,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            })}
          >
            <Typography sx={{ pl: 0 }} variant='subtitle1'>
              Tùy chỉnh giao diện
            </Typography>
            <IconButton onClick={() => setOpened(false)}>
              <HighlightOffOutlinedIcon
                fontSize='small'
                sx={(theme) => ({ color: theme.palette.primary.contrastText })}
              />
            </IconButton>
          </Stack>
          {/* Drawer Content: color-scheme customize  */}
          <Accordion defaultExpanded disableGutters>
            <AccordionSummary
              aria-controls='panel1a-content'
              expandIcon={<ExpandMoreOutlinedIcon />}
              id='panel1a-header'
            >
              <Stack alignItems='center' direction='row'>
                <SoftButton color='primary'>
                  <FormatColorFillOutlinedIcon fontSize='small' />
                </SoftButton>
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                    Bảng màu
                  </Typography>
                  <Typography variant='caption'>
                    Chọn màu chủ đạo cho giao diện
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                alignItems='center'
                justifyContent='start'
                spacing={2}
              >
                {COLOR_SCHEME_OPTIONS.map((option) => (
                  <Grid key={option.value} item>
                    <ThemeColorCustom option={option} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
          {/* Drawer Content: font-family customize  */}
          <Accordion defaultExpanded disableGutters>
            <AccordionSummary
              aria-controls='panel2a-content'
              expandIcon={<ExpandMoreOutlinedIcon />}
              id='panel2a-header'
            >
              <Stack alignItems='center' direction='row'>
                <SoftButton color='primary'>
                  <TextFormatOutlinedIcon fontSize='small' />
                </SoftButton>
                <Box sx={{ ml: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }} variant='body2'>
                    Kiểu chữ
                  </Typography>
                  <Typography variant='caption'>
                    Chọn kiểu chữ cho giao diện
                  </Typography>
                </Box>
              </Stack>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                alignItems='center'
                justifyContent='start'
                spacing={2}
              >
                {FONT_FAMILY_OPTIONS.map((option) => (
                  <Grid key={option.value} item>
                    <FontFamilyCustom option={option} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Drawer>
    </>
  );
}
