const burgerMenu = document.querySelector('.header__burger');
const burgerButton = document.querySelector('.header__burger-button');
const burgerList = document.querySelector('.header__burger-list');

burgerButton.addEventListener('click', () => {
	burgerMenu.classList.toggle('open');
	burgerList.classList.toggle('open');
});


const callButton = document.querySelector('#politica');
const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');
const closeButton = popup.querySelector('.popup__close');

popupToggle = () => {
  popup.classList.toggle('popup_opened');
}

closeOnBlack = (event) => {
  if (event.target === event.currentTarget) popupToggle();
}

callButton.addEventListener('click', popupToggle);
closeButton.addEventListener('click', popupToggle);
popup.addEventListener('click', closeOnBlack);
popupContainer.addEventListener('click', closeOnBlack);
