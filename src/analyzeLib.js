import fs from 'fs';
import path from 'path';
import { getCodeAnalysis, logCodeAnalysis } from './utils/index.js'

export const analyzeLib = (libPath) => {
  const measures = {
    lines: 0,
    emptyLines: 0,
    sourceLines: 0,
    commentLines: 0,
  };

  const files = fs.readdirSync(libPath, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      const libData = analyzeLib(path.join(libPath, file.name));
      measures.lines += libData.lines;
      measures.emptyLines += libData.emptyLines;
      measures.sourceLines += libData.sourceLines;
      measures.commentLines += libData.commentLines;
      continue;
    }

    if (!/.js$/.test(file.name)) {
      // skip non-script files
      continue;
    }

    const codeStr = fs
      .readFileSync(path.resolve(libPath, file.name))
      .toString();
    const analyzedData = getCodeAnalysis(codeStr);

    logCodeAnalysis(file.name, analyzedData);

    measures.lines += analyzedData.lines;
    measures.emptyLines += analyzedData.emptyLines;
    measures.sourceLines += analyzedData.sourceLines;
    measures.commentLines += analyzedData.commentLines;
  }

  return measures;
};
