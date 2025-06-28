import Validator from '../Validator.js';

describe('Validator string()', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.string();
  });

  test('should return true for empty string, null, undefined (no rules)', () => {
    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);
  });

  test('should return false for null and empty after required()', () => {
    schema.required();

    expect(schema.isValid('what does the fox say')).toBe(true);
    expect(schema.isValid('hexlet')).toBe(true);
    expect(schema.isValid(null)).toBe(false);
    expect(schema.isValid('')).toBe(false);
  });

  test('should validate contains()', () => {
    schema.required().contains('what');

    expect(schema.isValid('what does the fox say')).toBe(true);
    expect(schema.isValid('whatthe fox')).toBe(true);
    expect(schema.isValid('hello world')).toBe(false);
  });

  test('should return false if contains fails after chaining', () => {
    schema.required().contains('whatthe');

    expect(schema.isValid('what does the fox say')).toBe(false);
  });

  test('should override previous minLength validators', () => {
    schema.minLength(10).minLength(4);

    expect(schema.isValid('Hexlet')).toBe(true); // длина 6 > 4
    expect(schema.isValid('abc')).toBe(false);   // длина 3 < 4
  });

  test('isValid should return false for invalid types when required is set', () => {
    expect(schema.required().isValid([])).toBe(false);
    expect(schema.required().isValid({})).toBe(false);
    expect(schema.required().isValid(() => { })).toBe(false);
  })

  test('should allow empty values and reject non-string types when not required', () => {
    expect(schema.isValid('')).toBe(true);
    expect(schema.isValid(null)).toBe(true);
    expect(schema.isValid(undefined)).toBe(true);

    expect(schema.isValid({})).toBe(false);
    expect(schema.isValid(() => { })).toBe(false);
  })
});