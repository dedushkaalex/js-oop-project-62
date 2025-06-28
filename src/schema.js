class BaseSchema {
  _validators = [];
  _isRequired = false;

  isValid(value) {
    if (!this._isRequired && (value === null || value === undefined || value === '')) {
      return true;
    }


    if (this._isRequired && (value === null || value === undefined || value === '')) {
      return false;
    }

    if (!this._checkType(value)) {
      return false;
    }

    return this._validators.every(({ fn }) => fn(value));
  }

  required() {
    this._isRequired = true;
    return this;
  }

  addValidator(name, fn) {
    const indexRule = this._validators.findIndex(check => check.name === name);

    if (indexRule !== -1) {
      this._validators[indexRule] = { name, fn }
    } else {
      this._validators.push({ name, fn });
    }
  }

  // eslint-disable-next-line no-unused-vars
  _checkType(_value) {
    return true;
  }

}
export default BaseSchema;