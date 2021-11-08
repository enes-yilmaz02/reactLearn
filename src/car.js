import React from "react" ;


class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'Benim  ' + this.brand + 'var .';
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  
  
