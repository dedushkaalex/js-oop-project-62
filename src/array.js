import BaseSchema from './schema.js';

// eslint-disable-next-line import/prefer-default-export
export class ArraySchema extends BaseSchema {

  // eslint-disable-next-line class-methods-use-this
  _checkType(value) {

    return Array.isArray(value);
  
}

  sizeof(value) {

    this.addValidator('sizeof', (array) => array.length === value);

    return this;
  
}

}
