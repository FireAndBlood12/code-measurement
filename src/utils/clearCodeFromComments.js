import { commentRegExp } from '../consts.js';

export const clearCodeLinesFromComments = (codeLines) =>
  codeLines.join('\n').replace(commentRegExp, '');

export const clearCodeFromComments = (code) =>
  code.replace(commentRegExp, '');
