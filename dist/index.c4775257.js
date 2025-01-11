// Создаем стиль для сообщения
let style = `
  font-size: 28px;
  font-weight: bold;
  color:rgb(71, 222, 76);
  text-shadow: 1px 1px black;
  padding: 10px;
`;
// Выводим сообщение в консоль
console.log("%c\u0421\u0430\u0439\u0442 \u0441\u043E\u0437\u0434\u0430\u043D \u043A\u043E\u043C\u0430\u043D\u0434\u043D\u043E\u0439 \u041C\u041D\u0414(\u041C\u0438\u043D\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u043D\u0435\u0434\u0436\u0435\u043D\u0442\u0435\u043B\u044C\u043C\u0435\u043D\u0441\u043A\u0438\u0445 \u0434\u0435\u043B)", style);
// Изменяем стиль для сообщения
style = `
  font-size: 28px;
  font-weight: bold;
  color: #404eed;
  text-shadow: 1px 1px black;
  padding: 10px;
`;
console.log("%c\u0421\u043E\u043B\u043E\u0432\u0435\u0439 \u041C\u0438\u0445\u0430\u0438\u043B \u0410\u043B\u0435\u043A\u0441\u0435\u0435\u0432\u0438\u0447", style);
console.log("%c\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u0428\u043A\u043E\u043B\u044C\u043D\u044B\u0439 \u0414\u0435\u043D\u0438\u0441\u043E\u0432\u0438\u0447", style);
console.log("%c\u0422\u0440\u0435\u0433\u0443\u0431\u043E\u0432 \u041E\u043B\u0435\u0433 \u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u0438\u043D\u043E\u0432\u0438\u0447", style);
console.log("%c\u0410\u0440\u043B\u0430\u043D \u0413\u0430\u0431\u0434\u044B\u043B\u0445\u0430\u043A \u0413\u0430\u0431\u0434\u044B\u043B\u0445\u0430\u043A\u043E\u0432\u0438\u0447(\u0442\u0440\u0435\u043D\u0435\u0440)", style);
// Дополнительно можно предупредить о возможных последствиях, если это нужно
console.log("%c\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435! \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043A\u043E\u0434\u0430 \u0432 \u043A\u043E\u043D\u0441\u043E\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043A \u043D\u0435\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 \u0438\u043B\u0438 \u043A \u043F\u043E\u0442\u0435\u0440\u0435 \u0434\u0430\u043D\u043D\u044B\u0445.", 'color: red; font-size: 14px;');
// Элементы
const modal = document.getElementById('modal');
const openModalButtons = document.querySelectorAll('.modal__opener');
const closeModalBtn = document.querySelector('.close-button');
const sideBar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('sidebar__open-button');
const closeSidebarBtn = document.querySelector('.sidebar__close-button');
// Функция открытия модального окна
function openModal() {
    // Блокируем прокрутку
    document.body.classList.add('modal--opened');
    // Показываем модальное окно
    modal.style.display = 'flex';
    // Небольшая задержка для корректной анимации
    setTimeout(()=>{
        modal.classList.add('modal--show');
    }, 10);
}
function closeModal() {
    // Разблокировка прокрутки
    document.body.classList.remove('modal--opened');
    // Убираем класс показа
    modal.classList.remove('modal--show');
    // Скрываем модальное окно
    setTimeout(()=>{
        modal.style.display = 'none';
    }, 300);
}
// Функция открытия бокового меню
function openSidebar() {
    // Блокируем прокрутку
    document.body.classList.add('sidebar--opened');
    // Показываем боковое меню
    sideBar.style.display = 'flex';
    setTimeout(()=>{
        sideBar.classList.add('sidebar--show');
    }, 10);
}
function closeSidebar() {
    // Разблокировка прокрутки
    document.body.classList.remove('sidebar--opened');
    // Убираем класс показа
    sideBar.classList.remove('sidebar--show');
    // Скрываем модальное окно
    setTimeout(()=>{
        sideBar.style.display = 'none';
    }, 300);
}
// Открытие модального окна
openModalButtons.forEach((button)=>{
    button.addEventListener('click', openModal);
});
// Закрытие модального окна при нажатие на крестик
closeModalBtn.addEventListener('click', closeModal);
// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target == modal) closeModal();
});
openSidebarBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
window.addEventListener('click', function(event) {
    if (event.target == sideBar) closeSidebar();
});
window.addEventListener('keydown', function(event) {
    if (event.key == 'Escape' && modal.classList.contains('modal--show')) closeModal();
    if (event.key == 'Escape' && sideBar.classList.contains('sidebar--show')) closeSidebar();
});

//# sourceMappingURL=index.c4775257.js.map
