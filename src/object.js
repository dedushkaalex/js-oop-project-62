import BaseSchema from './schema.js';

// eslint-disable-next-line import/prefer-default-export
export class ObjectSchema extends BaseSchema {

  constructor() {

    super();
    this._shape = null;
  
}

  // eslint-disable-next-line class-methods-use-this
  _checkType(value) {

    return typeof value === 'object' && !Array.isArray(value);
  
}

  shape(objSchema) {

    this._shape = objSchema;
    return this;
  
}

  isValid(value) {

    if (value === null) {

      return true;
    
}
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
