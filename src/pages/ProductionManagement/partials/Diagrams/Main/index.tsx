import { createContext, useContext, useEffect, useState } from 'react';

import { FiguresCoordinateContext } from '~/pages/ProductionManagement/MonitoringPage';

import Lv30Table, { FigureId } from './partials/Tr30Table';
import blueprint from './blueprint';
import {
  Lv11Table,
  Lv12Table,
  Lv31Table,
  Lv32Table,
  Lv33Table,
  Lv34_1Table,
  Lv34_2Table,
  Lv42Table,
  Lv52Table,
  Lv72Table,
  NhietDoCacPhongDienTable,
  Tr30Table,
  TuBuTr30Table,
  TuyenNguonDt475Pb01090028954Table,
  TuyenNguonDt477Pb01090028955Table,
  TuyenNguonNhaKeoTr82Table,
} from './partials';

import './styles.css';

export enum GroupId {
  Lv11Table = 'Lv11Table',
  Lv12Table = 'Lv12Table',
  Lv31Table = 'Lv31Table',
  Lv32Table = 'Lv32Table',
  Lv33Table = 'Lv33Table',
  /* eslint-disable @typescript-eslint/naming-convention */
  Lv34_1Table = 'Lv34_1Table',
  Lv34_2Table = 'Lv34_2Table',
  Lv42Table = 'Lv42Table',
  Lv52Table = 'Lv52Table',
  Lv72Table = 'Lv72Table',
  Tr30Table = 'Tr30Table',
  TubuTR30Table = 'TubuTR30Table',
  NhietDoCacPhongDienTable = 'NhietDoCacPhongDienTable',
  TuyenNguonDt475Pb01090028954Table = 'TuyenNguonDt475Pb01090028954Table',
  TuyenNguonDt477Pb01090028955Table = 'TuyenNguonDt477Pb01090028955Table',
  TuyenNguonNhaKeoTr82Table = 'TuyenNguonNhaKeoTr82Table',
}

export type Configuration = {
  groupId: string;
  figures: Figure[];
};

export type Figure = {
  id: string;
  address: string;
  displayCoordinate: DisplayCoordinate;
};

export type DisplayCoordinate = {
  x: number;
  y: number;
};

const extractFigures = (
  sensorConfigurations: Configuration[],
  groupId: GroupId,
): Figure[] => {
  return sensorConfigurations.find((configuration) => {
    return configuration.groupId === groupId.toString();
  })!.figures;
};

