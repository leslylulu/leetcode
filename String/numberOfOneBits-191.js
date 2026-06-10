/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight1 = function (n) {
	let binaryStr = '';

	// let reminder = 0;
	while(n > 0){
		// console.log('char === ', (n % 2).toString());
		binaryStr = binaryStr + (n % 2).toString();
		n = Math.floor(n / 2)
	}

	let total = 0;
	for(let i = 0; i < binaryStr.length; i++){
		if(binaryStr[i] === '1'){
			total += 1;
		}
	}
	console.log(binaryStr, total);
	return total;

};

var hammingWeight = function (n) {
	let total = 0;
	while (n > 0) {
		// console.log('char === ', n % 2, (n % 2).toString());
		if (n % 2 === 1) {
			total += 1
		}
		n = Math.floor(n / 2)
	}
	console.log( total);
	return total;
};



// hammingWeight(11);
// hammingWeight(128);
hammingWeight(2147483645);