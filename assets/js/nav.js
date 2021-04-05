
const burgerMenu = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', () => {
  const active = (menu.style.display === 'block');

  if (active) {
    menu.style.display = 'none';
    burgerMenu.className = '';
  } else {
    menu.style.display = 'block';
    burgerMenu.className = 'active';
  }
});
