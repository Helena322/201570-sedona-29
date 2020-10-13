let button = document.querySelector('.search-heading-button');
let layer = document.querySelector('.layer');
button.onclick = function() {
	layer.classList.toggle('modal-close');
	layer.classList.toggle('modal-show');
}