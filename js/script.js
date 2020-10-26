let button = document.querySelector('.search-heading-button');
let layer = document.querySelector('.layer');
let form = document.querySelector('.appointment-form');

let arrival = form.querySelector('.arrival-input');
let leaving = form.querySelector('.leaving-input');
let adults = form.querySelector('.adults-input');
let children = form.querySelector('.children-input');

document.addEventListener('DOMContentLoaded', function () {
		layer.classList.remove('modal-show');
		layer.classList.add('modal-close');
});

let isStorageSupport = true;
let storageAdults = '';
let storageChildren = '';

try {
	storageAdults = localStorage.getItem('adults');
	storageChildren = localStorage.getItem('children');
} 	catch (err) {
	isStorageSupport = false;
}

button.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (layer.classList.contains('modal-close')) {
		layer.classList.remove('modal-close');
		layer.classList.add('modal-show');
		arrival.focus({preventScroll:true});
	} else {
		layer.classList.remove('modal-show');
		layer.classList.add('modal-close');
	}

	if (storageAdults) {
		adults.value = storageAdults;
		children.value = storageChildren;
	}
});

form.addEventListener('submit', function (evt) {
	if (!arrival.value || !leaving.value || !adults.value || !children.value) {
		evt.preventDefault();
		form.classList.remove('modal-error');
		form.offsetWidth = form.offsetWidth;
		form.classList.add('modal-error');
	} else {
		localStorage.setItem('adults', adults.value);
		localStorage.setItem('children', children.value);
	}
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (layer.classList.contains('modal-show')) {
      evt.preventDefault();
      layer.classList.remove('modal-show');
      layer.classList.add('modal-close');
    }
  }
});