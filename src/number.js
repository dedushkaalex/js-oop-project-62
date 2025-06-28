/* eslint-disable import/prefer-default-export */
import BaseSchema from './schema.js';

export class NumberSchema extends BaseSchema {

  // eslint-disable-next-line class-methods-use-this
  _checkType(value) {

    return typeof value === 'number' && !Number.isNaN(value);
  
}

  isValid(value) {

    if (value instanceof Number) {

      return this._checkType(value.valueOf());
    
}

    return super.isValid(value);
  
}

  positive() {

    this.addValidator('positive', (value) => value > 0);

    return this;
  
}

  range(start, end) {

    this.addValidator('range', (targetValue) => targetValue >= start && targetValue <= end);

    return this;
  
}

}
