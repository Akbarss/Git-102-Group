// Получаем элементы формы и календаря
const monthSelect = document.getElementById("month");
const yearSelect = document.getElementById("year");
const calendarDiv = document.getElementById("calendar");

// Заполняем выпадающий список годов
const currentYear = new Date().getFullYear();
for (let year = currentYear - 50; year <= currentYear + 50; year++) {
  const option = document.createElement("option");
  option.value = year;
  option.textContent = year;
  if (year === currentYear) option.selected = true;
  yearSelect.appendChild(option);
}

// Функция для создания календаря
function createCalendar(year, month) {
  // Очистка предыдущего календаря
  calendarDiv.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay(); // День недели первого дня месяца
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Количество дней в месяце

  // Создание таблицы
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Названия дней недели
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const headerRow = document.createElement("tr");
  daysOfWeek.forEach((day) => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Создание строк с днями месяца
  let row = document.createElement("tr");
  let day = 1;

  // Пустые ячейки до начала месяца
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
    const emptyCell = document.createElement("td");
    row.appendChild(emptyCell);
  }

  // Заполняем дни месяца
  for (let i = firstDay === 0 ? 6 : firstDay - 1; i < 7; i++) {
    const cell = document.createElement("td");
    cell.textContent = day++;
    row.appendChild(cell);
  }
  tbody.appendChild(row);

  // Оставшиеся дни месяца
  while (day <= daysInMonth) {
    row = document.createElement("tr");
    for (let i = 0; i < 7 && day <= daysInMonth; i++) {
      const cell = document.createElement("td");
      cell.textContent = day++;
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  calendarDiv.appendChild(table);
}

// Отображение календаря при изменении месяца или года
monthSelect.addEventListener("change", () => {
  createCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});
yearSelect.addEventListener("change", () => {
  createCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
});

// Отображаем календарь для текущего месяца и года при загрузке страницы
createCalendar(currentYear, new Date().getMonth());
