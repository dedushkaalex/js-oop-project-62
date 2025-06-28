/* eslint-disable import/prefer-default-export */
import BaseSchema from './schema.js';

export class StringSchema extends BaseSchema {

  // eslint-disable-next-line class-methods-use-this
  _checkType(value) {

    return typeof value === 'string';
  
}

  isValid(value) {

    if (!this._isRequired && value === '') {

      return true;
    
}

    if (this._isRequired && value === '') {

      return false;
    
}

    if (value instanceof String) {

      return true;
    
}

    return super.isValid(value);
  
}

  minLength(length) {

    this.addValidator('minLength', (targetStr) => targetStr.length >= length);

    return this;
  
}

  contains(str) {

    this.addValidator('contains', (targetStr) => targetStr.toLowerCase().includes(str.toLowerCase()));


    return this;
  
}

}
