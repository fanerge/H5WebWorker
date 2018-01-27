let myWorker
if(window.Worker){
	// todo
	myWorker = new Worker('./js/worker.js')
} else {
	// 不支持web Worker
	alert('不支持web Worker')
}
let app = new Vue({
  el: '#app',
  data: {
    num: 1000000,
  },
  methods: {
	computed () {
		console.log(`Message posted to worker=${this.num}`);
		myWorker.postMessage(this.num)
		// 在主线程中终止Worker
		// myWorker.terminate();
	}  
  }
})

myWorker.onmessage = (e) => {
	console.log(e.data+'main.js')	
}







