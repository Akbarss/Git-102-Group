let text = document.body.firstChild;
alert(text.data); // Привет

let comment = text.nextSibling;
alert(comment.data); // Комментарий

console.log(text);

let elem1 = document.getElementById("elem1");

let name = prompt();

elem1.innerHTML = name;

// Движение мыши: mouseover/out, mouseenter/leave

const box1 = document.getElementById("box2");

box1.addEventListener("mouseover", () => {
  box1.style.backgroundColor = "lightgreen";
  box1.textContent = "Курсор внутри!";
});

box1.addEventListener("mouseout", () => {
  box1.style.backgroundColor = "lightblue";
  box1.textContent = "Наведи на меня";
});

const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
