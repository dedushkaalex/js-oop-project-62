import Validator from '../validator.js';

describe('Validator custom validators', () => {
  let v;

  beforeEach(() => {
    v = new Validator();
  });

  test('should add and use custom string validator "startWith"', () => {
    const startWithFn = (value, start) => value.startsWith(start);
    v.addValidator('string', 'startWith', startWithFn);

    const schema = v.string().test('startWith', 'H');

    expect(schema.isValid('exlet')).toBe(false);
    expect(schema.isValid('Hexlet')).toBe(true);
    expect(schema.isValid('Hello')).toBe(true);
    expect(schema.isValid('')).toBe(true);
  });

  test('should add and use custom number validator "min"', () => {
    const minFn = (value, min) => value >= min;
    v.addValidator('number', 'min', minFn);

    const schema = v.number().test('min', 5);

    expect(schema.isValid(4)).toBe(false);
    expect(schema.isValid(6)).toBe(true);
    expect(schema.isValid(5)).toBe(true);
    expect(schema.isValid(null)).toBe(true);
  });

  test('should throw error if custom validator not found', () => {
    const schema = v.string();
    expect(() => schema.test('nonexistentValidator')).toThrow(
      'Validator "nonexistentValidator" not found'
    );
  });

  test('should chain multiple tests and work correctly', () => {
    const startWithFn = (value, start) => value.startsWith(start);
    const containsFn = (value, substr) => value.includes(substr);

    v.addValidator('string', 'startWith', startWithFn);
    v.addValidator('string', 'contains', containsFn);

    const schema = v.string()
      .test('startWith', 'H')
      .test('contains', 'ex');

    expect(schema.isValid('Hexlet')).toBe(true);
    expect(schema.isValid('Hello')).toBe(false);
    expect(schema.isValid('exlet')).toBe(false);
  });
});
