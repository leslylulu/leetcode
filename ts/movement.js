function canTravelTo(gameMatrix , fromRow, fromColumn, toRow, toColumn) {
	// Write your code here

	// out of the border return false
	if (toRow < 0 || toRow >= gameMatrix.length || toColumn < 0 || toColumn >= gameMatrix[0].length) {
		return false;
	}

	// only direct path not turn
	// is it in the same line? not return false
	if (fromRow !== toRow && fromColumn !== toColumn) {
		return false;
	}

	// if the the destination is land return false;
	if (!gameMatrix[toRow]?.[toColumn]) {
		return false;
	}

	if (fromRow == toRow) {
		for (let i = fromColumn; i < toColumn; i++) {
			if (!gameMatrix[toRow][i]) {
				return false
			}
		}
	} else {
		for (let i = fromRow; i < toRow; i++) {
			if (!gameMatrix[i][toColumn]) {
				return false
			}
		}
	}


	return true;
}

const gameMatrix = [
	[false, true, true, false, false, false],
	[true, true, true, false, false, false],
	[true, true, true, true, true, true],
	[false, true, true, false, true, true],
	[false, true, true, true, false, true],
	[false, false, false, false, false, false],
];

console.log(canTravelTo(gameMatrix, 3, 2, 2, 2)); // true, Valid move
console.log(canTravelTo(gameMatrix, 3, 2, 3, 4)); // false, Can't travel through land
console.log(canTravelTo(gameMatrix, 3, 2, 6, 2)); // false, Out of bounds