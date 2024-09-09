let header = document.getElementById("header");
let paragraph = document.querySelector(".paragraph");

header.textContent = "Hello World";

paragraph.style.color = "red";
paragraph.style.fontSize = "20px";

// Создание нового элемента
let newDiv = document.createElement("div");
// Добавление содержимого
newDiv.textContent = "Новый элемент";
// Добавление на страницу
document.body.appendChild(newDiv);

// Получение кнопки
let button = document.getElementById("buttonShowAlert");

// Добавление обработчика клика
button.addEventListener("click", function () {
  alert("Кнопка была нажата!");
});




  const button2 = document.getElementById('timeButton');
  const timeDisplay = document.getElementById('timeDisplay');
  
  button2.addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = `Текущее время: ${currentTime}`;
  });
