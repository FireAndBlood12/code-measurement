export const EMPTY_PHYSICAL_LINES_MULTIPLIER = 0.25;

export const commentRegExp = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
export const selectionRegExp = /if|else if|\?|try|catch|switch|for/g;
export const iterationRegExp = /do[\s\S]*?while/g;
export const jumpRegExp = /return|break|goto|exit|continue|throw|else/g;
export const functionRegExp = /\w+\([\s\S]*?\)/g;
export const assignmentRegExp = /[^=]=[^=>]/g;
export const emptyStatementsRegExp = /\{\s*\}/g;
export const blockDelimitersRegExp = /\{\S*\}/g;
export const dataDeclarationsRegExp = /let|const|var|class|new/g;
