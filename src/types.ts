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