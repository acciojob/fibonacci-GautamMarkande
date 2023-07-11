function fibonacci(num) {
// your code here
	let prev=0, prev2=1;
	let curr = 0;
	for(let i = 2; i<=num; i++){
		curr = prev + prev2;
		prev = prev2;
		prev2 = curr;
	}
	//console.log(prev2);
	return prev2;
}

module.exports = fibonacci;
