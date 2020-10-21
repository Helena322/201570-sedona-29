let button = document.querySelector('.search-heading-button');
let layer = document.querySelector('.layer');
let form = document.querySelector('.appointment-form');

let arrival = document.querySelector('.arrival-input');
let leaving = document.querySelector('.leaving-input');
let adults = document.querySelector('.adults-input');
let children = document.querySelector('.children-input');

let isStorageSupport = true;
let storage = "";

try {
	storage = localStorage.getItem("adults");
} 	catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (layer != ('modal-show')) {
		layer.classList.toggle('modal-close');
	}

	if (storage) {
		adults.value = storage;
		children.value = storage;
	}

	arrival.focus();
});

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (layer != ('modal-close')) {
		layer.classList.toggle('modal-show');
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !leaving.value || !adults.value || !children.value) {
		evt.preventDefault();
		form.classList.add("modal-error");
	} else {
		form.classList.remove("modal-error");
	}

	if (isStorageSupport) {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
	}
});

/*button.onclick = function() {
	layer.classList.toggle('modal-close');
	layer.classList.toggle('modal-show');
}*/