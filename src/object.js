import BaseSchema from './schema.js';

export class ObjectSchema extends BaseSchema {
  constructor() {
    super();
    this._shape = null;
  }

  _checkType(value) {
    return typeof value === 'object' && !Array.isArray(value) && value !== null;
  }

  shape(objSchema) {
    this._shape = objSchema;
    return this;
  }

  isValid(value) {

    if (!this._checkType(value)) {
      return false;
    }


    if (this._shape) {
      for (const key in this._shape) {
        const fieldSchema = this._shape[key];

        if (!fieldSchema.isValid(value[key])) {
          return false;
        }
      }
    }

    return true;
  }

}