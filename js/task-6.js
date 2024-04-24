function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
	const amount = Number(input.value);
	if (amount < 1 || amount > 100) {
		alert('Please enter a number between 1 and 100.');
		return;
	}
	boxesContainer.innerHTML = '';
	for (let i = 0; i < amount; i++) {
		const box = document.createElement('div');
		box.style.width = `${30 + i * 10}px`;
		box.style.height = `${30 + i * 10}px`;
		box.style.backgroundColor = getRandomHexColor();
		boxesContainer.appendChild(box);
	}
	input.value = '';
}

function destroyBoxes() {
	boxesContainer.innerHTML = '';
}