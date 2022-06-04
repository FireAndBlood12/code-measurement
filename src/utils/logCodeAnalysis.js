import { EMPTY_PHYSICAL_LINES_MULTIPLIER } from '../consts.js';

export const logCodeAnalysis = (
  title,
  { lines, emptyLines, sourceLines, commentLines },
) => {
  console.log('\n\n\tАналіз коду:', title);
  console.log('Кількість рядків коду:', lines);
  console.log('Кількість пустих рядків коду:', emptyLines);
  console.log(
    'Кількість фізичних рядків коду:',
    lines - Math.floor(emptyLines * (1 - EMPTY_PHYSICAL_LINES_MULTIPLIER)),
  );
  console.log('Кількість логічних рядків коду:', sourceLines);
  console.log('Кількість рядків з коментарями:', commentLines);
  console.log('Рівень коментування:', commentLines / lines);
};
