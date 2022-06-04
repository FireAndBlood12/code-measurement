const ONE_LINE_COMMENT_KEY = '//';
const MULTI_LINE_COMMENT_OPEN_KEY = '/*';
const MULTI_LINE_COMMENT_CLOSE_KEY = '*/';

export const getCommentsLinesCount = (codeLines) => {
  let isInCommentState = false;

  return codeLines.reduce((acc, line) => {
    if (isInCommentState) {
      isInCommentState = !line.includes(MULTI_LINE_COMMENT_CLOSE_KEY);
      return acc + 1;
    }

    const oneLineCommentIndex = line.indexOf(ONE_LINE_COMMENT_KEY) + 1;
    const multiLineCommentIndex =
      line.indexOf(MULTI_LINE_COMMENT_OPEN_KEY) + 1;

    if (!oneLineCommentIndex && !multiLineCommentIndex) {
      return acc;
    }

    if (oneLineCommentIndex && !multiLineCommentIndex) {
      return acc + 1;
    }

    if (
      multiLineCommentIndex < oneLineCommentIndex || 
      multiLineCommentIndex < line.length
    ) {
      isInCommentState = true;
    }

    return acc + 1;
  }, 0);
};
