import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
interface Part {
  highlight: boolean;
  text: string;
}

export const getAutoSuggestHighlight = (
  value: string | number,
  filterValue: string,
) => {
  const matches = match(value.toString(), filterValue, { insideWords: true });
  const parts: Part[] = parse(value.toString(), matches);
  return parts;
};
