import {
  selectionRegExp,
  iterationRegExp,
  jumpRegExp,
  functionRegExp,
  assignmentRegExp,
  emptyStatementsRegExp,
  blockDelimitersRegExp,
  dataDeclarationsRegExp,
} from '../consts.js';

export const getSourceCodeLinesCount = (codeStr) => {
  const getMatchesCount = (regExp) => codeStr.match(regExp)?.length || 0;

  const expressionStatementsCount = [
    iterationRegExp,
    jumpRegExp,
    functionRegExp,
    assignmentRegExp,
    emptyStatementsRegExp,
  ].reduce((acc, reg) => acc + getMatchesCount(reg), 0);

  const selectionStatementsCount = getMatchesCount(selectionRegExp);
  const blockDelimitersCount = getMatchesCount(blockDelimitersRegExp) - selectionStatementsCount;
  const dataDeclarationsCount = getMatchesCount(dataDeclarationsRegExp);

  return (
    selectionStatementsCount +
    expressionStatementsCount +
    blockDelimitersCount +
    dataDeclarationsCount
  );
};
