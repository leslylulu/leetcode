/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths1 = function (m, n) {

	let results = []
	results[0] = new Array(m).fill(1);
	// console.log(results);

	for(let j = 1; j < n; j++){
		let row = [];
		for(let i = 0; i < m; i++ ){
			let top = j - 1 < 0 ? 0 : results[j - 1][i];
			let left = i - 1 < 0 ? 0 : row[i - 1];
			row[i] = top + left;
			console.log(`row ${i} = ${row[i]}, top=${top}, left=${left}`)
		}
		results.push(row);
	}
	console.log(results)
	return results[n-1][m-1]
};

var uniquePaths2 = function(m, n){
	const results = [];
	results[0] = new Array(m).fill(1);

	for (let row = 1; row < n; row++){
		const rowArray = [];
		
		for(let col = 0; col < m; col++){
			let top = row - 1 < 0 ? 0 : results[row - 1][col];
			let left = col - 1 < 0 ? 0 : rowArray[col - 1];
			rowArray[col] = left + top;
		}
		results[row] = rowArray
	}
	console.log(results)
	return results[n-1][m-1]
}

var uniquePaths = function(m, n){
	let table = new Array(m).fill(1);
	for(let row = 1; row < n; row++){
		for(let col = 1; col < m; col++){
			table[col] = table[col] + table[col - 1];
		}
		console.log(table)
	}
	// console.log(table)
	return table[m-1];
}


// console.log(uniquePaths(3, 2))
// console.log(uniquePaths(3, 3))
console.log(uniquePaths(3, 7))


