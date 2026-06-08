/**
 * @param {number} n
 * @return {number[]}
 */

const numberToBin = (num) => {
	let binStr = ''
	let mode = num;
	while (mode > 0) {
		let remainder = mode % 2;
		mode = Math.floor(mode / 2);
		binStr = remainder.toString() + binStr;
	}
	// console.log(`num:${num}, str=${binStr}`);
	return binStr;
}

var countBits = function (n) {
	const results = [];

	results[0] = 0;



	const sum = (str) => {
		let total = 0;
		str.split('').forEach(item => {
			total += parseInt(item, 10);
		})
		return total;
	}


	for(let i = 1; i <= n; i++){
		let str = numberToBin(i);
		results[i] = sum(str);
	}

	

	// console.log(results);
	return results;
};

var countBits2 = function (n) {
	if (n === 0) return [0];

	let power = 1;
	const results = [0];
	
	for (let i = 1; i <= n; i++) {
		if (power * 2 === i) {
			power *= 2;
			console.log(` ======== power=${power}, ${Math.log2(power)}========`);
			// console.log(results);
		}
		results[i] = 1 + results[i - power];
		console.log(`i:${i},${numberToBin(i)}=== i-power: ${i - power}, results[${i - power}]:${results[i - power]}, fin:${results[i]}`);
	}

	// console.log(results);
	return results;

}

// countBits(5);
countBits2(33);
