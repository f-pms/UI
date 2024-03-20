export interface IHeaderMultiLineProps {
  width: number;
  shift: string;
  time: string;
  newIndex: {
    label: string;
    orderNumber: string;
  };
  total: {
    label: string;
    orderNumber: string;
  };
}

export function HeaderMultiLine(props: IHeaderMultiLineProps) {
  const { shift, time, newIndex, total, width } = props;
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={3}>{shift}</th>
        </tr>
        <tr>
          <th colSpan={3}>{time}</th>
        </tr>
        <tr>
          <th style={{ minWidth: `${width}px` }}>{newIndex.label}</th>
          <th style={{ minWidth: `${width}px` }}>{total.label}</th>
        </tr>
        <tr>
          <th style={{ minWidth: `${width}px` }}>{newIndex.orderNumber}</th>
          <th style={{ minWidth: `${width}px` }}>{total.orderNumber}</th>
        </tr>
      </thead>
    </table>
  );
}
