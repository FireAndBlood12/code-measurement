import { analyzeLib } from './src/analyzeLib.js';
import { logCodeAnalysis } from './src/utils/logCodeAnalysis.js';

const PATH_TO_LIBRARY = './node_modules/process';

const libAnalysis = analyzeLib(PATH_TO_LIBRARY);

logCodeAnalysis('Бібліотека', libAnalysis);
