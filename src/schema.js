class BaseSchema {

  _validators = [];
  _isRequired = false;

  constructor(customValidators = {}) {

    this._customValidators = customValidators;
  
}

  isValid(value) {

    if (!this._isRequired && (value === null || value === undefined)) {

      return true;
    
}


    if (this._isRequired && (value === null || value === undefined)) {

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

      this._validators[indexRule] = { name, fn };
    
} else {

      this._validators.push({ name, fn });
    
}
  
}

   
  // eslint-disable-next-line class-methods-use-this
  _checkType(_value) {

    return true;
  
}

  test(name, ...args) {

    const fn = this._customValidators[name];
    if (!fn) {

      throw new Error(`Validator "${name}" not found`);
    
}

    this.addValidator(name, (value) => fn(value, ...args));
    return this;
  
}

}
export default BaseSchema;
