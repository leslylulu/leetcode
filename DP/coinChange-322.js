/**
 * 322. Coin Change
Medium

You are given an integer array coins representing coins of different denominations 
and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {

	// We use a table instead of plain recursion because recursion alone
	// would recalculate the same sub-amounts over and over.
	// Storing results here means we only solve each sub-amount once.
	const coinCountTable = new Array(amount + 1).fill(Infinity);

	// Base case: making $0 requires 0 coins.
	// Every other sub-amount depends on this starting point.
	coinCountTable[0] = 0;
	// Outer loop: go through each amount from $1 up to the target.
	// We build the answer bottom-up so smaller results are ready
	// before we need them.
	for (let i = 1; i <= amount; i++) {

		// Inner loop: try every coin denomination as the one we just used
		// to reach amount i. We pick whichever gives the smallest total.
		for (const coin of coins) {
			// Skip this coin if it's worth more than the current amount —
			// that would leave a negative remainder, which doesn't exist.
			if (i - coin >= 0) {
				// If we used this coin, the remainder is (i - coin).
				// That remainder's best answer is already stored in the table.
				// Add 1 for the coin we just used, then keep the smaller result.
				coinCountTable[i] = Math.min(coinCountTable[i], coinCountTable[i - coin] + 1);
			}
		}
	}

	// If coinCountTable[amount] is still Infinity, no combination of coins
	// can make this amount — return -1 as the problem requires.
	console.log('coinCountTable == ', coinCountTable);
	return coinCountTable[amount] === Infinity ? -1 : coinCountTable[amount];

};

console.log(coinChange([1, 2, 5], 11));

/**
coinCountTable[0]  = 0  → make $0,  need 0 coins
coinCountTable[1]  = 1  → make $1,  need 1 coin   (1)
coinCountTable[2]  = 1  → make $2,  need 1 coin   (2)
coinCountTable[3]  = 2  → make $3,  need 2 coins  (1+2)
coinCountTable[4]  = 2  → make $4,  need 2 coins  (2+2)
coinCountTable[5]  = 1  → make $5,  need 1 coin   (5)
coinCountTable[6]  = 2  → make $6,  need 2 coins  (1+5)
coinCountTable[7]  = 2  → make $7,  need 2 coins  (2+5)
coinCountTable[8]  = 3  → make $8,  need 3 coins  (1+2+5)
coinCountTable[9]  = 3  → make $9,  need 3 coins  (2+2+5)
coinCountTable[10] = 2  → make $10, need 2 coins  (5+5)
coinCountTable[11] = 3  → make $11, need 3 coins  (1+5+5)
 */