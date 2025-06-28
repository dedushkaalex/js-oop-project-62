import Validator from '../validator.js';

describe('Validator number()', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.number();
  });

  test('should return true if not required for [null, undefined]', () => {
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
    expect(schema.isValid(0)).toBe(true);
  });

  test('should return false for [null, undefined] required()', () => {
    schema.required();

    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid(undefined)).toBe(false);
  });

  test('should positive correctly', () => {
    expect(schema.positive().isValid(10)).toBe(true);
    expect(schema.positive().isValid(-12)).toBe(false);
    expect(schema.positive().isValid(0)).toBe(false);
  });

  test('should range correctly', () => {
    expect(schema.range(-5, 5).isValid(-6)).toBe(false);
    expect(schema.range(-5, 5).isValid(-5)).toBe(true);
    expect(schema.range(-5, 5).isValid(5)).toBe(true);
    expect(schema.range(-5, 5).isValid(6)).toBe(false);
    expect(schema.range(-5, 5).isValid(4)).toBe(true);
  });

  test('string as new Number corretcly', () => {
    expect(schema.isValid(new Number(0))).toBe(true);
    expect(schema.isValid(new Number('foo'))).toBe(false);
  });
});