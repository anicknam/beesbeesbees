RetiredForagerBee.prototype = new Grub();

var RetiredForagerBee = function() {
	this.age = 40;
	this.job = "gamble";
	this.canFly = false;
	this.color = "grey";
	this.forage = function(){
		return "I am too old, let me play cards instead";
	};

};

