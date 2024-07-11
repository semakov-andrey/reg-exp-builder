## Reg Exp Builder

```typescript
import { RegExpBuilder } from 'reg-exp-builder';

const myRegExp = new RegExpBuilder()
  .startOfInput()
  .exactly(4).digits()
  .then('_')
  .exactly(2).digits()
  .then('_')
  .min(3).max(10).letters()
  .then('.')
  .anyOf(array('png', 'jpg', 'gif'))
  .endOfInput()
  .getRegExp();
```