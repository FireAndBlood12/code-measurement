import { getEmptyLinesCount } from './getEmptyLinesCount.js';
import { getSourceCodeLinesCount } from './getSourceCodeLinesCount.js';
import { getCommentsLinesCount } from './getCommentsLinesCount.js';
import { clearCodeFromComments } from './clearCodeFromComments.js';

export const getCodeAnalysis = (codeStr) => {
  const codeLines = codeStr.split('\n').map((line) => line.trim());

  return {
    lines: codeLines.length,
    emptyLines: getEmptyLinesCount(codeLines),
    sourceLines: getSourceCodeLinesCount(clearCodeFromComments(codeStr)),
    commentLines: getCommentsLinesCount(codeLines),
  };
};
