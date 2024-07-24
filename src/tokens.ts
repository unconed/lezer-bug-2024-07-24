import { ExternalTokenizer } from '@lezer/lr';
import { untilEOL } from './test.terms';

export const untilEOLToken = new ExternalTokenizer(
  (input, stack) => {
    while (true) {
      const v = input.next;
      // \n\r\v\f | EOF
      if (v === 10 || v === 11 || v === 12 || v === 13 || v === -1) return input.acceptToken(untilEOL);
      input.advance();
    }
  },
);
