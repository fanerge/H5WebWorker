onmessage = function(e) {
	let num1 = e.data;
	let num2 = 0;
	console.time('time')
	for(let i = 0; i < num1; i++){
		num2 += i;
	}
	console.timeEnd('time')
	
	console.log(`${num2}worker.js`)
	
	// 当我们计算出结果，应该回传
	postMessage(num2);
	// 在Worker中终止自身
	//close();
}
