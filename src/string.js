import BaseSchema from './schema.js';

export class StringSchema extends BaseSchema {
  _checkType(value) {
    return typeof value === 'string';
  }

  minLength(length) {
    this.addValidator('minLength', (targetStr) => {
      return targetStr.length >= length
    })

    return this;
  }

  contains(str) {
    this.addValidator('contains', (targetStr) => {
      return targetStr.toLowerCase().includes(str.toLowerCase())
    })


    return this;
  }

}