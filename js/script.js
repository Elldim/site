// Обработчик событий нажатия на кнопку "Каталог" + функция при нажатии в другое пространство - меню закрывается

const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
  const parentLink = submenu.previousElementSibling;

  parentLink.addEventListener('click', e => {
    e.preventDefault();

    submenus.forEach(otherSubmenu => {
      if (otherSubmenu !== submenu) {
        otherSubmenu.classList.remove('active');
      }
    });

    submenu.classList.toggle('active');
  });

  document.addEventListener('click', e => {
    const isClickInside = parentLink.contains(e.target) || submenu.contains(e.target);
    
    if (!isClickInside) {
      submenu.classList.remove('active');
      houseCottageSubMenu.classList.remove('active');
      apartmentSubMenu.classList.remove('active');
    }
  });
});

// Подраздел "Квартиры" в выпадающем меню
var apartments = document.querySelector('.submenu-list-left li:first-child a');
var apartmentSubMenu = document.querySelector('.submenu-list-apartament');

apartments.addEventListener('click', function(e) {
  houseCottageSubMenu.classList.remove('active');
  e.preventDefault();

  apartmentSubMenu.classList.add('active');
});

// Подраздел "Дома и коттеджи" в выпадающем меню

var houseCottage = document.querySelector('.submenu-list-left li:nth-child(2) a');
var houseCottageSubMenu = document.querySelector('.submenu-list-house__cottage');

houseCottage.addEventListener('click', function(e) {
  apartmentSubMenu.classList.remove('active');
  e.preventDefault();

  houseCottageSubMenu.classList.add('active');
});

// Открытие модального окна регистрации

document.getElementById("open-modal-reg-btn").addEventListener('click', function() {
  var modalLog = document.getElementById('modal-window-log');
  if (modalLog.classList.contains('open')) {
    modalLog.classList.remove('open');
    document.body.style.overflow = "";
  }
  
  document.getElementById('modal-window-reg').classList.add("open");
  document.body.style.overflow = "hidden";
});

document.querySelector("#modal-window-reg .modal-reg-box").addEventListener('click', event => {
  event._isClickWithInModalReg = true;
});

document.getElementById("modal-window-reg").addEventListener('click', event => {
  if (event._isClickWithInModalReg) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = "";
});

// Открытие модального окна авторизации

document.getElementById("open-modal-log-btn").addEventListener('click', function() {
  // Закрыть окно регистрации, если оно открыто
  var modalReg = document.getElementById('modal-window-reg');
  if (modalReg.classList.contains('open')) {
    modalReg.classList.remove('open');
    document.body.style.overflow = "";
  }
  
  document.getElementById('modal-window-log').classList.add("open");
  document.body.style.overflow = "hidden";
});

document.querySelector("#modal-window-log .modal-log-box").addEventListener('click', event => {
  event._isClickWithInModalLog = true;
});

document.getElementById("modal-window-log").addEventListener('click', event => {
  if (event._isClickWithInModalLog) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = "";
});

// Открытие модального окна регистрации в модальном окне "Авторизация"

document.getElementById("open-modal-registration-btn").addEventListener('click', function() {
  var modalLog = document.getElementById('modal-window-log');
  if (modalLog.classList.contains('open')) {
    modalLog.classList.remove('open');
    document.body.style.overflow = "";
  }
  document.getElementById('modal-window-reg').classList.add("open");
  document.body.style.overflow = "hidden";
});

// Открытие модального окна "восстановление пароля"
document.getElementById("open-modal-reset_pass-btn").addEventListener('click', function() {
  var modalLog = document.getElementById('modal-window-log');
  if (modalLog.classList.contains('open')) {
    modalLog.classList.remove('open');
    document.body.style.overflow = "";
  }

  document.getElementById('modal-window-reset_pass').classList.add("open");
  document.body.style.overflow = "hidden";
});

document.querySelector("#modal-window-reset_pass .modal-reset_pass-box").addEventListener('click', event => {
  event._isClickWithInModalResetPass = true;
});

document.getElementById("modal-window-reset_pass").addEventListener('click', event => {
  if (event._isClickWithInModalResetPass) return;
  event.currentTarget.classList.remove('open');
  document.body.style.overflow = "";

  document.getElementById('modal-window-log').classList.add("open");
  document.body.style.overflow = "hidden";
});


// Открытие модального окна риелтора

document.getElementById("open-modal-btn").addEventListener('click', function() {
  document.getElementById('modal-window').classList.add("open");
  document.body.style.overflow = "hidden";
});

// Закрытие модального окна при клике вне его

document.querySelector("#modal-window .modal-realtor-box").addEventListener('click', event => {
    event._isClickWithInModal = true;
});

document.getElementById("modal-window").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    document.body.style.overflow = "";
});

// Активная страница

const activeBtnPage = document.querySelector('.active-button');
activeBtnPage.style.backgroundColor = '#9a6b4c';