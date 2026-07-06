// how many ways to climb to the top

// n = 1: [1] = 1
// n = 2: [1,1], [2] = 2
// n=3: 
// last step = 1, fn(2)= 2
// last step = 2, fn(1) = 1
// 2+1 = 3

// n = 4:
// last step = 1, fn(3)= 3
// last step = 2, fn(2) = 2
// 3+2 = 5



// ** 问题在哪里？**
// n=44 的时候，你的代码重复计算了很多次同样的东西：
/**
 * f(44) = f(43) + f(42)
	f(43) = f(42) + f(41)  // f(42) 算了两次！
	f(42) = f(41) + f(40)  // f(41) 算了很多次！
	像一棵疯狂生长的树，越来越大，n = 44 要算几十亿次！
 */

function climbStairs(n){
	if (n === 1) return 1;
	if (n === 2) return 2;

	let fn1 = 1; // last step = 1
	let fn2 = 2; // last step = 2

	for (let i = 3; i <= n; i++) {
		let current = fn2 + fn1;
		fn1 = fn2;
		fn2 = current;
		console.log(`i: ${i}, current: ${current}, fn1: ${fn1}, fn2: ${fn2}`);
	}

	return fn2;
};


climbStairs(12);