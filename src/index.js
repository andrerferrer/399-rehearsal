// select element
const btn = document.querySelector("button#click-me");

// add event listener
btn.addEventListener('click', (event) => {
	// run the callback
	const currentTarget = event.currentTarget;
	currentTarget.innerText = "Warten Sie bitte...";
	currentTarget.setAttribute("disabled","true");
});

