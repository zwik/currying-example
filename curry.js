const greetDeeplyCurried = function greetingFn(greeting) {
  return function separatorFn(separator) {
    return function emphasisFn(emphasis) {
      return function nameFn(name) {
        return `${greeting}, ${separator}, ${name}, ${emphasis}`;
      };
    };
  };
};

const es6GreetDeeplyCurried = (greeting) => (separator) => (emphasis) => (name) => `${greeting}, ${separator}, ${name}, ${emphasis}`;

module.exports = {
  greetDeeplyCurried,
  es6GreetDeeplyCurried,
};
