import BaseSchema from './schema';

export class ArraySchema extends BaseSchema {
  _checkType(value) {
    return Array.isArray(value);
  }

  sizeof(value) {
    this.addValidator('sizeof', (array) => {
      return array.length === value;
    })

    return this;
  }
}