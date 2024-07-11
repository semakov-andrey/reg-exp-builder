import { INITIAL_FLAGS } from "./constants";
import type { RegExpBuilderFlag, RegExpBuilderOptions } from "./types";

export class RegExpBuilder {
  constructor(options: RegExpBuilderOptions) {
    this.#options = options;
  }

  #literals: string[] = [];

  #options: RegExpBuilderOptions;

  public getRegExp = (): RegExp => {
    const pattern = this.#literals.join('');
    const flags = INITIAL_FLAGS
      .reduce((acc: string[], { name, enabled, symbol }: RegExpBuilderFlag) => [
        ...acc,
        ...(typeof this.#options[name] === 'boolean' ? this.#options[name] : enabled)
          ? [ symbol ]
          : []
      ], []).join('');
    return new RegExp(pattern, flags);
  }

  public digit = (): this => {
    this.#literals.push('(?:\\d)');
    return this;
  }

  public endOfInput = (): this => {
    this.#literals.push('(?:$)');
    return this;
  }

  public lineBreak = (): this => {
    this.#literals.push('(?:\\r\\n|\\r|\\n');
    return this;
  }

  public notDigit = (): this => {
    this.#literals.push('(?:\\D)');
    return this;
  }

  public startOfInput = (): this => {
    this.#literals.push('(?:^)');
    return this;
  }
}