export interface IHeaderMultiLineProps {
  width?: number;
  shift: string;
  time: string;
  oldIndex: {
    label: string;
    orderNumber: string;
  };
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
  const { shift, time, oldIndex, newIndex, total, width = 90 } = props;
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
          <th style={{ minWidth: `${width}px` }}>{oldIndex.label}</th>
          <th style={{ minWidth: `${width}px` }}>{newIndex.label}</th>
          <th style={{ minWidth: `${width}px` }}>{total.label}</th>
        </tr>
        <tr>
          <th style={{ minWidth: `${width}px` }}>{oldIndex.orderNumber}</th>
          <th style={{ minWidth: `${width}px` }}>{newIndex.orderNumber}</th>
          <th style={{ minWidth: `${width}px` }}>{total.orderNumber}</th>
        </tr>
      </thead>
    </table>
  );
}
