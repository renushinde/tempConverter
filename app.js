let fahrInput = document.getElementById('fahr');
let celcInput = document.getElementById("celc");
let kelvinInput = document.getElementById("kelvin");

function roundNum (number) {
	return Math.round(number * 100) / 100;
}

function celciusToFahrenheitAndKelvin (){
	let cTemp = parseFloat(celcInput.value);
	let fTemp =(cTemp * (9/5) + 32);
	let kTemp = cTemp + 273.15;
	fahrInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
	let fTemp = parseFloat(fahrInput.value);
	/*console.log(fTemp);*/
	let cTemp = (fTemp -32) * (5/9);
	let kTemp = (fTemp + 459.67) * 5/9;
	celcInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}

function kelvinToFahrenheitAndCelcius (){
	let kTemp =parseFloat(kelvinInput. value);
	let cTemp = kTemp - 273.15;
	let fTemp = 9/5 * (kTemp - 273) +32;
	celcInput.value = roundNum(cTemp);
	fahrInput.value = roundNum(fTemp);
}
function main () {
	celcInput.addEventListener("input", celciusToFahrenheitAndKelvin);
fahrInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener("input" , kelvinToFahrenheitAndCelcius);
}

main();