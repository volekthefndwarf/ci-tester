var Dummy = module.exports = function(number) {
	this.value = number; 
}

Dummy.prototype.add = function(num) {
	this.value += num; 
	return this.value; 
}

Dummy.prototype.subtract = function(num) {
	this.value = this.value - num; 
	return this.value; 
}
