import { getAutoSuggestHighlight } from '~/components/AutoSuggestHighlightText/helpers/getAutoSuggestHighlight';

export interface IAutoSuggestHighlightTextProps {
  value: string;
  filterValue: string;
}

export function AutoSuggestHighlightText(
  props: IAutoSuggestHighlightTextProps,
) {
  const { value, filterValue } = props;
  const parts = getAutoSuggestHighlight(value, filterValue);
  return (
    <>
      {parts.map((part, index) => (
        <span
          key={`${part.text}-${index}`}
          style={{
            fontWeight: part.highlight ? 700 : 'inherit',
            backgroundColor: part.highlight ? '#ffcb7f' : 'transparent',
          }}
        >
          {part.text}
        </span>
      ))}
    </>
  );
}
