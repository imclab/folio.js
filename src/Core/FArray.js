/*
 *
 *	FArray.js
 *
 *	Extensions to JavaScript Array may be bad form... but whatever
 *
 */


/**
 *
 *	Array
 *
 */

/**
 *
 *	@return {Number} median value
 *
 */
Array.prototype.median = function() {
	var median = 0;
	this.sort();
	if (this.length % 2 === 0) {
		median = (this[this.length / 2 - 1] + this[this.length / 2]) / 2;
	}
	else {
		median = this[(this.length - 1) / 2];
	}
	return median;
};

/**
 *
 *	@return {Object} unique element
 *
 */
Array.prototype.unique = function() {
	var u = [];
	o:for(var i=0, n=this.length; i<n; i++) {
		for(var x=0, y=u.length; x<y; x++) {
			if(u[x] == this[i]) {
				continue o;
			}
		}
		u[u.length] = this[i];
	}
	return u;
};

/**
 *
 *	merges (then shuffles) two Arrays
 *
 *	@param {Array} arr2
 *				Array object 2
 *
 *	@return {Array} new merged Array object
 *
 */
Array.prototype.merge = function(arr) {
	var output = this.concat(arr);
	output.shuffle();
	return output;
};

/**
 *
 *	@param {Number} start
 *				start position in array
 *	@param {Number} stop
 *				stop position in array
 *
 *	@return {Number} maximum value within array
 *
 */
Array.prototype.max = function(start, stop) {
	start = (start != undefined)
		? start
		: 0;
	stop = (stop != undefined)
		? stop
		: this.length;
	var max = this[start];

	for(var i=(start+1); i<stop; i++) if(this[i] > max) max = i;
	return max;
};

/**
 *
 *	@param {Number} start
 *				start position in array
 *	@param {Number} stop
 *				stop position in array
 *
 *	@return {Number} minimum value within array
 *
 */
Array.prototype.min = function(start, stop) {
	start = (start != undefined)
		? start
		: 0;
	stop = (stop != undefined)
		? stop
		: this.length;
	var min = this[start];

	for (var i=(start+1); i<stop; i++) if(this[i] < min) min = i;
	return min;
};

/**
 *
 *	http://jsfromhell.com/array/shuffle
 *	http://www.brain4.de/programmierecke/js/arrayShuffle.php
 *
 *	@return {Array} original array but with the order "shuffled"
 *
 */
Array.prototype.shuffle = function() {
	for (var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
};

/**
 *
 *	http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
 *
 *	@return {Array} original array without duplicates
 *
 */
Array.prototype.removeDuplicates = function() {
	return this.reduce(function(accum, cur) {
		if (accum.indexOf(cur) === -1) accum.push(cur);
		return accum;
	}, [] );
};

/**
 *
 *	@param {Number} decimalPlaces
 *			number of decimal places
 *
 *	@return {Array} original array with rounded values
 *
 */
Array.prototype.round = function(decimalPlaces) {
	var multi = Math.pow(10,decimalPlaces);
	for (var i=0; i<this.length; i++) this[i] = Math.round(this[i] * multi)/multi;
	return this;
};


// ------------------------------------------------------------------------
// TODO: integrate sorting methods in a much cleaner way
var FSort = {

	/**
	 *
	 *	sort Array in alphabetical order
	 *
	 *	http://www.brain4.de/programmierecke/js/arraySort.php
	 *
	 */
	alphabetical: function(a, b) {
		/*
		var A = a.toLowerCase();
		var B = b.toLowerCase();

		if (A < B) return -1;
		else if (A > B) return  1;
		else return 0;
		*/

		a = a.toLowerCase();
		a = a.replace(/ä/g,'a');
		a = a.replace(/ö/g,'o');
		a = a.replace(/ü/g,'u');
		a = a.replace(/ß/g,'s');

		b = b.toLowerCase();
		b = b.replace(/ä/g,'a');
		b = b.replace(/ö/g,'o');
		b = b.replace(/ü/g,'u');
		b = b.replace(/ß/g,'s');

		return(a == b) ? 0 : (a>b) ? 1 : -1;
	},

	/**
	 *
	 *	sort array by distance of object from center of canvas
	 *
	 */
	distanceToCenter: function(a, b) {
		var valueA = a.distanceToCenter();
		console.log( valueA );
		var valueB = b.distanceToCenter();
		console.log( valueB );
		var comparisonValue = 0;

		if (valueA > valueB) comparisonValue = -1;
		else if (valueA < valueB) comparisonValue = 1;

		return comparisonValue;
	}

};

