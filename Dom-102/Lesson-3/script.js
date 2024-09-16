// Получаем элементы формы
const form = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Проверка на пустое имя
  if (name === "") {
    result.textContent = "Пожалуйста, введите ваше имя.";
    return;
  }

  // Простая проверка на формат email
  if (!validateEmail(email)) {
    result.textContent = "Пожалуйста, введите корректный email.";
    return;
  }

  result.textContent = `Имя: ${name}, Email: ${email}`;
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Task

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();

//     // Проверка и добавление/удаление класса ошибки для поля имени
//     if (name === '') {
//         nameInput.classList.add('error');
//         result.textContent = 'Пожалуйста, введите ваше имя.';
//         return;
//     } else {
//         nameInput.classList.remove('error');
//     }

//     // Проверка и добавление/удаление класса ошибки для email
//     if (!validateEmail(email)) {
//         emailInput.classList.add('error');
//         result.textContent = 'Пожалуйста, введите корректный email.';
//         return;
//     } else {
//         emailInput.classList.remove('error');
//     }

//     // Если все корректно
//     result.textContent = `Имя: ${name}, Email: ${email}`;
// });

// // Функция валидации email
// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
// }

// Обработчик события отправки формы
// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращаем перезагрузку страницы

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     let valid = true;

//     // Проверка поля имени
//     if (name === '') {
//         nameInput.classList.add('error');
//         result.textContent = 'Пожалуйста, введите ваше имя.';
//         valid = false;
//     } else {
//         nameInput.classList.remove('error');
//     }

//     // Проверка email
//     if (!validateEmail(email)) {
//         emailInput.classList.add('error');
//         result.textContent = 'Пожалуйста, введите корректный email.';
//         valid = false;
//     } else {
//         emailInput.classList.remove('error');
//     }

//     // Проверка пароля (минимум 6 символов)
//     if (password.length < 6) {
//         passwordInput.classList.add('error');
//         result.textContent = 'Пароль должен содержать минимум 6 символов.';
//         valid = false;
//     } else {
//         passwordInput.classList.remove('error');
//     }

//     // Если все поля корректны
//     if (valid) {
//         result.textContent = `Имя: ${name}, Email: ${email}, Пароль: ${'*'.repeat(password.length)}`;
//     }
// });
