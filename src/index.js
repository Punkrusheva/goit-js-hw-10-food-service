import './css/styles.css';
import './theme-switch-toggle';
import './menu.json';
import menuItem from './templates/menu-item.hbs';
import dishes from './menu.json'

//console.log(menuItem(dishes));

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(dishes);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createMenuCardsMarkup(dishes) {
    return dishes.map(dish => menuItem(dish)).join('');
}