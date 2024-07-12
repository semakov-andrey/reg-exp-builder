import { INITIAL_FLAGS } from "./constants";
import type { RegExpBuilderFlag, RegExpBuilderOptions, RegExpParams } from "./types";

export class RegExpBuilder {
  constructor(options: RegExpBuilderOptions = {}) {
    this.#options = options;
  }

  #state: string[] = [];

  #options: RegExpBuilderOptions;

  public getRegExp = (): RegExp => {
    const pattern = this.#state.join('');
    const flags = INITIAL_FLAGS
      .reduce((acc: string[], { name, enabled, symbol }: RegExpBuilderFlag) => [
        ...acc,
        ...(typeof this.#options[name] === 'boolean' ? this.#options[name] : enabled)
          ? [ symbol ]
          : []
      ], []).join('');
    return new RegExp(pattern, flags);
  }

  private getQuantity = (params: RegExpParams = { exactly: 1 }): string => {
    let min = '0';
    let max = '';
    if ('min' in params) min = String(params.min);
    if ('max' in params) max = String(params.max);
    if ('exactly' in params) min = max = String(params.exactly);
    return `{${min},${max}}`;
  }

  public any = (params: RegExpParams): this => {
    const quantity = this.getQuantity(params);
    this.#state.push(`(?:.)${quantity}`);
    return this;
  }

  public digit = (): this => {
    this.#state.push('(?:\\d)');
    return this;
  }

  public digits = (params: RegExpParams): this => {
    const quantity = this.getQuantity(params);
    this.#state.push(`(?:\\d)${quantity}`);
    return this;
  }

  public endOfInput = (): this => {
    this.#state.push('(?:$)');
    return this;
  }

  public lineBreak = (): this => {
    this.#state.push('(?:\\r\\n|\\r|\\n');
    return this;
  }

  public notDigit = (): this => {
    this.#state.push('(?:\\D)');
    return this;
  }

  public startOfInput = (): this => {
    this.#state.push('(?:^)');
    return this;
  }

  public then = (letters: string) => {
    this.#state.push(`(?:${letters})`);
    return this;
  }
}