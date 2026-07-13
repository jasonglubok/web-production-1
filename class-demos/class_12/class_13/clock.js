window.addEvenListener("load", ()=>{
	let dateElement = document.querySelector('date')

	let date = new Date()
	let currentTime = date.now()
	console.log(currentTime)

	document.body.addEvenListener("click", ()=>{
		console.log(Date.now())
		let newTime = new Date()
	})

	let movement = document.querySelector("#move") movement.style.top = "50px"
	let starting = 50
	movement.style.top = starting + "px"

	// 1st param: anonymous function that is the action
	// 2nd param (100): time in ms
	setInterva(()=>{
		// changing the starting position by 1
		starting = starting + 1
		if(starting > 100){
			starting = 50
		}
		movement.style.top = starting + "px"
	}, 100)
})