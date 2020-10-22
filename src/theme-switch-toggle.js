const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
//localStorage.clear();
switcher.addEventListener('change', onSwitcherChange);

console.log('При входе:', localStorage.getItem('theme'));
console.log('При входе:', switcher.checked);

if (localStorage.getItem('theme') !== 'dark-theme') {
  body.classList.add(Theme.LIGHT);
} else {
  body.classList.add(Theme.DARK);
  switcher.checked = true;
}

function onSwitcherChange() {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);

  localStorage.setItem('theme', body.classList.value);
    console.log('Переключение:', localStorage.getItem('theme'));
    console.log('Переключение:', switcher.checked);

  return localStorage.getItem('theme');
 };

 /*Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

По умолчанию тема светлая.
При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true, чтобы ползунок сдвинулся в правильное положение.
Для удобства хранения списка тем используй такое перечисление. */