export function MainDiagram() {
  const figuresCoordinateContext = useContext(FiguresCoordinateContext);

  // useEffect(() => {
  //   const fetchingFigures = setInterval(() => {
  //     const min = 0;
  //     const max = 50;
  //     setFigures({
  //       [GroupId.Lv30Table]: {
  //         [FigureId.Figure1]: generateRandomNum(max, min),
  //         [FigureId.Figure2]: generateRandomNum(max, min),
  //         [FigureId.Figure3]: generateRandomNum(max, min),
  //         [FigureId.Figure4]: generateRandomNum(max, min),
  //         [FigureId.Figure5]: generateRandomNum(max, min),
  //         [FigureId.Figure6]: generateRandomNum(max, min),
  //         [FigureId.Figure7]: generateRandomNum(max, min),
  //         [FigureId.Figure8]: generateRandomNum(max, min),
  //         [FigureId.Figure9]: generateRandomNum(max, min),
  //         [FigureId.Figure10]: generateRandomNum(max, min),
  //       },
  //     });
  //   }, 1000);

  //   return () => clearInterval(fetchingFigures);
  // });

  return (
    <svg
      data-name='Layer 1'
      id='Layer_1'
      style={{ width: '100%', height: '100%' }}
      viewBox='0 0 2871.34 1349'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        className='main__cls-49'
        height='311.67'
        width='2.19'
        x='781.64'
        y='429.15'
      />
      <rect
        className='main__cls-49'
        height='72.86'
        width='2.19'
        x='1148.86'
        y='409.16'
      />
      <rect
        className='main__cls-49'
        height='90.01'
        width='2.19'
        x='1182.5'
        y='393.02'
      />
      <rect
        className='main__cls-49'
        height='69.47'
        width='2.19'
        x='1542.57'
        y='391.68'
      />
      <rect
        className='main__cls-49'
        height='46.53'
        width='2.19'
        x='2027.22'
        y='426.42'
      />
      <rect
        className='main__cls-49'
        height='19.64'
        width='2.19'
        x='2016.04'
        y='371.08'
      />
      <rect
        className='main__cls-49'
        height='54.24'
        width='2.19'
        x='2428.62'
        y='371.08'
      />
      <rect
        className='main__cls-49'
        height='20.84'
        width='2.19'
        x='803.35'
        y='371.08'
      />
      <rect
        className='main__cls-49'
        height='864.72'
        width='2.19'
        x='1427.74'
        y='360.85'
      />
      <rect
        className='main__cls-49'
        height='864.72'
        width='2.19'
        x='1474.63'
        y='360.85'
      />
      <rect
        className='main__cls-55'
        height='2.19'
        width='430.51'
        x='1800.24'
        y='403.95'
      />
      <rect
        className='main__cls-55'
        height='35.06'
        width='2.19'
        x='2228.56'
        y='371.08'
      />
      <rect
        className='main__cls-55'
        height='55.95'
        width='2.19'
        x='1800.24'
        y='403.95'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='381.33'
        x='803.35'
        y='390.83'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='552.81'
        x='598.1'
        y='409.16'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='399.54'
        x='384.28'
        y='429.15'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='166.82'
        x='387.74'
        y='797.54'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='23.22'
        x='1474.63'
        y='1223.39'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='34.21'
        x='1395.72'
        y='1223.39'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='73.75'
        x='2567.91'
        y='1083.12'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='284.07'
        x='2341.27'
        y='1066.53'
      />
      <rect
        className='main__cls-49'
        height='297.64'
        width='2.19'
        x='2640.57'
        y='787.67'
      />
      <rect
        className='main__cls-49'
        height='262.47'
        width='2.19'
        x='2623.54'
        y='806.25'
      />
      <g>
        <rect
          className='main__cls-49'
          height='2.19'
          width='93.65'
          x='2549.11'
          y='787.66'
        />
        <rect
          className='main__cls-49'
          height='12.3'
          width='2.19'
          x='2548.01'
          y='777.56'
        />
      </g>
      <g>
        <rect
          className='main__cls-49'
          height='2.19'
          width='96.04'
          x='2527.5'
          y='806.25'
        />
        <rect
          className='main__cls-49'
          height='24.73'
          width='2.19'
          x='2526.41'
          y='783.7'
        />
      </g>
      <rect
        className='main__cls-49'
        height='73.69'
        width='2.19'
        x='385.94'
        y='797.54'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='95.44'
        x='688.39'
        y='739.68'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='431.47'
        x='996.28'
        y='368.9'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='253.23'
        x='1476'
        y='368.9'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='475.66'
        x='1542.57'
        y='390.62'
      />
      <rect
        className='main__cls-49'
        height='2.19'
        width='403.58'
        x='2027.22'
        y='425.32'
      />
      <g>
        <rect
          className='main__cls-49'
          height='13.67'
          width='2.19'
          x='2567.85'
          y='1083.12'
        />
        <polygon
          className='main__cls-5'
          points='2568.95 1103.9 2572.73 1097.35 2565.17 1097.35 2568.95 1103.9'
        />
      </g>
      <g>
        <rect
          className='main__cls-49'
          height='28.8'
          width='2.19'
          x='2341.27'
          y='1066.53'
        />
        <polygon
          className='main__cls-5'
          points='2342.37 1102.45 2346.15 1095.9 2338.58 1095.9 2342.37 1102.45'
        />
      </g>
      <g>
        <g>
          <rect
            className='main__cls-11'
            height='26.25'
            width='180.9'
            x='303.87'
            y='872.42'
          />
          <text className='main__cls-23' transform='translate(373.24 891.35)'>
            <tspan x='0' y='0'>
              MV30
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-11'
            height='26.25'
            width='180.9'
            x='303.87'
            y='898.67'
          />
          <text className='main__cls-21' transform='translate(376.42 917.69)'>
            <tspan x='0' y='0'>
              SR02
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-11'
            height='26.25'
            width='180.9'
            x='303.87'
            y='1003.66'
          />
          <text className='main__cls-27' transform='translate(321.32 1021.26)'>
            <tspan x='0' y='0'>
              11000V/3 pha/50
            </tspan>
            <tspan className='main__cls-29' x='125.39' y='0'>
              H
            </tspan>
            <tspan x='136.99' y='0'>
              z
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-11'
            height='26.25'
            width='180.9'
            x='303.87'
            y='977.41'
          />
          <text className='main__cls-27' transform='translate(364.64 997.03)'>
            <tspan x='0' y='0'>
              6200kW
            </tspan>
          </text>
        </g>
        <rect
          className='main__cls-11'
          height='52.49'
          width='180.9'
          x='303.87'
          y='925.04'
        />
        <text className='main__cls-27' transform='translate(327.86 945.16)'>
          <tspan className='main__cls-36' x='0' y='0'>
            R
          </tspan>
          <tspan x='9.48' y='0'>
            efine
          </tspan>
          <tspan className='main__cls-31' x='45.88' y='0'>
            r
          </tspan>
          <tspan x='51.51' y='0'>
            -main d
          </tspan>
          <tspan className='main__cls-35' x='107.3' y='0'>
            r
          </tspan>
          <tspan x='113.09' y='0'>
            i
          </tspan>
          <tspan className='main__cls-33' x='117.18' y='0'>
            v
          </tspan>
          <tspan x='125.42' y='0'>
            e
          </tspan>
          <tspan className='main__cls-36' x='-9.08' y='21'>
            Đ
          </tspan>
          <tspan x='2.73' y='21'>
            ộng{' '}
          </tspan>
          <tspan className='main__cls-37' x='35.54' y='21'>
            c
          </tspan>
          <tspan className='main__cls-44' x='43.27' y='21'>
            ơ m
          </tspan>
          <tspan className='main__cls-16' x='71.25' y='21'>
            á
          </tspan>
          <tspan className='main__cls-17' x='79.54' y='21'>
            y nghiền
          </tspan>
        </text>
      </g>
      <rect
        className='main__cls-49'
        height='4.37'
        width='514.18'
        x='232.76'
        y='526.63'
      />
      <rect
        className='main__cls-49'
        height='4.37'
        width='315.25'
        x='803.35'
        y='526.63'
      />
      <rect
        className='main__cls-49'
        height='4.37'
        width='159.04'
        x='1206.65'
        y='526.63'
      />
      <g>
        <rect
          className='main__cls-49'
          height='95.79'
          width='2.19'
          x='1106.89'
          y='584.94'
        />
        <rect
          className='main__cls-49'
          height='218.4'
          width='2.19'
          x='1148.86'
          y='462.33'
        />
        <rect
          className='main__cls-49'
          height='2.19'
          width='44.09'
          x='1106.89'
          y='678.54'
        />
        <g>
          <rect
            className='main__cls-49'
            height='19.69'
            width='2.19'
            x='1106.89'
            y='528.52'
          />
          <polygon
            className='main__cls-5'
            points='1107.99 551.66 1111.36 549.14 1104.61 549.14 1107.99 551.66'
          />
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1093.87'
            y='630.83'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='10.94'
            x='1096.05'
            y='633.33'
          />
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1090.27'
            y='630.83'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='7.53'
            x='1082.74'
            y='633.33'
          />
          <path
            className='main__cls-6'
            d='M1077.37,630.05c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
          />
        </g>
        <polygon
          className='main__cls-5'
          points='1107.99 654.62 1113.3 663.81 1102.68 663.81 1107.99 654.62'
        />
        <g>
          <rect
            className='main__cls-55'
            height='17.5'
            width='2.19'
            x='1135.85'
            y='552.52'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1139.43'
            y='555.8'
          />
          <rect
            className='main__cls-55'
            height='6.56'
            width='2.19'
            x='1143.01'
            y='557.99'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1118.6'
            y='555.8'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='15.06'
            x='1120.79'
            y='560.18'
          />
        </g>
        <rect
          className='main__cls-49'
          height='16.73'
          width='2.19'
          x='1106.87'
          y='568.53'
        />
        <rect
          className='main__cls-49'
          height='2.19'
          transform='translate(70.96 1243.99) rotate(-60)'
          width='19.69'
          x='1102.89'
          y='559.45'
        />
      </g>
      <g>
        <rect
          className='main__cls-49'
          height='97.69'
          width='2.19'
          x='1219.75'
          y='583.05'
        />
        <rect
          className='main__cls-49'
          height='218.4'
          width='2.19'
          x='1182.5'
          y='462.37'
        />
        <rect
          className='main__cls-49'
          height='2.19'
          width='38.62'
          x='1182.5'
          y='678.55'
        />
        <g>
          <rect
            className='main__cls-49'
            height='19.69'
            width='2.19'
            x='1219.75'
            y='526.63'
          />
          <polygon
            className='main__cls-5'
            points='1220.84 549.77 1224.22 547.25 1217.47 547.25 1220.84 549.77'
          />
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1206.72'
            y='628.95'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='10.94'
            x='1208.91'
            y='631.44'
          />
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1203.12'
            y='628.95'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='7.53'
            x='1195.59'
            y='631.44'
          />
          <path
            className='main__cls-6'
            d='M1190.23,628.16c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
          />
        </g>
        <polygon
          className='main__cls-5'
          points='1220.84 648.36 1226.15 657.55 1215.53 657.55 1220.84 648.36'
        />
        <g>
          <rect
            className='main__cls-55'
            height='17.5'
            width='2.19'
            x='1248.7'
            y='550.64'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1252.28'
            y='553.92'
          />
          <rect
            className='main__cls-55'
            height='6.56'
            width='2.19'
            x='1255.87'
            y='556.11'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1231.46'
            y='553.92'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='15.06'
            x='1233.64'
            y='558.29'
          />
        </g>
        <rect
          className='main__cls-49'
          height='16.73'
          width='2.19'
          x='1219.72'
          y='566.64'
        />
        <rect
          className='main__cls-49'
          height='2.19'
          transform='translate(129.03 1340.78) rotate(-60)'
          width='19.69'
          x='1215.75'
          y='557.56'
        />
      </g>
      <g>
        <text className='main__cls-24' transform='translate(870.23 761.11)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//690V
          </tspan>
          <tspan x='9.88' y='18.37'>
            1000k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='811.54'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(843.82 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(836.31 469.36)'>
            <tspan x='0' y='0'>
              TR11
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <circle className='main__cls-6' cx='853.99' cy='596.76' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='839.88'
              y='630.05'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='842.07'
              y='632.55'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='836.28'
              y='630.05'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='828.75'
              y='632.55'
            />
            <path
              className='main__cls-6'
              d='M823.38,629.27c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='848.4'
              y='556.05'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='852.86'
              y='529.36'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(-139.23 765.16) rotate(-45)'
              width='2.19'
              x='852.86'
              y='544.07'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-139.25 765.07) rotate(-45)'
              width='13.12'
              x='847.39'
              y='549.54'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='884.28'
              y='559.62'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='887.86'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='891.44'
              y='565.09'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='867.04'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='869.22'
              y='567.28'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='817.84'
            y='566.19'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='817.84'
            y='595.67'
          />
          <polygon
            className='main__cls-49'
            points='854.48 574.24 867.04 559.08 865.45 557.75 852.9 572.91 854.48 574.24'
          />
          <rect
            className='main__cls-49'
            height='235.06'
            width='2.19'
            x='852.9'
            y='572.91'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='817.84'
            y='523.13'
          />
          <polygon
            className='main__cls-5'
            points='853.99 673.27 859.3 664.07 848.68 664.07 853.99 673.27'
          />
          <polygon
            className='main__cls-5'
            points='853.99 818.28 859.3 809.08 848.68 809.08 853.99 818.28'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='853.35'
              cy='760.88'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='853.35'
              cy='770.68'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='855.62' cy='567.28' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='871.29'
              y='658.62'
            />
            <text className='main__cls-25' transform='translate(886.96 677.81)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(933.74 677.65)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='871.29'
              y='684.87'
            />
            <text className='main__cls-25' transform='translate(886.96 704.06)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(933.74 703.89)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='871.29'
              y='711.11'
            />
            <text className='main__cls-25' transform='translate(886.96 730.3)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(933.74 730.14)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(998.96 761.11)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            2000k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='939.5'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(971.78 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(964.28 469.36)'>
            <tspan x='0' y='0'>
              TR12
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1012.24'
              y='559.62'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1015.83'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1019.41'
              y='565.09'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='995'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='997.19'
              y='567.28'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='93.75'
              x='980.86'
              y='797.54'
            />
            <rect
              className='main__cls-49'
              height='18.84'
              width='2.19'
              x='1073.52'
              y='797.54'
            />
            <circle className='main__cls-6' cx='981.95' cy='596.76' r='9.84' />
            <g>
              <rect
                className='main__cls-55'
                height='7.18'
                width='2.19'
                x='967.84'
                y='630.05'
              />
              <rect
                className='main__cls-55'
                height='2.19'
                width='10.94'
                x='970.03'
                y='632.55'
              />
              <rect
                className='main__cls-55'
                height='7.18'
                width='2.19'
                x='964.25'
                y='630.05'
              />
              <rect
                className='main__cls-55'
                height='2.19'
                width='7.53'
                x='956.71'
                y='632.55'
              />
              <path
                className='main__cls-6'
                d='M951.35,629.27c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
              />
            </g>
            <g>
              <rect
                className='main__cls-49'
                height='2.19'
                width='11.09'
                x='976.36'
                y='556.05'
              />
              <rect
                className='main__cls-49'
                height='26.69'
                width='2.19'
                x='980.82'
                y='529.36'
              />
              <rect
                className='main__cls-49'
                height='13.12'
                transform='translate(-101.75 855.65) rotate(-45)'
                width='2.19'
                x='980.82'
                y='544.07'
              />
              <rect
                className='main__cls-49'
                height='2.19'
                transform='translate(-101.78 855.55) rotate(-45)'
                width='13.12'
                x='975.35'
                y='549.54'
              />
            </g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='40.7'
              x='945.81'
              y='566.19'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='26.3'
              x='945.81'
              y='595.67'
            />
            <polygon
              className='main__cls-49'
              points='982.44 574.24 995 559.08 993.42 557.75 980.86 572.91 982.44 574.24'
            />
            <rect
              className='main__cls-49'
              height='226.81'
              width='2.19'
              x='980.86'
              y='572.91'
            />
            <rect
              className='main__cls-55'
              height='74.72'
              width='2.19'
              x='945.81'
              y='523.13'
            />
            <polygon
              className='main__cls-5'
              points='981.95 673.27 987.26 664.07 976.64 664.07 981.95 673.27'
            />
            <polygon
              className='main__cls-5'
              points='1074.61 819.29 1079.92 810.1 1069.3 810.1 1074.61 819.29'
            />
            <g>
              <ellipse
                className='main__cls-8'
                cx='981.31'
                cy='760.88'
                rx='9.84'
                ry='9.8'
              />
              <ellipse
                className='main__cls-8'
                cx='981.31'
                cy='770.68'
                rx='9.84'
                ry='9.8'
              />
            </g>
            <circle className='main__cls-55' cx='983.58' cy='567.28' r='3.28' />
          </g>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='998.04'
              y='659.53'
            />
            <text
              className='main__cls-25'
              transform='translate(1013.71 678.72)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(1060.5 678.56)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='998.04'
              y='685.78'
            />
            <text
              className='main__cls-25'
              transform='translate(1013.71 704.97)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(1060.5 704.81)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='998.04'
              y='712.03'
            />
            <text
              className='main__cls-25'
              transform='translate(1013.71 731.22)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(1060.5 731.06)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(1324.23 763.21)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            3500k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1265.19'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(1297.47 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1289.97 469.36)'>
            <tspan x='0' y='0'>
              TR42
            </tspan>
            <tspan className='main__cls-39' x='-26.49' y='21'>
              S
            </tspan>
            <tspan x='-17.76' xmlSpace='preserve' y='21'>
              epam 10B{' '}
            </tspan>
          </text>
        </g>
        <g>
          <circle className='main__cls-6' cx='1307.64' cy='596.76' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1293.53'
              y='630.05'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='1295.72'
              y='632.55'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1289.94'
              y='630.05'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1282.4'
              y='632.55'
            />
            <path
              className='main__cls-6'
              d='M1277.04,629.27c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='1302.06'
              y='556.05'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='1306.51'
              y='529.36'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(-6.34 1085.96) rotate(-45)'
              width='2.19'
              x='1306.51'
              y='544.07'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-6.39 1085.84) rotate(-45)'
              width='13.12'
              x='1301.05'
              y='549.54'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1337.94'
              y='559.62'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1341.52'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1345.1'
              y='565.09'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1320.69'
              y='562.9'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1322.88'
              y='567.28'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='1271.5'
            y='566.18'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='1271.5'
            y='595.67'
          />
          <polygon
            className='main__cls-49'
            points='1308.13 574.24 1320.69 559.08 1319.11 557.75 1306.55 572.9 1308.13 574.24'
          />
          <rect
            className='main__cls-49'
            height='235.06'
            width='2.19'
            x='1306.55'
            y='572.91'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='1271.5'
            y='523.13'
          />
          <polygon
            className='main__cls-5'
            points='1307.64 673.27 1312.95 664.07 1302.33 664.07 1307.64 673.27'
          />
          <polygon
            className='main__cls-5'
            points='1307.64 818.28 1312.95 809.08 1302.33 809.08 1307.64 818.28'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='1307'
              cy='760.88'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='1307'
              cy='770.68'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='1309.27' cy='567.28' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1326.87'
              y='661.19'
            />
            <text
              className='main__cls-25'
              transform='translate(1342.55 680.38)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1389.33 680.22)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1326.87'
              y='687.44'
            />
            <text
              className='main__cls-25'
              transform='translate(1342.55 706.63)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1389.33 706.47)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1326.87'
              y='713.69'
            />
            <text
              className='main__cls-25'
              transform='translate(1342.55 732.88)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1389.33 732.71)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <rect
          className='main__cls-49'
          height='4.37'
          width='159.04'
          x='1592.95'
          y='524.55'
        />
        <text className='main__cls-24' transform='translate(1718.04 760.53)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            1600k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1656.24'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(1688.52 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1681.02 467.02)'>
            <tspan x='0' y='0'>
              TR72
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='94.5'
              x='1605.29'
              y='797.54'
            />
            <rect
              className='main__cls-49'
              height='14.81'
              width='2.19'
              x='1604.19'
              y='797.54'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='97.69'
              width='2.19'
              x='1602.64'
              y='580.8'
            />
            <rect
              className='main__cls-49'
              height='218.4'
              width='2.19'
              x='1542.57'
              y='460.09'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              width='61.44'
              x='1542.57'
              y='676.3'
            />
            <g>
              <rect
                className='main__cls-49'
                height='19.69'
                width='2.19'
                x='1602.64'
                y='524.38'
              />
              <polygon
                className='main__cls-5'
                points='1603.74 547.52 1607.11 545 1600.36 545 1603.74 547.52'
              />
            </g>
            <g>
              <rect
                className='main__cls-55'
                height='7.18'
                width='2.19'
                x='1589.61'
                y='626.69'
              />
              <rect
                className='main__cls-55'
                height='2.19'
                width='10.94'
                x='1591.8'
                y='629.19'
              />
              <rect
                className='main__cls-55'
                height='7.18'
                width='2.19'
                x='1586.02'
                y='626.69'
              />
              <rect
                className='main__cls-55'
                height='2.19'
                width='7.53'
                x='1578.48'
                y='629.19'
              />
              <path
                className='main__cls-6'
                d='M1573.12,625.91c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
              />
            </g>
            <polygon
              className='main__cls-5'
              points='1603.74 646.1 1609.05 655.3 1598.43 655.3 1603.74 646.1'
            />
            <g>
              <rect
                className='main__cls-55'
                height='17.5'
                width='2.19'
                x='1631.6'
                y='548.38'
              />
              <rect
                className='main__cls-55'
                height='10.94'
                width='2.19'
                x='1635.18'
                y='551.66'
              />
              <rect
                className='main__cls-55'
                height='6.56'
                width='2.19'
                x='1638.76'
                y='553.85'
              />
              <rect
                className='main__cls-55'
                height='10.94'
                width='2.19'
                x='1614.35'
                y='551.66'
              />
              <rect
                className='main__cls-55'
                height='2.19'
                width='15.06'
                x='1616.54'
                y='556.04'
              />
            </g>
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='1602.61'
              y='564.39'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(322.45 1671.26) rotate(-60)'
              width='19.69'
              x='1598.64'
              y='555.31'
            />
          </g>
          <circle className='main__cls-6' cx='1698.7' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1684.59'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='1686.77'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1680.99'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1673.46'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M1668.09,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='1693.11'
              y='553.71'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='1697.57'
              y='527.02'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(109.86 1361.8) rotate(-45)'
              width='2.19'
              x='1697.57'
              y='541.73'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(109.79 1361.65) rotate(-45)'
              width='13.12'
              x='1692.1'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1728.99'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1732.57'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1736.15'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1711.74'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1713.93'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='1662.55'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='1662.55'
            y='593.33'
          />
          <polygon
            className='main__cls-49'
            points='1699.18 571.9 1711.74 556.74 1710.16 555.41 1697.6 570.57 1699.18 571.9'
          />
          <rect
            className='main__cls-49'
            height='229.15'
            width='2.19'
            x='1697.6'
            y='570.57'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='1662.55'
            y='520.79'
          />
          <polygon
            className='main__cls-5'
            points='1698.7 670.93 1704.01 661.73 1693.39 661.73 1698.7 670.93'
          />
          <polygon
            className='main__cls-5'
            points='1605.29 817.47 1610.6 808.28 1599.98 808.28 1605.29 817.47'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='1698.05'
              cy='758.54'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='1698.05'
              cy='768.34'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='1700.32' cy='564.94' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1715.59'
              y='665.6'
            />
            <text
              className='main__cls-25'
              transform='translate(1731.26 684.79)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1778.04 684.63)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1715.59'
              y='691.85'
            />
            <text
              className='main__cls-25'
              transform='translate(1731.26 711.04)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1778.04 710.88)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='1715.59'
              y='718.1'
            />
            <text
              className='main__cls-25'
              transform='translate(1731.26 737.29)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(1778.04 737.12)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <rect
        className='main__cls-49'
        height='4.37'
        width='578.7'
        x='2047.04'
        y='524.55'
      />
      <g>
        <text className='main__cls-24' transform='translate(2170.2 760.87)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//690V
          </tspan>
          <tspan x='0' y='18.37'>
            2000k
          </tspan>
          <tspan className='main__cls-48' x='38.6' y='18.37'>
            V
          </tspan>
          <tspan x='46.27' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2110.34'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(2142.61 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2135.11 467.02)'>
            <tspan x='0' y='0'>
              TR31
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='2.19'
            width='96.58'
            x='2057.3'
            y='798.23'
          />
          <rect
            className='main__cls-49'
            height='14.81'
            width='2.19'
            x='2056.21'
            y='798.23'
          />
          <rect
            className='main__cls-49'
            height='97.69'
            width='2.19'
            x='2064.19'
            y='584.9'
          />
          <rect
            className='main__cls-49'
            height='218.4'
            width='2.19'
            x='2027.22'
            y='464.2'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='38.35'
            x='2027.22'
            y='680.4'
          />
          <g>
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='2064.2'
              y='528.49'
            />
            <polygon
              className='main__cls-5'
              points='2065.29 551.62 2068.67 549.1 2061.91 549.1 2065.29 551.62'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2051.17'
              y='630.8'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='2053.36'
              y='633.3'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2047.57'
              y='630.8'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2040.04'
              y='633.3'
            />
            <path
              className='main__cls-6'
              d='M2034.67,630.01c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='2065.29 650.21 2070.6 659.4 2059.98 659.4 2065.29 650.21'
          />
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2093.15'
              y='552.49'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2096.73'
              y='555.77'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2100.31'
              y='557.96'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2075.9'
              y='555.77'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2078.09'
              y='560.14'
            />
          </g>
          <rect
            className='main__cls-49'
            height='16.73'
            width='2.19'
            x='2064.17'
            y='568.49'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(549.69 2073.05) rotate(-60)'
            width='19.69'
            x='2060.19'
            y='559.41'
          />
          <circle className='main__cls-6' cx='2152.79' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2138.68'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='2140.86'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2135.08'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2127.55'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M2122.18,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2147.2'
              y='553.71'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='2151.66'
              y='527.02'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(242.87 1682.9) rotate(-45)'
              width='2.19'
              x='2151.66'
              y='541.73'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(242.77 1682.73) rotate(-45)'
              width='13.12'
              x='2146.19'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2183.08'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2186.66'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2190.24'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2165.83'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2168.02'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='2116.64'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='2116.64'
            y='593.33'
          />
          <polygon
            className='main__cls-49'
            points='2153.27 571.9 2165.83 556.74 2164.25 555.41 2151.69 570.57 2153.27 571.9'
          />
          <rect
            className='main__cls-49'
            height='229.84'
            width='2.19'
            x='2151.69'
            y='570.57'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='2116.64'
            y='520.79'
          />
          <polygon
            className='main__cls-5'
            points='2152.79 670.93 2158.1 661.73 2147.48 661.73 2152.79 670.93'
          />
          <polygon
            className='main__cls-5'
            points='2057.3 817.47 2062.61 808.28 2051.99 808.28 2057.3 817.47'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='2152.14'
              cy='758.54'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='2152.14'
              cy='768.34'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='2154.41' cy='564.94' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2173.32'
              y='662.94'
            />
            <text
              className='main__cls-25'
              transform='translate(2188.99 682.13)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2235.78 681.97)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2173.32'
              y='689.18'
            />
            <text
              className='main__cls-25'
              transform='translate(2188.99 708.37)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2235.78 708.21)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2173.32'
              y='715.43'
            />
            <text
              className='main__cls-25'
              transform='translate(2188.99 734.62)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2235.78 734.46)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(2300.53 760.87)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            2000k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2239.37'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(2271.65 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2264.15 467.02)'>
            <tspan x='0' y='0'>
              TR32
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <circle className='main__cls-6' cx='2281.82' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2267.71'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='2269.9'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2264.11'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2256.58'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M2251.22,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2276.23'
              y='553.71'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='2280.69'
              y='527.02'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(280.67 1774.15) rotate(-45)'
              width='2.19'
              x='2280.69'
              y='541.73'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(280.56 1773.97) rotate(-45)'
              width='13.12'
              x='2275.22'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2312.11'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2315.69'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2319.28'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2294.87'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2297.05'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='2245.67'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='2245.67'
            y='593.33'
          />
          <polygon
            className='main__cls-49'
            points='2282.31 571.9 2294.87 556.74 2293.29 555.41 2280.73 570.57 2282.31 571.9'
          />
          <rect
            className='main__cls-49'
            height='235.06'
            width='2.19'
            x='2280.73'
            y='570.57'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='2245.67'
            y='520.79'
          />
          <polygon
            className='main__cls-5'
            points='2281.82 670.93 2287.13 661.73 2276.51 661.73 2281.82 670.93'
          />
          <polygon
            className='main__cls-5'
            points='2281.82 815.94 2287.13 806.74 2276.51 806.74 2281.82 815.94'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='2281.18'
              cy='758.54'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='2281.18'
              cy='768.34'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='2283.45' cy='564.94' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2303.44'
              y='662.94'
            />
            <text
              className='main__cls-25'
              transform='translate(2319.11 682.13)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(2365.9 681.97)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2303.44'
              y='689.18'
            />
            <text
              className='main__cls-25'
              transform='translate(2319.11 708.37)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(2365.9 708.21)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2303.44'
              y='715.43'
            />
            <text
              className='main__cls-25'
              transform='translate(2319.11 734.62)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(2365.9 734.46)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(2426.37 760.87)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            2000k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2366.65'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(2398.93 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2391.42 467.02)'>
            <tspan x='0' y='0'>
              TR33
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='101.48'
              x='2408.01'
              y='798.23'
            />
            <rect
              className='main__cls-49'
              height='14.81'
              width='2.19'
              x='2508.39'
              y='798.23'
            />
          </g>
          <circle className='main__cls-6' cx='2409.1' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2394.99'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='2397.18'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2391.39'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2383.86'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M2378.49,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2403.51'
              y='553.71'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='2407.97'
              y='527.02'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(317.95 1864.15) rotate(-45)'
              width='2.19'
              x='2407.97'
              y='541.73'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(317.84 1863.96) rotate(-45)'
              width='13.12'
              x='2402.5'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2439.39'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2442.97'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2446.55'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2422.15'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2424.33'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='2372.95'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='2372.95'
            y='593.33'
          />
          <polygon
            className='main__cls-49'
            points='2409.59 571.9 2422.15 556.74 2420.56 555.41 2408.01 570.57 2409.59 571.9'
          />
          <rect
            className='main__cls-49'
            height='229.84'
            width='2.19'
            x='2408.01'
            y='570.57'
          />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='2372.95'
            y='520.79'
          />
          <polygon
            className='main__cls-5'
            points='2409.1 670.93 2414.41 661.73 2403.79 661.73 2409.1 670.93'
          />
          <polygon
            className='main__cls-5'
            points='2509.49 817.63 2514.8 808.43 2504.18 808.43 2509.49 817.63'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='2408.46'
              cy='758.54'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='2408.46'
              cy='768.34'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='2410.73' cy='564.94' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2429.59'
              y='662.94'
            />
            <text
              className='main__cls-25'
              transform='translate(2445.25 682.13)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2492.04 681.97)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2429.59'
              y='689.18'
            />
            <text
              className='main__cls-25'
              transform='translate(2445.25 708.37)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2492.04 708.21)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2429.59'
              y='715.43'
            />
            <text
              className='main__cls-25'
              transform='translate(2445.25 734.62)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2492.04 734.46)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1909.28'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(1941.56 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1931.42 467.02)'>
            <tspan x='0' y='0'>
              Spa
            </tspan>
            <tspan className='main__cls-33' x='27.02' y='0'>
              r
            </tspan>
            <tspan x='32.56' y='0'>
              e
            </tspan>
            <tspan className='main__cls-39' x='-20.15' y='21'>
              S
            </tspan>
            <tspan x='-11.42' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <rect height='4.37' width='159.04' x='1845.98' y='524.55' />
          <rect height='97.69' width='2.19' x='1855.68' y='580.8' />
          <rect height='218.4' width='2.19' x='1800.24' y='459.02' />
          <rect height='2.19' width='56.81' x='1800.24' y='676.3' />
          <g>
            <rect height='19.69' width='2.19' x='1855.68' y='524.38' />
            <polygon
              className='main__cls-10'
              points='1856.77 547.52 1860.15 545 1853.4 545 1856.77 547.52'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1842.65'
              y='626.69'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='1844.84'
              y='629.19'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1839.05'
              y='626.69'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1831.52'
              y='629.19'
            />
            <path
              className='main__cls-6'
              d='M1826.16,625.91c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <polygon
            className='main__cls-10'
            points='1856.77 646.1 1862.08 655.3 1851.46 655.3 1856.77 646.1'
          />
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1884.63'
              y='548.38'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1888.21'
              y='551.66'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1891.79'
              y='553.85'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1867.39'
              y='551.66'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1869.57'
              y='556.04'
            />
          </g>
          <rect height='16.73' width='2.19' x='1855.65' y='564.39' />
          <rect
            height='2.19'
            transform='translate(448.98 1890.41) rotate(-60)'
            width='19.69'
            x='1851.68'
            y='555.31'
          />
          <circle className='main__cls-6' cx='1951.73' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1937.62'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='1939.81'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1934.02'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1926.49'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M1921.13,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect height='2.19' width='11.09' x='1946.14' y='553.71' />
            <rect height='26.69' width='2.19' x='1950.6' y='527.02' />
            <rect
              height='13.12'
              transform='translate(183.98 1540.73) rotate(-45)'
              width='2.19'
              x='1950.6'
              y='541.73'
            />
            <rect
              height='2.19'
              transform='translate(183.89 1540.57) rotate(-45)'
              width='13.12'
              x='1945.13'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1982.02'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1985.61'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1989.19'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1964.78'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1966.96'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='1915.59'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='1915.59'
            y='593.33'
          />
          <polygon points='1952.22 571.9 1964.78 556.74 1963.2 555.41 1950.64 570.57 1952.22 571.9' />
          <rect height='96.45' width='2.19' x='1950.64' y='570.57' />
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='1915.59'
            y='520.79'
          />
          <polygon
            className='main__cls-10'
            points='1951.73 670.93 1957.04 661.73 1946.42 661.73 1951.73 670.93'
          />
          <circle className='main__cls-55' cx='1953.36' cy='564.94' r='3.28' />
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(289.49 323.18)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//11
          </tspan>
          <tspan className='main__cls-63' x='58.99' y='0'>
            K
          </tspan>
          <tspan x='67.52' y='0'>
            W
          </tspan>
          <tspan x='12.42' y='18.37'>
            7000k
          </tspan>
          <tspan className='main__cls-48' x='51.02' y='18.37'>
            V
          </tspan>
          <tspan x='58.69' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='332.83'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='342.93'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(375.2 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(329.09 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going
            </tspan>
            <tspan className='main__cls-18' x='74.23' y='0'>
              {' '}
            </tspan>
            <tspan x='77.22' y='0'>
              TR30
            </tspan>
            <tspan className='main__cls-39' x='16.25' y='21'>
              S
            </tspan>
            <tspan x='24.99' y='21'>
              epam S87
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='60.26'
            width='2.19'
            x='384.28'
            y='371.08'
          />
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(-30.24 323.91) rotate(-45)'
              width='6.03'
              x='372.84'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(-15.82 317.77) rotate(-45)'
              width='2.19'
              x='374.58'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='354.61'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='354.81'
              y='199.18'
            />
            <circle className='main__cls-6' cx='384.85' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='446.11'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='449.7'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='453.28'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='428.87'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='431.06'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='389.44'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='379.83'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='384.28'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(95.51 395.39) rotate(-60)'
              width='19.69'
              x='380.31'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(13.14 313.83) rotate(-45)'
              width='2.19'
              x='384.28'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(13.13 313.8) rotate(-45)'
              width='13.12'
              x='378.81'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='384.28'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='331.73'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='330.64'
            y='199.18'
          />
          <g>
            <polygon
              className='main__cls-49'
              points='385.86 162.98 398.42 147.82 396.84 146.49 384.28 161.65 385.86 162.98'
            />
            <text className='main__cls-50' transform='translate(398.52 143.94)'>
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='404.29' cy='140.08' r='8.75' />
          </g>
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='423.29'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='384.28'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='330.64'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(18.91 477.25) rotate(-60)'
              width='2.19'
              x='421.67'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='445.75'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='449.33'
              y='221.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='452.91'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='430.69'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='385.38 258.73 390.69 249.53 380.07 249.53 385.38 258.73'
          />
          <polygon
            className='main__cls-10'
            points='417.6 177.17 426.8 182.48 426.8 171.86 417.6 177.17'
          />
          <polygon
            className='main__cls-5'
            points='385.38 350.15 390.69 340.95 380.07 340.95 385.38 350.15'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='375.12'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='398.85'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='377.31'
              y='222.6'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='371.52'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='363.99'
              y='222.6'
            />
            <path
              className='main__cls-6'
              d='M358.62,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <ellipse
              className='main__cls-8'
              cx='384.73'
              cy='294.94'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='384.73'
              cy='304.74'
              rx='9.84'
              ry='9.8'
            />
          </g>
          <circle className='main__cls-55' cx='387' cy='156.02' r='3.28' />
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='407.36'
              y='262.32'
            />
            <text className='main__cls-25' transform='translate(423.03 281.51)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(469.81 281.35)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='407.36'
              y='288.57'
            />
            <text className='main__cls-25' transform='translate(423.03 307.75)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(469.81 307.59)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='407.36'
              y='314.81'
            />
            <text className='main__cls-25' transform='translate(423.03 334)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(469.81 333.84)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='635.84'
              y='511.1'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='645.94'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(678.21 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(629.92 469.36)'>
            <tspan x='0' y='0'>
              IN
            </tspan>
            <tspan className='main__cls-14' x='15.7' y='0'>
              C
            </tspan>
            <tspan className='main__cls-17' x='25.48' y='0'>
              OMING
            </tspan>
            <tspan className='main__cls-18' x='78.6' y='0'>
              {' '}
            </tspan>
            <tspan className='main__cls-17' x='81.59' y='0'>
              TR30
            </tspan>
            <tspan className='main__cls-39' x='18.44' y='21'>
              S
            </tspan>
            <tspan x='27.17' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='133.24'
            width='2.19'
            x='633.65'
            y='511.1'
          />
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(-255.5 668.26) rotate(-45)'
              width='6.03'
              x='675.85'
              y='641.43'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(-241.07 662.1) rotate(-45)'
              width='2.19'
              x='677.59'
              y='619.03'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='657.62'
              y='619.14'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='657.82'
              y='643.25'
            />
            <circle className='main__cls-6' cx='687.86' cy='632.35' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='749.13'
              y='554.85'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='752.71'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='756.29'
              y='560.32'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='731.88'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='734.07'
              y='562.5'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='692.45'
            y='557.96'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='682.84'
              y='548.67'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='687.29'
              y='567.04'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-137.55 879.87) rotate(-60)'
              width='19.69'
              x='683.32'
              y='557.96'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(-212.12 658.18) rotate(-45)'
              width='2.19'
              x='687.29'
              y='578.56'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-212.12 658.1) rotate(-45)'
              width='13.12'
              x='681.83'
              y='584.03'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='687.29'
              y='529.36'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='634.74'
            y='598.99'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='633.65'
            y='643.25'
          />
          <g>
            <polygon
              className='main__cls-49'
              points='688.87 607.05 701.43 591.89 699.85 590.56 687.29 605.71 688.87 607.05'
            />
            <text className='main__cls-50' transform='translate(701.53 588.01)'>
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='707.3' cy='584.15' r='8.75' />
          </g>
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='726.3'
            y='560.15'
          />
          <rect
            className='main__cls-49'
            height='265.56'
            width='2.19'
            x='687.29'
            y='605.67'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(-214.16 961.7) rotate(-60)'
              width='2.19'
              x='724.68'
              y='656.47'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='748.76'
              y='662.34'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='752.34'
              y='665.62'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='755.92'
              y='667.81'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='733.7'
              y='670'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='688.39 693.6 693.7 702.8 683.08 702.8 688.39 693.6'
          />
          <polygon
            className='main__cls-10'
            points='720.61 621.23 729.81 626.54 729.81 615.93 720.61 621.23'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='678.13'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='701.86'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='680.32'
              y='666.67'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='674.53'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='667'
              y='666.67'
            />
            <path
              className='main__cls-6'
              d='M661.63,663.39c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='690.02' cy='600.09' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='500.95'
              y='511.1'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='511.05'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(543.32 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(504.44 469.36)'>
            <tspan x='0' y='0'>
              OUT GOING 2
            </tspan>
            <tspan className='main__cls-39' x='9.03' y='21'>
              S
            </tspan>
            <tspan x='17.76' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='133.24'
            width='2.19'
            x='498.76'
            y='511.1'
          />
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(-295.01 572.88) rotate(-45)'
              width='6.03'
              x='540.96'
              y='641.43'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(-280.58 566.72) rotate(-45)'
              width='2.19'
              x='542.7'
              y='619.03'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='522.73'
              y='619.14'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='522.93'
              y='643.25'
            />
            <circle className='main__cls-6' cx='552.97' cy='632.35' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='614.23'
              y='554.85'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='617.82'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='621.4'
              y='560.32'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='596.99'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='599.18'
              y='562.5'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='557.56'
            y='557.96'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='547.95'
              y='548.67'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='552.4'
              y='567.04'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-205.01 763.05) rotate(-60)'
              width='19.69'
              x='548.43'
              y='557.96'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(-251.63 562.8) rotate(-45)'
              width='2.19'
              x='552.4'
              y='578.56'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-251.63 562.72) rotate(-45)'
              width='13.12'
              x='546.93'
              y='584.03'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='552.4'
              y='529.36'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='499.85'
            y='598.99'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='498.76'
            y='643.25'
          />
          <g>
            <polygon
              className='main__cls-49'
              points='553.98 607.05 566.54 591.89 564.96 590.56 552.4 605.71 553.98 607.05'
            />
            <text className='main__cls-50' transform='translate(566.64 588.01)'>
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='572.41' cy='584.15' r='8.75' />
          </g>
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='591.41'
            y='560.15'
          />
          <rect
            className='main__cls-49'
            height='194.05'
            width='2.19'
            x='552.4'
            y='605.67'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(-281.6 844.88) rotate(-60)'
              width='2.19'
              x='589.79'
              y='656.47'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='613.87'
              y='662.34'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='617.45'
              y='665.62'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='621.03'
              y='667.81'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='598.81'
              y='670'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='553.5 702.8 558.81 693.6 548.19 693.6 553.5 702.8'
          />
          <polygon
            className='main__cls-10'
            points='585.72 621.24 594.92 626.55 594.92 615.93 585.72 621.24'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='543.24'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='566.97'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='545.43'
              y='666.67'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='539.64'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='532.11'
              y='666.67'
            />
            <path
              className='main__cls-6'
              d='M526.74,663.39c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='555.12' cy='600.09' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='546.64'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='556.74'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(589.02 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(524.93 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going
            </tspan>
            <tspan className='main__cls-18' x='74.23' y='0'>
              {' '}
            </tspan>
            <tspan x='77.22' y='0'>
              TR11 &amp; 12
            </tspan>
            <tspan className='main__cls-39' x='34.23' y='21'>
              S
            </tspan>
            <tspan x='42.97' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='39.41'
            width='2.19'
            x='598.1'
            y='371.08'
          />
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(32.39 475.11) rotate(-45)'
              width='6.03'
              x='586.65'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(46.81 468.96) rotate(-45)'
              width='2.19'
              x='588.4'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='568.43'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='568.63'
              y='199.18'
            />
            <circle className='main__cls-6' cx='598.66' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='659.93'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='663.51'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='667.09'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='642.68'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='644.87'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='603.25'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='593.65'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='598.1'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(202.43 580.56) rotate(-60)'
              width='19.69'
              x='594.12'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(75.77 465.03) rotate(-45)'
              width='2.19'
              x='598.1'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(75.74 464.98) rotate(-45)'
              width='13.12'
              x='592.63'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='598.1'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='545.55'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='544.45'
            y='199.18'
          />
          <polygon
            className='main__cls-49'
            points='599.68 162.98 612.24 147.82 610.65 146.49 598.1 161.65 599.68 162.98'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='637.1'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='598.1'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='544.45'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(125.82 662.42) rotate(-60)'
              width='2.19'
              x='635.49'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='659.56'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='663.14'
              y='221.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='666.73'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='644.5'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='599.19 258.73 604.5 249.53 593.88 249.53 599.19 258.73'
          />
          <polygon
            className='main__cls-10'
            points='631.41 177.17 640.61 182.48 640.61 171.86 631.41 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='588.93'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='612.67'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='591.12'
              y='222.61'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='585.34'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='577.8'
              y='222.61'
            />
            <path
              className='main__cls-6'
              d='M572.44,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='600.82' cy='156.02' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='1964.58'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1974.68'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(2006.96 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1960.85 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going
            </tspan>
            <tspan className='main__cls-18' x='74.23' y='0'>
              {' '}
            </tspan>
            <tspan x='77.22' y='0'>
              TR72
            </tspan>
            <tspan className='main__cls-39' x='16.25' y='21'>
              S
            </tspan>
            <tspan x='24.99' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(447.74 1477.79) rotate(-45)'
              width='6.03'
              x='2004.59'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(462.12 1471.6) rotate(-45)'
              width='2.19'
              x='2006.34'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='1986.37'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='1986.57'
              y='199.18'
            />
            <circle className='main__cls-6' cx='2016.6' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2077.87'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2081.45'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2085.03'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2060.62'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2062.81'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='2021.19'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2011.59'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='2016.04'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(911.47 1808.58) rotate(-60)'
              width='19.69'
              x='2012.06'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(491.12 1467.71) rotate(-45)'
              width='2.19'
              x='2016.04'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(491 1467.57) rotate(-45)'
              width='13.12'
              x='2010.57'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='2016.04'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='1963.49'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='1962.39'
            y='199.18'
          />
          <polygon
            className='main__cls-49'
            points='2017.62 162.98 2030.18 147.82 2028.6 146.49 2016.04 161.65 2017.62 162.98'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='2055.04'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='2016.04'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='1962.39'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(834.79 1890.39) rotate(-60)'
              width='2.19'
              x='2053.43'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2077.5'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2081.09'
              y='221.55'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2084.67'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2062.44'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='2017.13 258.73 2022.44 249.53 2011.82 249.53 2017.13 258.73'
          />
          <polygon
            className='main__cls-10'
            points='2049.35 177.17 2058.55 182.48 2058.55 171.86 2049.35 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2006.87'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2030.61'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='2009.06'
              y='222.6'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2003.28'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1995.74'
              y='222.6'
            />
            <path
              className='main__cls-6'
              d='M1990.38,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='2018.76' cy='156.02' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='2377.16'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2387.26'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(2419.54 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2361.77 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going
            </tspan>
            <tspan className='main__cls-18' x='74.23' y='0'>
              {' '}
            </tspan>
            <tspan x='77.22' y='0'>
              TR31-34
            </tspan>
            <tspan className='main__cls-39' x='27.92' y='21'>
              S
            </tspan>
            <tspan x='36.65' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(568.59 1769.54) rotate(-45)'
              width='6.03'
              x='2417.17'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(582.96 1763.34) rotate(-45)'
              width='2.19'
              x='2418.92'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='2398.95'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='2399.15'
              y='199.18'
            />
            <circle className='main__cls-6' cx='2429.18' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2490.45'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2494.03'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2497.61'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2473.2'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2475.39'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='2433.77'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2424.17'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='2428.62'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(1117.78 2165.9) rotate(-60)'
              width='19.69'
              x='2424.64'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(611.98 1759.46) rotate(-45)'
              width='2.19'
              x='2428.62'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(611.83 1759.3) rotate(-45)'
              width='13.12'
              x='2423.15'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='2428.62'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='2376.07'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='2374.97'
            y='199.18'
          />
          <polygon
            className='main__cls-49'
            points='2430.2 162.98 2442.76 147.82 2441.18 146.49 2428.62 161.65 2430.2 162.98'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='2467.62'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='2428.62'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='2374.97'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(1041.08 2247.7) rotate(-60)'
              width='2.19'
              x='2466.01'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2490.08'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2493.67'
              y='221.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2497.25'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2475.03'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='2429.71 258.73 2435.02 249.53 2424.4 249.53 2429.71 258.73'
          />
          <polygon
            className='main__cls-10'
            points='2461.93 177.17 2471.13 182.48 2471.13 171.86 2461.93 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2419.45'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2443.19'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='2421.64'
              y='222.61'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2415.86'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2408.32'
              y='222.61'
            />
            <path
              className='main__cls-6'
              d='M2402.96,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='2431.34' cy='156.02' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='2177.11'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2187.21'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(2219.49 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2170.38 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going Spa
            </tspan>
            <tspan className='main__cls-33' x='104.95' y='0'>
              r
            </tspan>
            <tspan x='110.5' y='0'>
              e
            </tspan>
            <tspan className='main__cls-39' x='19.25' y='21'>
              S
            </tspan>
            <tspan x='27.98' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(509.99 1628.07) rotate(-45)'
              width='6.03'
              x='2217.12'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(524.36 1621.88) rotate(-45)'
              width='2.19'
              x='2218.86'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='2198.89'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='2199.09'
              y='199.18'
            />
            <circle className='main__cls-6' cx='2229.13' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2290.4'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2293.98'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2297.56'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2273.15'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2275.34'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='2233.72'
            y='113.89'
          />
          <g>
            <rect height='2.19' width='11.09' x='2224.11' y='104.6' />
            <rect height='16.73' width='2.19' x='2228.56' y='122.97' />
            <rect
              height='2.19'
              transform='translate(1017.75 1992.64) rotate(-60)'
              width='19.69'
              x='2224.59'
              y='113.89'
            />
            <rect
              height='13.12'
              transform='translate(553.38 1618) rotate(-45)'
              width='2.19'
              x='2228.56'
              y='134.49'
            />
            <rect
              height='2.19'
              transform='translate(553.24 1617.84) rotate(-45)'
              width='13.12'
              x='2223.1'
              y='139.96'
            />
            <rect height='19.69' width='2.19' x='2228.56' y='85.29' />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='2176.01'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='2174.92'
            y='199.18'
          />
          <polygon points='2230.15 162.98 2242.7 147.82 2241.12 146.49 2228.56 161.65 2230.15 162.98' />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='2267.57'
            y='116.08'
          />
          <rect height='209.48' width='2.19' x='2228.56' y='161.61' />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='2174.92'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(941.05 2074.45) rotate(-60)'
              width='2.19'
              x='2265.95'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2290.03'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2293.61'
              y='221.55'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2297.19'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2274.97'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-10'
            points='2229.66 258.73 2234.97 249.53 2224.35 249.53 2229.66 258.73'
          />
          <polygon
            className='main__cls-10'
            points='2261.88 177.17 2271.08 182.48 2271.08 171.86 2261.88 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2219.4'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2243.13'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='2221.59'
              y='222.6'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2215.8'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2208.27'
              y='222.6'
            />
            <path
              className='main__cls-6'
              d='M2202.91,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='2231.29' cy='156.02' r='3.28' />
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='751.9'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='762'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(794.27 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(748.16 25.29)'>
            <tspan className='main__cls-15' x='0' y='0'>
              O
            </tspan>
            <tspan x='12.11' y='0'>
              ut going
            </tspan>
            <tspan className='main__cls-18' x='74.23' y='0'>
              {' '}
            </tspan>
            <tspan x='77.22' y='0'>
              TR42
            </tspan>
            <tspan className='main__cls-39' x='16.25' y='21'>
              S
            </tspan>
            <tspan x='24.99' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(92.51 620.26) rotate(-45)'
              width='6.03'
              x='791.91'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(106.93 614.1) rotate(-45)'
              width='2.19'
              x='793.65'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='773.68'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='773.88'
              y='199.18'
            />
            <circle className='main__cls-6' cx='803.92' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='865.19'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='868.77'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='872.35'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='847.94'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='850.13'
              y='118.43'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='808.51'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='798.9'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='803.35'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(305.07 758.33) rotate(-60)'
              width='19.69'
              x='799.38'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(135.9 610.17) rotate(-45)'
              width='2.19'
              x='803.35'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(135.86 610.11) rotate(-45)'
              width='13.12'
              x='797.89'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='803.35'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='750.8'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='749.71'
            y='199.18'
          />
          <polygon
            className='main__cls-49'
            points='804.94 162.98 817.49 147.82 815.91 146.49 803.35 161.65 804.94 162.98'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='842.36'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='803.35'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='133.13'
            width='2.19'
            x='749.71'
            y='67.03'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(228.45 840.18) rotate(-60)'
              width='2.19'
              x='840.74'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='864.82'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='868.4'
              y='221.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='871.98'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='849.76'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='804.45 258.73 809.76 249.53 799.14 249.53 804.45 258.73'
          />
          <polygon
            className='main__cls-10'
            points='836.67 177.17 845.87 182.48 845.87 171.86 836.67 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='794.19'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='817.92'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='796.38'
              y='222.61'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='790.59'
              y='220.11'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='783.06'
              y='222.61'
            />
            <path
              className='main__cls-6'
              d='M777.7,219.32c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='806.08' cy='156.02' r='3.28' />
        </g>
      </g>
      <rect
        className='main__cls-55'
        height='2.19'
        width='29.77'
        x='916.8'
        y='67.03'
      />
      <rect
        className='main__cls-55'
        height='2.19'
        width='77.7'
        x='918.99'
        y='368.9'
      />
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='945.23'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='955.33'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(987.61 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(952.5 25.29)'>
            <tspan x='0' y='0'>
              IN
            </tspan>
            <tspan className='main__cls-14' x='15.7' y='0'>
              C
            </tspan>
            <tspan className='main__cls-17' x='25.48' y='0'>
              OMING 2
            </tspan>
            <tspan className='main__cls-39' x='5.26' y='21'>
              S
            </tspan>
            <tspan x='13.99' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='19.69'
              width='59.79'
              x='1046.38'
              y='191.52'
            />
            <text
              className='main__cls-22'
              transform='translate(1063.83 206.34)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-22'
              transform='translate(1108.84 206.51)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='24.85'
              x='998.5'
              y='325.53'
            />
            <text
              className='main__cls-26'
              transform='translate(1025.61 331.93)'
            >
              <tspan x='0' y='0'>
                Nguồn{' '}
              </tspan>
              <tspan className='main__cls-58' x='53.96' y='0'>
                v
              </tspan>
              <tspan x='62.31' y='0'>
                ào 2
              </tspan>
            </text>
          </g>
          <g>
            <polygon
              className='main__cls-49'
              points='998.27 162.96 1010.83 147.81 1009.25 146.48 996.69 161.63 998.27 162.96'
            />
            <text
              className='main__cls-50'
              transform='translate(1010.93 143.93)'
            >
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='1016.7' cy='140.07' r='8.75' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(149.15 756.97) rotate(-45)'
              width='6.03'
              x='985.24'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(163.55 750.81) rotate(-45)'
              width='2.19'
              x='986.99'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='967.02'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='967.22'
              y='199.18'
            />
            <circle className='main__cls-6' cx='997.26' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1058.52'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1062.1'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1065.69'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1041.28'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1043.46'
              y='118.43'
            />
          </g>
          <g>
            <rect height='2.19' width='16.66' x='980.09' y='234.68' />
            <polygon points='980.09 237.96 966.97 235.77 980.09 233.59 980.09 237.96' />
            <rect
              className='main__cls-7'
              height='10.94'
              width='26.25'
              x='961.35'
              y='230.3'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='949.23'
              y='227.02'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='945.65'
              y='230.3'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='942.07'
              y='232.49'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='13.07'
              x='949.23'
              y='234.68'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='1001.84'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='992.24'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='996.69'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(401.75 925.77) rotate(-60)'
              width='19.69'
              x='992.71'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(192.53 746.89) rotate(-45)'
              width='2.19'
              x='996.69'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(192.48 746.82) rotate(-45)'
              width='13.12'
              x='991.22'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='996.69'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='83.36'
            x='918.99'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='48.24'
            x='918.99'
            y='199.18'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='1035.7'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='996.69'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='303.94'
            width='2.19'
            x='916.8'
            y='67.15'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(325.11 1007.61) rotate(-60)'
              width='2.19'
              x='1034.08'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1058.16'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1061.74'
              y='221.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1065.32'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1043.1'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='997.78 294.37 1003.09 303.57 992.47 303.57 997.78 294.37'
          />
          <polygon
            className='main__cls-10'
            points='1030.01 177.17 1039.2 182.48 1039.2 171.86 1030.01 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='987.53'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1011.26'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='989.71'
              y='272.91'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='983.93'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='976.4'
              y='272.91'
            />
            <path
              className='main__cls-6'
              d='M971.03,269.63c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='999.41' cy='156.02' r='3.28' />
          <text className='main__cls-22' transform='translate(962.3 143.93)'>
            <tspan x='0' y='0'>
              CB2
            </tspan>
          </text>
        </g>
      </g>
      <rect
        className='main__cls-55'
        height='2.19'
        width='77.7'
        x='1730.81'
        y='368.9'
      />
      <g>
        <rect
          className='main__cls-55'
          height='2.19'
          width='29.77'
          x='1728.62'
          y='67.03'
        />
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='1757.06'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1767.16'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(1799.44 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1764.32 25.29)'>
            <tspan x='0' y='0'>
              IN
            </tspan>
            <tspan className='main__cls-14' x='15.7' y='0'>
              C
            </tspan>
            <tspan className='main__cls-17' x='25.48' y='0'>
              OMING 1
            </tspan>
            <tspan className='main__cls-39' x='5.26' y='21'>
              S
            </tspan>
            <tspan x='13.99' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='19.69'
              width='59.79'
              x='1858.21'
              y='191.52'
            />
            <text
              className='main__cls-22'
              transform='translate(1875.66 206.34)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-22'
              transform='translate(1920.66 206.51)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='24.85'
              x='1810.33'
              y='325.53'
            />
            <text
              className='main__cls-26'
              transform='translate(1841.69 329.58)'
            >
              <tspan x='0' y='0'>
                Nguồn{' '}
              </tspan>
              <tspan className='main__cls-58' x='53.96' y='0'>
                v
              </tspan>
              <tspan x='62.31' y='0'>
                ào 1
              </tspan>
            </text>
          </g>
          <g>
            <polygon
              className='main__cls-49'
              points='1810.1 162.96 1822.65 147.81 1821.07 146.48 1808.52 161.63 1810.1 162.96'
            />
            <text
              className='main__cls-50'
              transform='translate(1822.75 143.93)'
            >
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='1828.53' cy='140.07' r='8.75' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(386.95 1331.04) rotate(-45)'
              width='6.03'
              x='1797.07'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(401.33 1324.86) rotate(-45)'
              width='2.19'
              x='1798.82'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='1778.85'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='1779.05'
              y='199.18'
            />
            <circle className='main__cls-6' cx='1809.08' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1870.35'
              y='110.78'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1873.93'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1877.51'
              y='116.25'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1853.1'
              y='114.06'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1855.29'
              y='118.43'
            />
          </g>
          <g>
            <rect height='2.19' width='16.66' x='1791.92' y='234.68' />
            <polygon points='1791.92 237.96 1778.79 235.77 1791.92 233.58 1791.92 237.96' />
            <rect
              className='main__cls-7'
              height='10.94'
              width='26.25'
              x='1773.17'
              y='230.3'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1761.06'
              y='227.02'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1757.47'
              y='230.3'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1753.89'
              y='232.49'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='13.07'
              x='1761.06'
              y='234.68'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='1813.67'
            y='113.89'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='1804.06'
              y='104.6'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='1808.52'
              y='122.97'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(807.7 1628.85) rotate(-60)'
              width='19.69'
              x='1804.54'
              y='113.89'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(430.34 1320.96) rotate(-45)'
              width='2.19'
              x='1808.52'
              y='134.49'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(430.23 1320.84) rotate(-45)'
              width='13.12'
              x='1803.05'
              y='139.96'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='1808.52'
              y='85.29'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='83.36'
            x='1730.81'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='48.24'
            x='1730.81'
            y='199.18'
          />
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='1847.52'
            y='116.08'
          />
          <rect
            className='main__cls-49'
            height='209.48'
            width='2.19'
            x='1808.52'
            y='161.61'
          />
          <rect
            className='main__cls-55'
            height='303.94'
            width='2.19'
            x='1728.62'
            y='67.15'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(731.03 1710.67) rotate(-60)'
              width='2.19'
              x='1845.9'
              y='212.41'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1869.98'
              y='218.27'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1873.56'
              y='221.55'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1877.15'
              y='223.74'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1854.92'
              y='225.93'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='1809.61 294.37 1814.92 303.57 1804.3 303.57 1809.61 294.37'
          />
          <polygon
            className='main__cls-10'
            points='1841.83 177.17 1851.03 182.48 1851.03 171.86 1841.83 177.17'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1799.35'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1823.09'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='1801.54'
              y='272.91'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='1795.75'
              y='270.41'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='1788.22'
              y='272.91'
            />
            <path
              className='main__cls-6'
              d='M1782.86,269.63c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='1811.24' cy='156.02' r='3.28' />
          <text className='main__cls-22' transform='translate(1774.13 143.93)'>
            <tspan x='0' y='0'>
              CB1
            </tspan>
          </text>
        </g>
      </g>
      <rect
        className='main__cls-55'
        height='2.19'
        width='68.01'
        x='1329.47'
        y='220.19'
      />
      <g>
        <g>
          <rect height='2.19' width='11.09' x='1390.84' y='104.6' />
          <rect height='16.73' width='2.19' x='1395.29' y='122.97' />
          <rect
            height='2.19'
            transform='translate(601.07 1270.97) rotate(-60)'
            width='19.69'
            x='1391.31'
            y='113.89'
          />
          <rect height='19.69' width='2.19' x='1395.29' y='85.29' />
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='17.5'
            width='2.19'
            x='1424.27'
            y='108.2'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1427.85'
            y='111.48'
          />
          <rect
            className='main__cls-55'
            height='6.56'
            width='2.19'
            x='1431.43'
            y='113.66'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1407.02'
            y='111.48'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='15.06'
            x='1409.21'
            y='115.85'
          />
        </g>
        <rect height='82.68' width='2.19' x='1395.29' y='139.69' />
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='1278.01'
              y='67.03'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1288.11'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(1320.39 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1296.54 25.29)'>
            <tspan className='main__cls-14' x='0' y='0'>
              C
            </tspan>
            <tspan x='9.78' y='0'>
              OUPLER
            </tspan>
            <tspan className='main__cls-39' x='-6.01' y='21'>
              S
            </tspan>
            <tspan x='2.72' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <polygon points='1331.05 162.96 1343.61 147.81 1342.03 146.48 1329.47 161.63 1331.05 162.96' />
            <text className='main__cls-52' transform='translate(1343.7 143.93)'>
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-7' cx='1349.48' cy='140.07' r='8.75' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(246.63 992.29) rotate(-45)'
              width='6.03'
              x='1318.02'
              y='197.37'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(261.02 986.12) rotate(-45)'
              width='2.19'
              x='1319.77'
              y='174.96'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='1299.8'
              y='175.07'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='1300'
              y='199.18'
            />
            <circle className='main__cls-6' cx='1330.03' cy='188.28' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1362.17'
              y='113.66'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1365.76'
              y='116.95'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1369.34'
              y='119.13'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1344.93'
              y='116.95'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1347.12'
              y='121.32'
            />
          </g>
          <g>
            <rect height='2.19' width='11.09' x='1325.02' y='104.6' />
            <rect height='16.73' width='2.19' x='1329.47' y='122.97' />
            <rect
              height='2.19'
              transform='translate(568.15 1213.97) rotate(-60)'
              width='19.69'
              x='1325.49'
              y='113.89'
            />
            <rect
              height='13.12'
              transform='translate(290.01 982.21) rotate(-45)'
              width='2.19'
              x='1329.47'
              y='134.49'
            />
            <rect
              height='2.19'
              transform='translate(289.93 982.12) rotate(-45)'
              width='13.12'
              x='1324'
              y='139.96'
            />
            <rect height='19.69' width='2.19' x='1329.47' y='85.29' />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='57.11'
            x='1278.01'
            y='154.93'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='21.99'
            x='1278.01'
            y='199.18'
          />
          <rect height='60.69' width='2.19' x='1329.47' y='161.68' />
          <rect
            className='main__cls-55'
            height='134.34'
            width='2.19'
            x='1275.82'
            y='67.03'
          />
          <circle className='main__cls-55' cx='1332.19' cy='156.02' r='3.28' />
          <text className='main__cls-22' transform='translate(1295.08 143.93)'>
            <tspan x='0' y='0'>
              CB3
            </tspan>
          </text>
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1158.09'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(1190.37 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1148.79 25.29)'>
            <tspan x='0' y='0'>
              MV M
            </tspan>
            <tspan className='main__cls-32' x='41.61' y='0'>
              E
            </tspan>
            <tspan x='50.5' y='0'>
              TERING
            </tspan>
            <tspan className='main__cls-39' x='11.06' y='21'>
              S
            </tspan>
            <tspan x='19.79' y='21'>
              epam b21
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1228.38'
              y='106.22'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1231.96'
              y='109.5'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1235.54'
              y='111.69'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1211.13'
              y='109.5'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1213.32'
              y='113.88'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='1194.65'
              y='104.58'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='1199.1'
              y='122.95'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(502.98 1101.06) rotate(-60)'
              width='19.69'
              x='1195.13'
              y='113.88'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='1199.1'
              y='85.28'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='33.61'
            x='1166.14'
            y='230.41'
          />
          <rect
            className='main__cls-49'
            height='92.92'
            width='2.19'
            x='1199.1'
            y='139.68'
          />
          <rect
            className='main__cls-55'
            height='154.63'
            width='2.19'
            x='1165.49'
            y='77.97'
          />
          <rect
            className='main__cls-4'
            height='26.25'
            width='10.94'
            x='1195.08'
            y='140.56'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='1200.2'
              cy='191.96'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='1200.2'
              cy='201.76'
              rx='9.84'
              ry='9.8'
            />
          </g>
        </g>
      </g>
      <rect
        className='main__cls-55'
        height='2.19'
        width='26.51'
        x='346.45'
        y='511.1'
      />
      <g>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='262.23'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(294.51 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(252.93 469.36)'>
            <tspan x='0' y='0'>
              MV M
            </tspan>
            <tspan className='main__cls-32' x='41.61' y='0'>
              E
            </tspan>
            <tspan x='50.5' y='0'>
              TERING
            </tspan>
            <tspan className='main__cls-46' x='6.89' y='21'>
              V
            </tspan>
            <tspan x='16.07' y='21'>
              a
            </tspan>
            <tspan className='main__cls-35' x='24.51' y='21'>
              r
            </tspan>
            <tspan x='30.3' y='21'>
              lo
            </tspan>
            <tspan className='main__cls-43' x='44.03' y='21'>
              g
            </tspan>
            <tspan x='53.71' y='21'>
              ic PFC
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='332.52'
              y='550.29'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='336.1'
              y='553.57'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='339.68'
              y='555.76'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='315.27'
              y='553.57'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='317.46'
              y='557.94'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='298.79'
              y='548.65'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='303.24'
              y='567.02'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-329.59 547.25) rotate(-60)'
              width='19.69'
              x='299.27'
              y='557.94'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='303.24'
              y='529.35'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='33.61'
            x='270.28'
            y='674.48'
          />
          <rect
            className='main__cls-49'
            height='92.92'
            width='2.19'
            x='303.24'
            y='583.75'
          />
          <rect
            className='main__cls-55'
            height='154.63'
            width='2.19'
            x='269.63'
            y='522.03'
          />
          <rect
            className='main__cls-4'
            height='26.25'
            width='10.94'
            x='299.22'
            y='584.62'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='304.34'
              cy='636.03'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='304.34'
              cy='645.83'
              rx='9.84'
              ry='9.8'
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1528.75'
              y='58.28'
            />
            <text
              className='main__cls-22'
              transform='translate(1561.02 73.1) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1519.44 25.29)'>
            <tspan x='0' y='0'>
              MV M
            </tspan>
            <tspan className='main__cls-32' x='41.61' y='0'>
              E
            </tspan>
            <tspan x='50.5' y='0'>
              TERING
            </tspan>
            <tspan className='main__cls-39' x='11.06' y='21'>
              S
            </tspan>
            <tspan x='19.79' y='21'>
              epam b21
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='1599.03'
              y='100.15'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1602.61'
              y='103.43'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='1606.19'
              y='105.61'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='1581.78'
              y='103.43'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='1583.97'
              y='107.8'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='1565.3'
              y='98.51'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='1569.75'
              y='116.88'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(693.58 1419.03) rotate(-60)'
              width='19.69'
              x='1565.78'
              y='107.8'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='1569.75'
              y='79.2'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='33.61'
            x='1536.14'
            y='224.33'
          />
          <rect
            className='main__cls-49'
            height='92.92'
            width='2.19'
            x='1569.75'
            y='133.6'
          />
          <rect
            className='main__cls-55'
            height='148.55'
            width='2.19'
            x='1536.14'
            y='77.97'
          />
          <rect
            className='main__cls-4'
            height='26.25'
            width='10.94'
            x='1565.38'
            y='134.48'
          />
          <g>
            <ellipse
              className='main__cls-8'
              cx='1570.85'
              cy='185.89'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='1570.85'
              cy='195.69'
              rx='9.84'
              ry='9.8'
            />
          </g>
        </g>
      </g>
      <g>
        <text className='main__cls-24' transform='translate(2561.06 758.68)'>
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//690V
          </tspan>
          <tspan x='9.88' y='18.37'>
            1600k
          </tspan>
          <tspan className='main__cls-48' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='2496.29'
              y='500.01'
            />
            <text
              className='main__cls-22'
              transform='translate(2528.57 514.83) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(2521.06 467.02)'>
            <tspan x='0' y='0'>
              TR34
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='74.72'
            width='2.19'
            x='2502.59'
            y='520.79'
          />
          <circle className='main__cls-6' cx='2538.74' cy='594.42' r='9.84' />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2524.63'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.94'
              x='2526.82'
              y='630.21'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='2521.03'
              y='627.71'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='2513.5'
              y='630.21'
            />
            <path
              className='main__cls-6'
              d='M2508.13,626.93c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='2533.15'
              y='553.71'
            />
            <rect
              className='main__cls-49'
              height='26.69'
              width='2.19'
              x='2537.61'
              y='527.02'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(355.93 1955.83) rotate(-45)'
              width='2.19'
              x='2537.61'
              y='541.73'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(355.8 1955.63) rotate(-45)'
              width='13.12'
              x='2532.14'
              y='547.2'
            />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='2569.03'
              y='557.28'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2572.61'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='2576.19'
              y='562.75'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='2551.78'
              y='560.56'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='2553.97'
              y='564.94'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='40.7'
            x='2502.59'
            y='563.85'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='26.3'
            x='2502.59'
            y='593.33'
          />
          <polygon
            className='main__cls-49'
            points='2539.23 571.9 2551.78 556.74 2550.2 555.41 2537.64 570.57 2539.23 571.9'
          />
          <rect
            className='main__cls-49'
            height='172.88'
            width='2.19'
            x='2537.64'
            y='570.57'
          />
          <polygon
            className='main__cls-5'
            points='2538.74 670.93 2544.05 661.73 2533.43 661.73 2538.74 670.93'
          />
          <circle className='main__cls-55' cx='2540.37' cy='564.94' r='3.28' />
          <g>
            <ellipse
              className='main__cls-8'
              cx='2527.9'
              cy='772.91'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='2549.58'
              cy='772.91'
              rx='9.84'
              ry='9.8'
            />
            <ellipse
              className='main__cls-8'
              cx='2538.81'
              cy='754.17'
              rx='9.84'
              ry='9.8'
            />
            <polygon
              className='main__cls-9'
              points='2553.95 772.91 2547.4 769.13 2547.4 776.69 2553.95 772.91'
            />
            <polygon
              className='main__cls-9'
              points='2543.17 754.17 2536.63 750.39 2536.63 757.95 2543.17 754.17'
            />
            <g>
              <rect
                className='main__cls-49'
                height='1.09'
                width='8.75'
                x='2520.32'
                y='772.4'
              />
              <rect
                className='main__cls-49'
                height='1.09'
                transform='translate(195.94 2015) rotate(-45)'
                width='6.56'
                x='2527.01'
                y='770.43'
              />
              <rect
                className='main__cls-49'
                height='6.56'
                transform='translate(193.2 2016.14) rotate(-45)'
                width='1.09'
                x='2529.75'
                y='771.57'
              />
            </g>
          </g>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2564.42'
              y='659.52'
            />
            <text
              className='main__cls-25'
              transform='translate(2580.09 678.71)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2626.88 678.55)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2564.42'
              y='685.77'
            />
            <text
              className='main__cls-25'
              transform='translate(2580.09 704.96)'
            >
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text className='main__cls-25' transform='translate(2626.88 704.8)'>
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
          <g>
            <rect
              className='main__cls-7'
              height='26.25'
              width='59.79'
              x='2564.42'
              y='712.02'
            />
            <text className='main__cls-25' transform='translate(2580.09 731.2)'>
              <tspan x='0' y='0'>
                +40
              </tspan>
            </text>
            <text
              className='main__cls-25'
              transform='translate(2626.88 731.04)'
            >
              <tspan x='0' y='0'>
                °C
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <g>
        <polygon
          className='main__cls-5'
          points='1913.83 1062.41 1919.14 1071.61 1908.52 1071.61 1913.83 1062.41'
        />
        <rect
          className='main__cls-49'
          height='3.28'
          width='110.52'
          x='1748.07'
          y='1140.59'
        />
        <rect
          className='main__cls-49'
          height='131.68'
          width='2.19'
          x='1755.75'
          y='1196.94'
        />
        <rect
          className='main__cls-49'
          height='225.72'
          width='2.19'
          x='1912.86'
          y='1072.51'
        />
        <g>
          <rect
            className='main__cls-49'
            height='19.69'
            width='2.19'
            x='1755.75'
            y='1140.97'
          />
          <polygon
            className='main__cls-5'
            points='1756.85 1164.1 1760.23 1161.58 1753.47 1161.58 1756.85 1164.1'
          />
        </g>
        <g>
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1742.73'
            y='1218.13'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='10.94'
            x='1744.91'
            y='1220.62'
          />
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1739.13'
            y='1218.13'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='7.53'
            x='1731.6'
            y='1220.62'
          />
          <path
            className='main__cls-6'
            d='M1726.23,1217.34c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
          />
        </g>
        <polygon
          className='main__cls-5'
          points='1756.85 1252.85 1762.16 1262.04 1751.54 1262.04 1756.85 1252.85'
        />
        <g>
          <rect
            className='main__cls-55'
            height='17.5'
            width='2.19'
            x='1784.71'
            y='1164.97'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1788.29'
            y='1168.25'
          />
          <rect
            className='main__cls-55'
            height='6.56'
            width='2.19'
            x='1791.87'
            y='1170.44'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1767.46'
            y='1168.25'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='15.06'
            x='1769.65'
            y='1172.63'
          />
        </g>
        <rect
          className='main__cls-49'
          height='16.73'
          width='2.19'
          x='1755.73'
          y='1180.97'
        />
        <rect
          className='main__cls-49'
          height='2.19'
          transform='translate(-134.99 2112.19) rotate(-60)'
          width='19.69'
          x='1751.75'
          y='1171.9'
        />
        <circle className='main__cls-6' cx='1835.4' cy='1218.66' r='9.84' />
        <g>
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1821.29'
            y='1251.95'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='10.94'
            x='1823.48'
            y='1254.45'
          />
          <rect
            className='main__cls-55'
            height='7.18'
            width='2.19'
            x='1817.7'
            y='1251.95'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='7.53'
            x='1810.16'
            y='1254.45'
          />
          <path
            className='main__cls-6'
            d='M1804.8,1251.17c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
          />
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='2.19'
            width='11.09'
            x='1829.82'
            y='1170.3'
          />
          <rect
            className='main__cls-49'
            height='26.69'
            width='2.19'
            x='1834.27'
            y='1143.61'
          />
          <rect
            className='main__cls-49'
            height='13.12'
            transform='translate(-286.11 1639.08) rotate(-45)'
            width='2.19'
            x='1834.28'
            y='1158.32'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(-286.15 1638.89) rotate(-45)'
            width='13.12'
            x='1828.81'
            y='1163.79'
          />
        </g>
        <text
          className='main__cls-24'
          transform='translate(1884.11 1201.44) rotate(90)'
        >
          <tspan x='0' y='0'>
            22
          </tspan>
          <tspan className='main__cls-63' x='15.71' y='0'>
            K
          </tspan>
          <tspan x='24.24' y='0'>
            V//400V
          </tspan>
          <tspan x='9.88' y='18.37'>
            3000k
          </tspan>
          <tspan className='main__cls-34' x='48.47' y='18.37'>
            V
          </tspan>
          <tspan x='56.14' y='18.37'>
            A
          </tspan>
        </text>
        <g>
          <rect
            className='main__cls-55'
            height='17.5'
            width='2.19'
            x='1865.7'
            y='1173.87'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1869.28'
            y='1177.15'
          />
          <rect
            className='main__cls-55'
            height='6.56'
            width='2.19'
            x='1872.86'
            y='1179.34'
          />
          <rect
            className='main__cls-55'
            height='10.94'
            width='2.19'
            x='1848.45'
            y='1177.15'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='15.06'
            x='1850.64'
            y='1181.53'
          />
        </g>
        <rect
          className='main__cls-55'
          height='2.19'
          width='40.7'
          x='1799.26'
          y='1180.43'
        />
        <rect
          className='main__cls-55'
          height='2.19'
          width='26.3'
          x='1799.26'
          y='1217.57'
        />
        <polygon
          className='main__cls-49'
          points='1835.89 1188.48 1848.45 1173.33 1846.87 1172 1834.31 1187.15 1835.89 1188.48'
        />
        <rect
          className='main__cls-49'
          height='108.88'
          width='2.19'
          x='1834.27'
          y='1187.16'
        />
        <rect
          className='main__cls-55'
          height='83.47'
          width='2.19'
          x='1799.26'
          y='1136.28'
        />
        <polygon
          className='main__cls-5'
          points='1835.4 1287.52 1840.71 1278.32 1830.09 1278.32 1835.4 1287.52'
        />
        <g>
          <g>
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='1792.95'
              y='1116.6'
            />
            <text
              className='main__cls-22'
              transform='translate(1825.23 1131.41) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(1819 1087.13)'>
            <tspan x='0' y='0'>
              TR52
            </tspan>
            <tspan className='main__cls-39' x='-22.78' y='21'>
              S
            </tspan>
            <tspan x='-14.05' y='21'>
              epam 10B
            </tspan>
          </text>
        </g>
        <g>
          <ellipse
            className='main__cls-8'
            cx='1913.95'
            cy='1228.94'
            rx='9.84'
            ry='9.8'
          />
          <ellipse
            className='main__cls-8'
            cx='1913.95'
            cy='1238.74'
            rx='9.84'
            ry='9.8'
          />
        </g>
        <circle className='main__cls-55' cx='1837.03' cy='1181.53' r='3.28' />
        <rect
          className='main__cls-49'
          height='2.19'
          width='80.06'
          x='1834.27'
          y='1295.88'
        />
      </g>
      <g>
        <g>
          <rect
            className='main__cls-8'
            height='55.87'
            width='117.25'
            x='1392.07'
            y='303.23'
          />
          <g>
            <path d='M1426.3,323.07l-1.23,3.71h-1.58l4.01-11.8h1.84l4.03,11.8h-1.63l-1.26-3.71h-4.18Zm3.87-1.19l-1.16-3.4c-.26-.77-.44-1.47-.61-2.15h-.04c-.17,.7-.37,1.42-.59,2.14l-1.16,3.41h3.55Z' />
            <path d='M1435.99,316.28h-3.59v-1.3h8.73v1.3h-3.61v10.5h-1.54v-10.5Z' />
            <path d='M1442.13,324.92c.68,.42,1.68,.77,2.73,.77,1.56,0,2.47-.82,2.47-2.01,0-1.1-.63-1.73-2.22-2.35-1.93-.68-3.12-1.68-3.12-3.34,0-1.84,1.52-3.2,3.82-3.2,1.21,0,2.08,.28,2.61,.58l-.42,1.24c-.38-.21-1.17-.56-2.24-.56-1.61,0-2.22,.96-2.22,1.77,0,1.1,.72,1.65,2.34,2.28,2,.77,3.01,1.73,3.01,3.47,0,1.82-1.35,3.4-4.13,3.4-1.14,0-2.38-.33-3.01-.75l.38-1.28Z' />
            <path d='M1462.92,326.39c-.56,.28-1.68,.56-3.12,.56-3.33,0-5.83-2.1-5.83-5.97s2.5-6.2,6.16-6.2c1.47,0,2.4,.31,2.8,.52l-.37,1.24c-.58-.28-1.4-.49-2.38-.49-2.76,0-4.6,1.77-4.6,4.87,0,2.89,1.66,4.74,4.53,4.74,.93,0,1.87-.19,2.49-.49l.31,1.21Z' />
            <path d='M1466.63,315.88v2.43h2.21v1.17h-2.21v4.57c0,1.05,.3,1.65,1.16,1.65,.4,0,.7-.05,.89-.1l.07,1.15c-.3,.12-.77,.21-1.37,.21-.72,0-1.3-.23-1.66-.65-.44-.46-.59-1.21-.59-2.21v-4.62h-1.31v-1.17h1.31v-2.03l1.5-.4Z' />
            <path d='M1470.57,320.95c0-1-.02-1.85-.07-2.64h1.35l.05,1.66h.07c.38-1.14,1.31-1.86,2.35-1.86,.17,0,.3,.02,.44,.05v1.45c-.16-.04-.32-.05-.53-.05-1.08,0-1.86,.82-2.07,1.98-.04,.21-.07,.46-.07,.72v4.52h-1.52v-5.83Z' />
            <path d='M1476.36,314.35h1.54v12.43h-1.54v-12.43Z' />
            <path d='M1432.58,337.28h-3.59v-1.3h8.73v1.3h-3.61v10.5h-1.54v-10.5Z' />
            <path d='M1438.49,347.78v-.95l1.21-1.17c2.91-2.77,4.22-4.24,4.24-5.95,0-1.16-.56-2.22-2.26-2.22-1.03,0-1.89,.52-2.42,.96l-.49-1.08c.79-.67,1.91-1.16,3.22-1.16,2.45,0,3.48,1.68,3.48,3.31,0,2.1-1.52,3.8-3.92,6.11l-.91,.84v.03h5.11v1.28h-7.26Z' />
            <path d='M1455.03,341.97c0,3.87-1.44,6-3.96,6-2.22,0-3.73-2.08-3.76-5.85,0-3.81,1.65-5.92,3.96-5.92s3.76,2.14,3.76,5.76Zm-6.18,.17c0,2.96,.91,4.64,2.31,4.64,1.58,0,2.33-1.84,2.33-4.74s-.72-4.64-2.31-4.64c-1.35,0-2.33,1.65-2.33,4.74Z' />
            <path d='M1464,341.97c0,3.87-1.44,6-3.96,6-2.22,0-3.73-2.08-3.76-5.85,0-3.81,1.65-5.92,3.96-5.92s3.76,2.14,3.76,5.76Zm-6.18,.17c0,2.96,.91,4.64,2.31,4.64,1.58,0,2.33-1.84,2.33-4.74s-.72-4.64-2.31-4.64c-1.35,0-2.33,1.65-2.33,4.74Z' />
            <path d='M1465.75,345.92c.68,.42,1.68,.77,2.73,.77,1.56,0,2.47-.82,2.47-2.01,0-1.1-.63-1.73-2.22-2.35-1.93-.68-3.12-1.68-3.12-3.34,0-1.84,1.52-3.2,3.82-3.2,1.21,0,2.08,.28,2.61,.58l-.42,1.24c-.38-.21-1.17-.56-2.24-.56-1.61,0-2.22,.96-2.22,1.77,0,1.1,.72,1.65,2.34,2.28,2,.77,3.01,1.73,3.01,3.47,0,1.82-1.35,3.4-4.13,3.4-1.14,0-2.38-.33-3.01-.75l.38-1.28Z' />
          </g>
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='39.43'
            width='2.19'
            x='1409.62'
            y='262.26'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(776.93 1563.69) rotate(-75)'
            width='24.9'
            x='1394.94'
            y='274.49'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='7.6'
            x='1403.11'
            y='286.26'
          />
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='39.43'
            width='2.19'
            x='1409.07'
            y='262.26'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(776.53 1563.16) rotate(-75)'
            width='24.9'
            x='1394.39'
            y='274.49'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='7.6'
            x='1402.56'
            y='286.26'
          />
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='2.19'
            width='48.23'
            x='1343.03'
            y='333.33'
          />
          <polygon
            className='main__cls-49'
            points='1344.96 335.37 1374.38 328.93 1373.69 326.81 1344.27 333.26 1344.96 335.37'
          />
          <rect
            className='main__cls-49'
            height='7.6'
            width='2.68'
            x='1372.38'
            y='326.81'
          />
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='39.43'
            width='2.19'
            x='1447.39'
            y='262.26'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(804.93 1600.17) rotate(-75)'
            width='24.9'
            x='1432.71'
            y='274.49'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='7.6'
            x='1440.88'
            y='286.26'
          />
        </g>
        <g>
          <rect
            className='main__cls-49'
            height='39.43'
            width='2.19'
            x='1484.41'
            y='262.18'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            transform='translate(832.44 1635.87) rotate(-75)'
            width='24.9'
            x='1469.73'
            y='274.41'
          />
          <rect
            className='main__cls-49'
            height='2.19'
            width='7.6'
            x='1477.9'
            y='286.18'
          />
        </g>
        <text className='main__cls-25' transform='translate(1176.8 317.93)'>
          <tspan className='main__cls-39' x='0' y='0'>
            S
          </tspan>
          <tspan x='8.73' y='0'>
            end{' '}
          </tspan>
          <tspan className='main__cls-43' x='40.79' y='0'>
            t
          </tspan>
          <tspan x='46.47' y='0'>
            o
          </tspan>
          <tspan className='main__cls-18' x='56.08' y='0'>
            {' '}
          </tspan>
          <tspan className='main__cls-60' x='59.07' y='0'>
            T
          </tspan>
          <tspan className='main__cls-35' x='66.98' y='0'>
            r
          </tspan>
          <tspan className='main__cls-44' x='72.77' y='0'>
            ip CB
          </tspan>
          <tspan className='main__cls-1' x='110.17' y='0'>
            {' '}
          </tspan>
          <tspan x='113.16' y='0'>
            TR11&amp;TR30
          </tspan>
        </text>
        <text></text>
        <text
          className='main__cls-25'
          transform='translate(1432.25 292.37) rotate(-90)'
        >
          <tspan x='0' y='0'>
            Ct
          </tspan>
          <tspan className='main__cls-40' x='15.94' y='0'>
            r
          </tspan>
          <tspan x='21.73' y='0'>
            l CB1
          </tspan>
        </text>
        <text></text>
        <text
          className='main__cls-25'
          transform='translate(1469.48 293.54) rotate(-90)'
        >
          <tspan x='0' y='0'>
            Ct
          </tspan>
          <tspan className='main__cls-40' x='15.94' y='0'>
            r
          </tspan>
          <tspan x='21.73' y='0'>
            l CB2
          </tspan>
        </text>
        <text></text>
        <text
          className='main__cls-25'
          transform='translate(1503.17 292.37) rotate(-90)'
        >
          <tspan x='0' y='0'>
            Ct
          </tspan>
          <tspan className='main__cls-40' x='15.94' y='0'>
            r
          </tspan>
          <tspan x='21.73' y='0'>
            l CB3
          </tspan>
        </text>
      </g>
      <g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              width='10.04'
              x='359.75'
              y='511.1'
            />
            <rect
              className='main__cls-11'
              height='19.69'
              width='83.15'
              x='369.85'
              y='502.35'
            />
            <text
              className='main__cls-22'
              transform='translate(402.13 517.17) scale(.99 1)'
            >
              <tspan x='0' y='0'>
                0.0
              </tspan>
            </text>
          </g>
          <text className='main__cls-26' transform='translate(363.25 469.36)'>
            <tspan x='0' y='0'>
              OUT GOING 1
            </tspan>
            <tspan className='main__cls-39' x='9.03' y='21'>
              S
            </tspan>
            <tspan x='17.76' y='21'>
              epam S20
            </tspan>
          </text>
        </g>
        <g>
          <g>
            <rect
              className='main__cls-55'
              height='2.19'
              transform='translate(-336.37 473.04) rotate(-45)'
              width='6.03'
              x='399.77'
              y='641.43'
            />
            <rect
              className='main__cls-55'
              height='6.03'
              transform='translate(-321.93 466.88) rotate(-45)'
              width='2.19'
              x='401.51'
              y='619.03'
            />
            <rect
              className='main__cls-55'
              height='2.04'
              width='19.69'
              x='381.54'
              y='619.14'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='19.69'
              x='381.74'
              y='643.25'
            />
            <circle className='main__cls-6' cx='411.78' cy='632.35' r='9.84' />
          </g>
          <g>
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='473.04'
              y='554.85'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='476.63'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='480.21'
              y='560.32'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='455.8'
              y='558.13'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='457.99'
              y='562.5'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='36.04'
            x='416.37'
            y='557.96'
          />
          <g>
            <rect
              className='main__cls-49'
              height='2.19'
              width='11.09'
              x='406.76'
              y='548.67'
            />
            <rect
              className='main__cls-49'
              height='16.73'
              width='2.19'
              x='411.21'
              y='567.04'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-275.61 640.77) rotate(-60)'
              width='19.69'
              x='407.24'
              y='557.96'
            />
            <rect
              className='main__cls-49'
              height='13.12'
              transform='translate(-292.99 462.95) rotate(-45)'
              width='2.19'
              x='411.21'
              y='578.56'
            />
            <rect
              className='main__cls-49'
              height='2.19'
              transform='translate(-292.98 462.89) rotate(-45)'
              width='13.12'
              x='405.74'
              y='584.03'
            />
            <rect
              className='main__cls-49'
              height='19.69'
              width='2.19'
              x='411.21'
              y='529.36'
            />
          </g>
          <rect
            className='main__cls-55'
            height='2.19'
            width='58.2'
            x='358.66'
            y='598.99'
          />
          <rect
            className='main__cls-55'
            height='2.19'
            width='24.17'
            x='357.57'
            y='643.25'
          />
          <g>
            <polygon
              className='main__cls-49'
              points='412.79 607.05 425.35 591.89 423.77 590.56 411.21 605.71 412.79 607.05'
            />
            <text className='main__cls-50' transform='translate(425.45 588.01)'>
              <tspan x='0' y='0'>
                M
              </tspan>
            </text>
            <circle className='main__cls-4' cx='431.22' cy='584.15' r='8.75' />
          </g>
          <rect
            className='main__cls-55'
            height='107.62'
            width='2.19'
            x='450.22'
            y='560.15'
          />
          <rect
            className='main__cls-49'
            height='125.33'
            width='2.19'
            x='411.21'
            y='605.67'
          />
          <rect
            className='main__cls-55'
            height='219.91'
            width='2.19'
            x='357.57'
            y='511.1'
          />
          <g>
            <rect
              className='main__cls-55'
              height='19.69'
              transform='translate(-352.2 722.61) rotate(-60)'
              width='2.19'
              x='448.6'
              y='656.47'
            />
            <rect
              className='main__cls-55'
              height='17.5'
              width='2.19'
              x='472.68'
              y='662.34'
            />
            <rect
              className='main__cls-55'
              height='10.94'
              width='2.19'
              x='476.26'
              y='665.62'
            />
            <rect
              className='main__cls-55'
              height='6.56'
              width='2.19'
              x='479.84'
              y='667.81'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='15.06'
              x='457.62'
              y='670'
            />
          </g>
          <polygon
            className='main__cls-5'
            points='412.31 702.8 417.62 693.6 407 693.6 412.31 702.8'
          />
          <polygon
            className='main__cls-10'
            points='444.53 621.24 453.72 626.54 453.72 615.93 444.53 621.24'
          />
          <g>
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='402.05'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='425.78'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='21.55'
              x='404.24'
              y='666.67'
            />
            <rect
              className='main__cls-55'
              height='7.18'
              width='2.19'
              x='398.45'
              y='664.18'
            />
            <rect
              className='main__cls-55'
              height='2.19'
              width='7.53'
              x='390.92'
              y='666.67'
            />
            <path
              className='main__cls-6'
              d='M385.55,663.39c2.42,0,4.37,1.96,4.37,4.37s-1.96,4.37-4.37,4.37'
            />
          </g>
          <circle className='main__cls-55' cx='413.93' cy='600.09' r='3.28' />
          <g>
            <rect
              className='main__cls-8'
              height='34.11'
              width='170.42'
              x='300.52'
              y='731.01'
            />
            <text className='main__cls-25' transform='translate(319.55 752.54)'>
              <tspan className='main__cls-19' x='0' y='0'>
                C
              </tspan>
              <tspan x='10.03' y='0'>
                apaci
              </tspan>
              <tspan className='main__cls-43' x='48.78' y='0'>
                t
              </tspan>
              <tspan x='54.47' y='0'>
                or 500k
              </tspan>
              <tspan className='main__cls-46' x='108.64' y='0'>
                V
              </tspan>
              <tspan x='117.83' y='0'>
                ar
              </tspan>
            </text>
          </g>
        </g>
      </g>
      <TuBuTr30Table
        figuresCoordinate={figuresCoordinateContext![GroupId.TubuTR30Table]}
      />
      <Lv12Table />
      <Lv42Table />
      <Lv72Table />
      <Lv52Table />
      <Lv31Table />
      <Lv32Table />
      <Lv33Table />
      <Lv34_2Table />
      <Lv34_1Table />
      <TuyenNguonNhaKeoTr82Table />
      <TuyenNguonDt477Pb01090028955Table />
      <TuyenNguonDt475Pb01090028954Table />
      <Lv11Table />
      <Tr30Table />
      <NhietDoCacPhongDienTable />
      <g>
        <rect
          className='main__cls-49'
          height='4.37'
          width='1251.63'
          x='1385.18'
          y='83.09'
        />
        <rect
          className='main__cls-49'
          height='4.37'
          width='1112.62'
          x='228.59'
          y='83.09'
        />
        <text className='main__cls-25' transform='translate(228.92 105.9)'>
          <tspan x='0' y='0'>
            Busbar
          </tspan>
          <tspan x='0' y='21'>
            630A
          </tspan>
          <tspan x='0' y='42'>
            24kV
          </tspan>
        </text>
        <text className='main__cls-25' transform='translate(2585.6 102.2)'>
          <tspan x='0' y='0'>
            Busbar
          </tspan>
          <tspan x='0' y='21'>
            630A
          </tspan>
          <tspan x='0' y='42'>
            24kV
          </tspan>
        </text>
      </g>
    </svg>
  );
}
