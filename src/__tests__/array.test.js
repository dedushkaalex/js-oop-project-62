import Validator from '../Validator.js';

describe('Validator array()', () => {
  let schema;

  beforeEach(() => {
    const v = new Validator();
    schema = v.array();
  });

  test.each([
    [null, true],
    [undefined, true],
    [[], true],
    [[1, 2], true],
    [{}, false],
    ['string', false],
    [123, false],
  ])('default: isValid(%s) => %s', (input, expected) => {
    expect(schema.isValid(input)).toBe(expected);
  });

  test.each([
    [[], true],
    [[1, 2], true],
    [null, false],
    [undefined, false],
    [{}, false],
  ])('required(): isValid(%s) => %s', (input, expected) => {
    schema.required();
    expect(schema.isValid(input)).toBe(expected);
  });

  test.each([
    [[1, 2], false],
    [[1], false],
    [[], true],
  ])('sizeof(0): isValid(%s) => %s', (input, expected) => {
    schema.sizeof(0);
    expect(schema.isValid(input)).toBe(expected);
  });

  test.each([
    [[1, 2, 3], true],
    [[1], false],
    [[], false],
  ])('sizeof(3): isValid(%s) => %s', (input, expected) => {
    schema.sizeof(3);
    expect(schema.isValid(input)).toBe(expected);
  });

  test('combination of required and sizeof', () => {
    schema.required().sizeof(2);
    expect(schema.isValid([1, 2])).toBe(true);
    expect(schema.isValid([1])).toBe(false);
    expect(schema.isValid([])).toBe(false);
    expect(schema.isValid(null)).toBe(false);
  });
});
