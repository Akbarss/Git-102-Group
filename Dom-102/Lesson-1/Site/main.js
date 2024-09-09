// Создаем header
const header = document.createElement("header");
header.textContent = "My Website Header";
header.classList.add("header");
document.body.appendChild(header);

// Создаем main блок
const main = document.createElement("main");
main.classList.add("main");
document.body.appendChild(main);

// Создаем блок с карточками
const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards-container");
main.appendChild(cardsContainer);

// Создаем несколько карточек
for (let i = 1; i <= 4; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("h2");
  cardTitle.textContent = `Card Title ${i}`;
  card.appendChild(cardTitle);

  const cardDescription = document.createElement("p");
  cardDescription.textContent = "This is a description of the card. It contains some information.";
  card.appendChild(cardDescription);

  cardsContainer.appendChild(card);
}

// Создаем footer
const footer = document.createElement("footer");
footer.textContent = "My Website Footer";
footer.classList.add("footer");
document.body.appendChild(footer);

// Основные стили для body
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";

// Стили для header
header.style.backgroundColor = "#4CAF50";
header.style.color = "white";
header.style.textAlign = "center";
header.style.padding = "20px";
header.style.fontSize = "24px";

// Стили для main
main.style.padding = "20px";
main.style.backgroundColor = "#f4f4f4";

// Стили для контейнера карточек
cardsContainer.style.display = "grid";
cardsContainer.style.gridTemplateColumns = "repeat(auto-fit, minmax(200px, 1fr))";
cardsContainer.style.gap = "20px";

// Стили для карточек
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.backgroundColor = "white";
  card.style.border = "1px solid #ddd";
  card.style.borderRadius = "8px";
  card.style.padding = "20px";
  card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
});

// Стили для footer
footer.style.backgroundColor = "#333";
footer.style.color = "white";
footer.style.textAlign = "center";
footer.style.padding = "10px";
footer.style.marginTop = "20px";
footer.style.position = "relative";
footer.style.bottom = "0";
footer.style.width = "100%";
