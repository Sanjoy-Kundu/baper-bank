document.getElementById("deposit-button").addEventListener("click", function () {
	const depositInput = document.getElementById("deposit-input");
	const depositOutput = document.getElementById("deposit-output");
	const balanceOutput = document.getElementById("balance-output")

	/*deposit output er moddey input er value rakbo tar sathe sathe 
		ager je deposit ouput er je value cilo tar sathe deposit input er value jog korbo.
		*/
	depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositInput.value);

	/* balance er khetre 
		first er balance er output  er text ta nibo and sei text er sathe deposit input er value jog korbo
	*/
	balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositInput.value);

	//clean deposit input value 
	depositInput.value = " ";
})




//withdraw button er khetre 
document.getElementById("withdraw-button").addEventListener("click", function () {
	const withdrawInput = document.getElementById("withdraw-input");
	const withdrawOutput = document.getElementById("withdraw-output");
	const balanceOutput = document.getElementById("balance-output");



	/*
withdraw output ta hobe ki??
withdrawoutput er je innerText ace tar sathe withdeawinput er je value ace seti jog 

balance er jonno 
balance output ti hobe balance output er innertext theke withdrawinput er value bioyeg
	*/
	withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + parseFloat(withdrawInput.value);

	balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawInput.value);


})

