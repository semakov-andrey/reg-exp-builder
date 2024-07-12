export type RegExpBuilderOptionsKeys = 
| 'hasIndices'
| 'global'
| 'ignoreCase'
| 'multiline'
| 'dotAll'
| 'unicode'
| 'unicodeSets'
| 'sticky'

export type RegExpBuilderOptions = {
  [key in RegExpBuilderOptionsKeys]?: boolean;
}

export interface RegExpBuilderFlag {
  name: RegExpBuilderOptionsKeys,
  enabled: boolean;
  symbol: string;
}

export type RegExpParams = 
| RegExpQuantityMin
| RegExpQuantityMax
| (RegExpQuantityMin & RegExpQuantityMax)
| RegExpQuantityExactly
| undefined;

export interface RegExpQuantityMin {
  min: number;
}

export interface RegExpQuantityMax {
  max: number;
}

export interface RegExpQuantityExactly {
  exactly: number;
}