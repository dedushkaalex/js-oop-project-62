import BaseSchema from './schema.js';

export class NumberSchema extends BaseSchema {

  _checkType(value) {
    return typeof value === 'number' && !Number.isNaN(value);
  }

  isValid(value) {
    if (value instanceof Number) {
      return this._checkType(value.valueOf())
    }

    return super.isValid(value)
  }

  positive() {
    this.addValidator('positive', (value) => {
      return value >= 0;
    })

    return this;
  }

  range(start, end) {
    this.addValidator('range', (targetValue) => {
      return targetValue >= start && targetValue <= end;
    })

    return this;
  }
}