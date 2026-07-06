/**
 * 191. Number of 1 Bits
Easy

Given a positive integer n, write a function that returns the number of 
set bits in its binary representation (also known as the Hamming weight).


Example 1:
Input: n = 11
Output: 3
Explanation:
The input binary string 1011 has a total of three set bits.

Example 2:
Input: n = 128
Output: 1
Explanation:
The input binary string 10000000 has a total of one set bit.

Example 3:
Input: n = 2147483645
Output: 30
Explanation:
The input binary string 1111111111111111111111111111101 has a total of thirty set bits.


Constraints:
1 <= n <= 231 - 1
Follow up: If this function is called many times, how would you optimize it?
 */
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