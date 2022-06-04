export const getEmptyLinesCount = (codeLines) =>
  codeLines.reduce((acc, cur) => (cur ? acc : acc + 1), 0);
