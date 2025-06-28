import { NumberSchema } from './number.js';
import { StringSchema } from './string.js';
import { ArraySchema } from './array.js';


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
}

export default Validator;