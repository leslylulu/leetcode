/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let i = 0;
	let j = s.length - 1;
	// const isValid = (char) => {
	// 	const code = char.toUpperCase().charCodeAt();
	// 	return (code >= 48 && code <= 57) || (code >= 65 && code <= 90)
	// }

	const isValid = (char) => {
		return /[a-zA-Z0-9]/.test(char);
	}
	while(i < j){
		if(!isValid(s[i])){
			i++;
		}else if(!isValid(s[j])){
			j--;
		}else if(s[i].toUpperCase() !== s[j].toUpperCase()){
			return false;
		}else{
			i++;
			j--;
		}
	}
	return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("0P"));
// console.log(isPalindrome("race a car"));

