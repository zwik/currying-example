import { greetDeeplyCurried, es6GreetDeeplyCurried } from './curryts.ts';

describe('curry.js', () => {
  it('should print the correct output with old notation', () => {
    expect(greetDeeplyCurried('Hello')('...')('?')('Marcel')).toBe('Hello, ..., Marcel, ?');
  });

  it('should print the correct output with old notation', () => {
    expect(es6GreetDeeplyCurried('Hello')('...')('?')('Marcel')).toBe('Hello, ..., Marcel, ?');
  });
});
