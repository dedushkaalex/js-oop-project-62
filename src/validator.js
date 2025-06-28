import { StringSchema } from './string.js';


class Validator {

  isValid() { }

  required() { }

  minLength() {

    return this;
  }

  contains() {

    return this;
  }

  string() {
    return new StringSchema();
  }
}

export default Validator;