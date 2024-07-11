import type { RegExpBuilderFlag } from './types';

export const INITIAL_FLAGS: RegExpBuilderFlag[] = [
  { name: 'hasIndices', enabled: false, symbol: 'd' },
  { name: 'global', enabled: false, symbol: 'g' },
  { name: 'ignoreCase', enabled: false, symbol: 'i' },
  { name: 'multiline', enabled: false, symbol: 'm' },
  { name: 'dotAll', enabled: false, symbol: 's' },
  { name: 'unicode', enabled: true, symbol: 'u' },
  { name: 'unicodeSets', enabled: false, symbol: 'v' },
  { name: 'sticky', enabled: false, symbol: 'y' }
];