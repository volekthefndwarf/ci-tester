let Calc = require("../lib/calc"); 
var assert = require('assert');


describe('Calc', function() {

  describe('getValue', function() {
    it('should return a 0 value', function() {
      let c = new Calc(); 
      assert.equal(c.getValue(), 0);
    });
  });

  describe('add', function() {
    it('add two numbers', function() {
       let c = new Calc(3); 
       assert.equal(c.add(2),5); 
    }); 
  }); 

  describe('substract', function() {
    it('substract two numbers', function() {
       let c = new Calc(5); 
       assert.equal(c.subtract(2), 3); 
    }); 
  }); 

});

