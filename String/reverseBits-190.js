/**
 * 190. Reverse Bits
Easy

Reverse bits of a given 32 bits signed integer.

Example 1:
Input: n = 43261596
Output: 964176192
Explanation:
Integer	Binary
43261596	00000010100101000001111010011100
964176192	00111001011110000010100101000000

Example 2:
Input: n = 2147483644
Output: 1073741822
Explanation:
Integer	Binary
2147483644	01111111111111111111111111111100
1073741822	00111111111111111111111111111110

Constraints:
0 <= n <= 231 - 2
n is even. //*偶数

Follow up: If this function is called many times, how would you optimize it?


 */
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