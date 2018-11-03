class Calculator {
    constructor(number) {
       this.value = number || 0; 
    }
 
    add(number) {
       this.value+= number; 
       return this.value; 
    }
 
    subtract(number) {
       this.value = this.value - number; 
       return this.value; 
    }
    
    getValue() {
      return  this.value; 
    }
}

module.exports = Calculator;  
