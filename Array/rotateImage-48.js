/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 48. Rotate Image

/**
 * ! You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
 * ! DO NOT allocate another 2D matrix and do the rotation.

 */

var rotate1 = function(matrix) {
	const n = matrix.length;
	for(let i = 0; i < Math.floor(n/2); i++) {
		for(let j = i; j < n - 1 - i; j++){
			let temp = matrix[i][j]; // temp = (1) [0,0]
			matrix[i][j] = matrix[n - 1 - j][i]; // [0,0](1) = (7) [2,0]
			matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j]; // [2,0](7) = [2 , 2] (9)
			matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i]; // [2 , 2] (9) = (3) [0, 2]
			matrix[j][n - 1 - i] = temp; //   (3) [0, 2] = temp  (1) [0,0]
		}

	}
	console.log(matrix);
};

var rotate = function(matrix){
	const n = matrix.length;

	for(let i = 0; i < n; i++){
		for(let j = i + 1; j < n; j++){
			// on flip the diagonal, we swap the element at (i, j) with the element at (j, i)
			let temp = matrix[i][j];
			console.log('temp === ', temp, i, j);
			matrix[i][j] = matrix[j][i];
			matrix[j][i] = temp;
		}
	}

	for(let item of matrix){
		// console.log(item);
		item = item.reverse();
	}
	console.log(matrix);
}

rotate([[1,2,3],[4,5,6],[7,8,9]]); // [[7,4,1],[8,5,2],[9,6,3]]
// rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]);