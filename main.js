let wrapper = document.querySelector('.wrapper');
let btns = document.querySelectorAll('button');
let labelGray = document.querySelector('.choice-color_gray');
let labelKhaki = document.querySelector('.choice-color_khaki');
let labelPalegreen = document.querySelector('.choice-color_palegreen');
let labelPlum = document.querySelector('.choice-color_plum');
let labelBlack = document.querySelector('.choice-color_black');

let input = document.getElementById('input');

let flag = 0, operand1, operand2, comma = 0;

input.value = '';

function clearInput() {
	input.value = '';
	input.placeholder = '';
	input.autofocus = true;
	flag = 0;
	operand1 = 0;
	operand2 = 0;
	comma = 0; 
}

function addDigit(elem) {
	input.value += String(elem.innerHTML); 
	if (input.value.length > 12) {
		input.value = 'TOO LONG !!!';
		return;
	}
}

function addComma() {
	if (comma == 0) {
		input.value += '.';
		comma = 1;
	}
}

function getSign(elem) {
	if (flag == 0) {
		operand2 = input.value;
		//console.log(operand2);
		input.placeholder = input.value;
		input.value = '';
		input.autofocus = true;
	} else { 
		getResult();
		operand2 = input.value;
		input.placeholder = input.value;
		input.value = '';
		input.autofocus = true;
	}
	switch (elem.innerHTML) {
		case '+': flag = 1; break;
		case '-': flag = 2; break;
		case '*': flag = 3; break;
		case '/': flag = 4; break;
	}
	
	comma = 0; 
	//console.log(flag);
}

function getResult() {
	operand1 = operand2;
	operand2 = input.value;
	input.placeholder = input.value;
	input.value = '';
	input.autofocus = true;

	switch (flag) {
		case 1: input.value = String(parseFloat(operand1, 10) + parseFloat(operand2, 10)); break;
		case 2: input.value = String(parseFloat(operand1, 10) - parseFloat(operand2, 10)); break;
		case 3: input.value = String(parseFloat(operand1, 10) * parseFloat(operand2, 10)); break;
		case 4: input.value = String(parseFloat(operand1, 10) / parseFloat(operand2, 10)); break;
	}
		
	//console.log(operand1);
	//console.log(operand2);
	//console.log(flag);

	comma = 0; 
	flag = 0;
}


function chooseGray() {
	wrapper.style.backgroundColor = 'lightgray';
	btns.forEach(function(elem) {elem.style.backgroundColor = '#bebebe';
								elem.style.color = 'black';})
	labelGray.style.borderColor = 'lightgray';
	labelBlack.style.borderColor = '#f5f5f5';
	labelPlum.style.borderColor = '#f5f5f5';
	labelPalegreen.style.borderColor = '#f5f5f5';
	labelKhaki.style.borderColor = '#f5f5f5';
}

function chooseKhaki() {
	wrapper.style.backgroundColor = 'khaki';
	btns.forEach(function(elem) {elem.style.backgroundColor = '#D8CF7E';
								elem.style.color = 'black';})
	labelGray.style.borderColor = '#f5f5f5';
	labelBlack.style.borderColor = '#f5f5f5';
	labelPlum.style.borderColor = '#f5f5f5';
	labelPalegreen.style.borderColor = '#f5f5f5';
	labelKhaki.style.borderColor = 'khaki';
}

function choosePalegreen() {
	wrapper.style.backgroundColor = '#CCFDCC';
	btns.forEach(function(elem) {elem.style.backgroundColor = '#B8E4B8';
								elem.style.color = 'black';})
	labelGray.style.borderColor = '#f5f5f5';
	labelBlack.style.borderColor = '#f5f5f5';
	labelPlum.style.borderColor = '#f5f5f5';
	labelPalegreen.style.borderColor = '#CCFDCC';
	labelKhaki.style.borderColor = '#f5f5f5';
}

function choosePlum() {
	wrapper.style.backgroundColor = '#E7BDE7';
	btns.forEach(function(elem) {elem.style.backgroundColor = '#D0AAD0';
								elem.style.color = 'black';})
	labelGray.style.borderColor = '#f5f5f5';
	labelBlack.style.borderColor = '#f5f5f5';
	labelPlum.style.borderColor = '#E7BDE7';
	labelPalegreen.style.borderColor = '#f5f5f5';
	labelKhaki.style.borderColor = '#f5f5f5';
}

function chooseBlack() {
	wrapper.style.backgroundColor = '#1A1A1A';
	btns.forEach(function(elem) {elem.style.backgroundColor = 'black';
								elem.style.color = 'white';})
	labelGray.style.borderColor = '#f5f5f5';
	labelBlack.style.borderColor = '#1A1A1A';
	labelPlum.style.borderColor = '#f5f5f5';
	labelPalegreen.style.borderColor = '#f5f5f5';
	labelKhaki.style.borderColor = '#f5f5f5';
}
