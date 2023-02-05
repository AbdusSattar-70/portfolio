/* eslint-disable linebreak-style */
const logoCon = document.querySelector('.logo-container');
const hamImg = document.querySelector('#hamImg');
const crossImg = document.querySelector('#crossImg');
const mobMenu = document.querySelector('.mobile-menu');

const menu = () => {
  logoCon.style.display = 'none';
  hamImg.style.display = 'none';
  mobMenu.style.display = 'flex';
};

const menuNone = () => {
  mobMenu.style.display = 'none';
  logoCon.style.display = 'flex';
  hamImg.style.display = 'flex';
};

hamImg.addEventListener('click', menu);
crossImg.addEventListener('click', menuNone);
mobMenu.addEventListener('click', menuNone);
