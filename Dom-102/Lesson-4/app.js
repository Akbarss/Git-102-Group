const output = document.getElementById("output");

// Обработчик события keydown
document.addEventListener("keydown", function (event) {
  output.textContent = `Нажата клавиша: ${event.key}`;
});

// Обработчик события keyup
document.addEventListener("keyup", function (event) {
  output.textContent = `Отпущена клавиша: ${event.key}`;
});
