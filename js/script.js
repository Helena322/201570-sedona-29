let button = document.querySelector('.search-heading-button');
let layer = document.querySelector('.layer');
let form = document.querySelector('.appointment-form');

let arrival = form.querySelector('.arrival-input');
let leaving = form.querySelector('.leaving-input');
let adults = form.querySelector('.adults-input');
let children = form.querySelector('.children-input');

let isStorageSupport = true;
let storage = "";
let storage2 = "";

try {
	storage = localStorage.getItem("adults");
	storage2 = localStorage.getItem("children");
} 	catch (err) {
	isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (layer.classList.contains("modal-close")) {
		layer.classList.remove('modal-close');
		layer.classList.add('modal-show');
		arrival.focus();
	} else {
		layer.classList.remove('modal-show');
		layer.classList.add('modal-close');
	}

	if (storage) {
		adults.value = storage;
		children.value = storage2;
	}
});

form.addEventListener("submit", function (evt) {
	if (!arrival.value || !leaving.value || !adults.value || !children.value) {
		evt.preventDefault();
		if (!arrival.value) {
		arrival.classList.remove("modal-error");
		form.offsetWidth = form.offsetWidth;
		arrival.classList.add("modal-error");
		}
		if (!leaving.value) {
		leaving.classList.remove("modal-error");
		form.offsetWidth = form.offsetWidth;
		leaving.classList.add("modal-error");
		}
		if (!adults.value) {
		adults.classList.remove("modal-error");
		form.offsetWidth = form.offsetWidth;
		adults.classList.add("modal-error");
		}
		if (!children.value) {
		children.classList.remove("modal-error");
		form.offsetWidth = form.offsetWidth;
		children.classList.add("modal-error");
		}
	} else {
		localStorage.setItem("adults", adults.value);
		localStorage.setItem("children", children.value);
	}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (layer.classList.contains("modal-show")) {
      evt.preventDefault();
      layer.classList.remove("modal-show");
      layer.classList.add('modal-close');
    }
  }
});

/*button.onclick = function() {
	layer.classList.toggle('modal-close');
	layer.classList.toggle('modal-show');
}*/