import Validator from '../Validator.js';

describe('ObjectSchema', () => {
  let schema;
  let v;

  beforeEach(() => {
    v = new Validator();
    schema = v.object();
  });

  test('valid object with correct shape', () => {
    const userSchema = schema.shape({
      name: v.string().required(),
      age: v.number().positive(),
    });

    expect(userSchema.isValid({
      name: 'Alice',
      age: 30,
    })).toBe(true);

    expect(userSchema.isValid({
      name: 'Bob',
      age: 0,
    })).toBe(false);

    expect(userSchema.isValid({
      name: '',
      age: 25,
    })).toBe(false);
  });

  test('validates missing fields in object', () => {
    const userSchema = schema.shape({
      name: v.string().required(),
      age: v.number(),
    });

    expect(userSchema.isValid({
      name: 'Alice',
    })).toBe(true);

    expect(userSchema.isValid({
      age: 20,
    })).toBe(false);
  });

  test('invalid type - not an object', () => {
    const userSchema = schema.shape({
      name: v.string(),
    });

    expect(userSchema.isValid(null)).toBe(false);
    expect(userSchema.isValid([])).toBe(false);
    expect(userSchema.isValid('string')).toBe(false);
    expect(userSchema.isValid(123)).toBe(false);
  });
});
