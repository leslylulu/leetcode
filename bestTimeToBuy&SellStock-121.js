/**
 * 121. Best Time to Buy and Sell Stock
Easy
Topics
premium lock icon
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

// IDEA solution one ❌❌❌
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit0 = function (prices) {
	let maxProfit = 0;
	for(let i = 0; i <= prices.length; i++){
		for(let j = i+1; j <= prices.length; j++){
			if(prices[j] - prices[i] > maxProfit){
				maxProfit = prices[j] - prices[i];
			}
		}
	}

	return maxProfit;
};

// COMMENT solution 2 ✅

var maxProfit = function (prices) {
	let minmun = Infinity;
	let maxProfit = 0;
	prices.forEach(element => {
		minmun = Math.min(element, minmun);
		console.log('element =', element, ',  minmun =', minmun);
		maxProfit = Math.max(element - minmun, maxProfit);
		console.log('maxProfit: ', maxProfit, ', element - minmun :', element - minmun);
	});

	return maxProfit;
};


// let profit = maxProfit([7, 1, 5, 3, 6, 4])
// console.log('profit === ', profit);

// let profit2 = maxProfit([7, 6, 5, 4, 2, 1])
// console.log('profit === ', profit2);

// let profit = maxProfit([7, 12, 5, 36, 6, 4])
// console.log('profit === ', profit);


// let profit = maxProfit([8, 10, 2, 6, 104, 1, 7, 120, 16, 6])
// console.log('profit === ', profit);




// COMMENT solution 3 ✅✅✅

function maxProfit2(prices) {
	let toBuy = 0;
	let maxP = 0;

	for (let i = 1; i < prices.length; i++) {
		console.log('tobuy =', toBuy, ', num = ', prices[i]);
		if (prices[toBuy] < prices[i]) {
			if (prices[i] - prices[toBuy] > maxP) {
				// only minimum price is updated, the maximum profit is updated
				maxP = prices[i] - prices[toBuy];
			}
		} else toBuy = i;
	}

	return maxP;
}

let profit2 = maxProfit2([8, 10, 2, 6, 104, 1, 7, 10, 16, 6])
console.log('profit2 === ', profit2);

