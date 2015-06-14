window.addEventListener('DOMContentLoaded', function () {
	//When the page structure is loaded...
	// find the element weight
	var weightInput = document.querySelector('.weight input');
	var weightInfo = document.querySelector('.weight span');
	var heightInput = document.querySelector('.height input');
	var heightInfo = document.querySelector('.height span');
	weightInput.addEventListener( 'input', function (event) {
		console.log(event.target.value);
		weightInfo.textContent = event.target.value;
	//  var weightInput.innHTML
	});
	// attach listener
	// read the value of the input
	var heightInput = document.querySelector('.weight input');
	heightInput.addEventListener( 'input', function (event) {
		console.log(event.target.value);
		heightInput.textContent = event.target.value;
	//  var weightInput.innHTML
	});
});

