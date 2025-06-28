import { NumberSchema } from './number.js';
import { StringSchema } from './string.js';
import { ArraySchema } from './array.js';
import { ObjectSchema } from './object.js';


class Validator {

  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}

export default Validator;