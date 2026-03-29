let total = 0;

const orderList = document.getElementById("orderList");
const emptyMsg = document.querySelector(".empty-msg");
const totalPrice = document.getElementById("totalPrice");

const buttonDselect = document.getElementById("donburi");

buttonDselect.addEventListener("click", confirmDonburi);

function confirmDonburi () {
	if (scoreD === 0) return;

	const price = 5.50;
	const itemTotal = scoreD * price;

	const li = document.createElement("li")
	li.textContent = `Donburi x ${scoreD} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;

	emptyMsg.style.display = "none";
}



const buttonSselect = document.getElementById("sandwich");

buttonSselect.addEventListener("click", confirmSandwich);

function confirmSandwich () {
	if (scoreS === 0) return;

	const price = 3.50;
	const itemTotal = scoreS * price;

	const li = document.createElement("li");
	li.textContent = `Sandwich x ${scoreS} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;
	
	emptyMsg.style.display = "none"

}



const buttonOselect = document.getElementById("onigiri");

buttonOselect.addEventListener("click", confirmOnigiri);

function confirmOnigiri () {
	if (scoreO === 0) return;

	const price = 3.00;
	const itemTotal = scoreO * price;

	const li = document.createElement("li");
	li.textContent = `Onigiri x ${scoreO} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;

	emptyMsg.style.display = "none";
}



const buttonCselect = document.getElementById("salad");

buttonCselect.addEventListener("click", confirmSalad);

function confirmSalad () {
	if (scoreC === 0) return;

	const price = 4.50;
	const itemTotal = scoreC * price;

	const li = document.createElement("li");
	li.textContent = `Salad x ${scoreC} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;

	emptyMsg.style.display = "none";
}



const buttonAselect = document.getElementById("daifuku");

buttonAselect.addEventListener("click", confirmDaifuku);

function confirmDaifuku () {
	if (scoreA === 0) return;

	const price = 3.00;
	const itemTotal = scoreA * price;

	const li = document.createElement("li");
	li.textContent = `Daifuku x ${scoreA} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;

	emptyMsg.style.display = "none";
}



const buttonKselect = document.getElementById("karaage");

buttonKselect.addEventListener("click", confirmKaraage);

function confirmKaraage () {
	if (scoreK === 0) return;

	const price = 4.50;
	const itemTotal = scoreK * price;

	const li = document.createElement("li");
	li.textContent = `Karaage x ${scoreK} - $${itemTotal.toFixed(2)}`;
	orderList.appendChild(li);

	total += itemTotal;
	totalPrice.textContent = `Total: $${total.toFixed(2)}`;

	emptyMsg.style.display = "none";
}



const resetBtn = document.getElementById("resetOrder");

resetBtn.addEventListener("click", resetOrder);

function resetOrder () {
	scoreD = 0;
	scoreS = 0;
	scoreO = 0;
	scoreC = 0;
	scoreA = 0;
	scoreK = 0;

	numberD.textContent = "";
	numberS.textContent = "";
	numberO.textContent = "";
	numberC.textContent = "";
	numberA.textContent = "";
	numberK.textContent = "";

	orderList.innerHTML = "";
	total = 0;
	totalPrice.textContent = "";

	emptyMsg.style.display = "block";
}

const purchaseBtn = document.getElementById("purchaseOrder");
const purchaseMsg = document.getElementById("purchaseMsg");

purchaseBtn.addEventListener("click", purchaseOrder);

function purchaseOrder () {
	if (total === 0) {
		purchaseMsg.textContent = "You haven't made an order yet, silly!";
		purchaseMsg.style.color = "pink";

		setTimeout(() => {
			purchaseMsg.textContent = "";
		}, 3000);

		return;
	}

	purchaseMsg.textContent = "Thanks for ordering! Please enjoy!";
	purchaseMsg.style.color = "green";

	setTimeout(() => {
		purchaseMsg.textContent = "";
	}, 3000);

	scoreD = 0;
	scoreS = 0;
	scoreO = 0;
	scoreC = 0;
	scoreA = 0;
	scoreK = 0;

	numberD.textContent = "";
	numberS.textContent = "";
	numberO.textContent = "";
	numberC.textContent = "";
	numberA.textContent = "";
	numberK.textContent = "";

	orderList.innerHTML = "";
	total = 0;
	totalPrice.textContent = "";

	emptyMsg.style.display = "block";
}




let scoreD=0

const buttonD = document.getElementById("donburiPlus"); 

const numberD = document.getElementById("numberD");

 buttonD.addEventListener("click", addDonburi); 


 function addDonburi() { 

 scoreD++; // state updates 

 numberD.textContent = "Number = " + scoreD; // DOM update 

 } 


const buttonDminus = document.getElementById("donburiMinus");

buttonDminus.addEventListener("click", removeDonburi);

function removeDonburi() {
	if (scoreD > 0) {
		scoreD--;
	}
	numberD.textContent = "Number = " + scoreD
}



let scoreS=0

const buttonS = document.getElementById("sandwichPlus"); 

const numberS = document.getElementById("numberS");

 buttonS.addEventListener("click", addSandwich); 


 function addSandwich() { 

 scoreS++;

 numberS.textContent = "Number = " + scoreS;
 } 


const buttonSminus = document.getElementById("sandwichMinus");

buttonSminus.addEventListener("click", removeSandwich);

function removeSandwich() {
	if (scoreS > 0) {
		scoreS--;
	}
	numberS.textContent = "Number = " + scoreS
}



let scoreO=0

const buttonO = document.getElementById("onigiriPlus");

const numberO = document.getElementById("numberO");

	buttonO.addEventListener("click", addOnigiri);

	function addOnigiri() {
		scoreO++;
	
	numberO.textContent = "Number = " + scoreO;
	}


const buttonOminus = document.getElementById("onigiriMinus");
	buttonOminus.addEventListener("click", removeOnigiri);

	function removeOnigiri() {
		if (scoreO > 0) {
			scoreO--;
		}
		numberO.textContent = "Number = " + scoreO
	}



let scoreC=0

const buttonC = document.getElementById("saladPlus");

const numberC = document.getElementById("numberC");

	buttonC.addEventListener("click", addSalad);

	function addSalad() {
		scoreC++;

	numberC.textContent = "Number = " + scoreC;
	}


const buttonCminus = document.getElementById("saladMinus");
	buttonCminus.addEventListener("click", removeSalad);

	function removeSalad() {
		if (scoreC > 0) {
			scoreC--;
		}
		numberC.textContent = "Number = " + scoreC
	}


let scoreA=0

const buttonA = document.getElementById("daifukuPlus");

const numberA = document.getElementById("numberA");

	buttonA.addEventListener("click", addDaifuku);

	function addDaifuku () {
		scoreA++;
	
	numberA.textContent = "Number = " + scoreA
	}


const buttonAminus = document.getElementById("daifukuMinus");
	buttonAminus.addEventListener("click", removeDaifuku);

	function removeDaifuku() {
		if (scoreA > 0) {
			scoreA--;
		}
		numberA.textContent = "Number = " + scoreA
	}



let scoreK=0

const buttonK = document.getElementById("karaagePlus");

const numberK = document.getElementById("numberK");

	buttonK.addEventListener("click", addKaraage);

	function addKaraage () {
		scoreK++;
	numberK.textContent = "Number = " + scoreK;
	}


const buttonKminus = document.getElementById("karaageMinus");
	buttonKminus.addEventListener("click", removeKaraage);
	
	function removeKaraage () {
		if (scoreK > 0) {
			scoreK--;
		}
		numberK.textContent = "Number = " + scoreK
	}