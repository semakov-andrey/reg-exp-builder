import { RegExpBuilder } from '@/source/index';

it('first', () => {
  const pattern = new RegExpBuilder().startOfInput().any({ exactly: 5 }).then('_').getRegExp();

  expect(pattern.test('jhkrd_')).toBe(true);
});