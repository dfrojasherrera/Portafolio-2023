const menuMobil = document.querySelector('.mobil-menu');
const columnMenu = document.querySelector('.column-menu');


menuMobil.addEventListener('click', toggleMobileMenu);
console.log('dsdsd');

function toggleMobileMenu(){
    columnMenu.classList.toggle('inactive');
    
}