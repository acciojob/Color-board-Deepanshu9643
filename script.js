//your JS code here. If required.
const container = document.querySelector(".container");
for(let i=0; i<800; i++){
	const square = document.createElement("div")
	square.classList.add("square")
	square.addEventListener(`mouseover`, ()=>{
		const color = `#${Math.floor(Math.random()*16777215).toString(16)}`
		        square.style.backgroundColor = color 
	})
							square.addEventListener("mouseout",()=>{
		setTimeout(()=>{
			square.style.backgroundColor = "rgb(29, 29, 29)"
		}, 800)
	})
	
	container.appendChild(square)
}