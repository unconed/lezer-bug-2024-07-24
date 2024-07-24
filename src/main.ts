import { parser } from './test';
import { formatAST } from './format';

const code = `
// Comment

// Comment Comment
const ACES_INPUT = ;

// Comment Comment Comment
const ACES_OUTPUT = ; 
`;

const parsed = parser.parse(code);

console.log(formatAST(parsed.topNode));
