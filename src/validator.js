import { NumberSchema } from './number.js';
import { StringSchema } from './string.js';
import { ArraySchema } from './array.js';
import { ObjectSchema } from './object.js';


class Validator {

  constructor() {

    this.customValidators = {
      string: {},
      number: {},
      array: {},
      object: {},
    };
  
}

  addValidator(type, name, fn) {

    if (!this.customValidators[type]) {

      this.customValidators[type] = {};
    
}
    this.customValidators[type][name] = fn;
  
}

  string() {

    return new StringSchema(this.customValidators.string);
  
}

  number() {

    return new NumberSchema(this.customValidators.number);
  
}

  array() {

    return new ArraySchema(this.customValidators.array);
  
}

  object() {

    return new ObjectSchema(this.customValidators.object);
  
}

}

export default Validator;
