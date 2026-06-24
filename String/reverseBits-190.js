/**
 * @param {number} n
 * @return {number}
 */


const numberToBinary = (n) => {

	let str = '';

	while(n > 0){
		str = (n % 2).toString() + str ;
		n = Math.floor(n / 2)
	}
	return str;
}

const binaryToNum = (str) => {
	let result = 0;
	for(let i = str.length -1 ; i >= 0; i--){
	// 2 ** 0 = 1,
	// 2 ** 1 = 2
	// 2 ** 2 = 4
	// 00000000000000000000000000001000
	// 00010000000000000000000000000000
	// 31,30,29, 28
		if(str[i] === '1'){
			result += 2 ** i
		}
	}
	return result;

}

var reverseBits = function (n) {
	let binStr = numberToBinary(n);
	if(binStr.length < 32){
		binStr = binStr.padStart(32, "0");
	}
	return binaryToNum(binStr)
};

// reverseBits(8);
console.log(reverseBits(43261596))