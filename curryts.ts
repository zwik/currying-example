export const greetDeeplyCurried = function greetingFn(greeting: string) {
  return function separatorFn(separator: string) {
    return function emphasisFn(emphasis: string) {
      return function nameFn(name: string) {
        return `${greeting}, ${separator}, ${name}, ${emphasis}`;
      };
    };
  };
};

// eslint-disable-next-line max-len
export const es6GreetDeeplyCurried = (greeting: string) => (separator: string) => (emphasis: string) => (name: string) => `${greeting}, ${separator}, ${name}, ${emphasis}`;
