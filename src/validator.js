import { NumberSchema } from './number.js';
import { StringSchema } from './string.js';


class Validator {

  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }
}

export default Validator;