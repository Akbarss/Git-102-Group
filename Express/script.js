const apiUrl =
  "https://api.express24.uz/client/v5/catalog/stores?latitude=41.311191&longitude=69.279776&limit=1200&rootCategoryId=1";

let currentPage = 0;
const pageSize = 5;

async function fetchStores() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayStores(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function filterStores(stores, subCategory) {
  if (subCategory === "all") {
    return stores;
  }
  return stores.filter((store) => store.subCategories.some((cat) => cat.id === parseInt(subCategory)));
}

function paginateStores(stores) {
  const skip = currentPage * pageSize;
  const take = skip + pageSize;
  return stores.slice(skip, take);
}

function displayStores(data) {
  const storeList = document.getElementById("store-list");
  const storeCount = document.getElementById("store-count");
  const subCategoryFilter = document.getElementById("subcategory").value;

  let filteredStores = filterStores(data.list, subCategoryFilter);

  storeCount.textContent = filteredStores.length;

  filteredStores = paginateStores(filteredStores);

  storeList.innerHTML = "";

  filteredStores.forEach((store) => {
    const storeItem = document.createElement("div");
    storeItem.innerHTML = `
                    <h2>${store.name} (${store.id})</h2>
                    <p>Category: ${store.subCategories.map((cat) => cat.name).join(", ")}</p>
                    <p>Average Rating: ${store.reviews.average} (${store.reviews.count} reviews)</p>
                    <img src="${store.logo}" alt="${store.name} Logo" width="100">
                    <hr>
                `;
    storeList.appendChild(storeItem);
  });
}

function nextPage() {
  currentPage++;
  fetchStores();
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
  }
  fetchStores();
}

document.getElementById("subcategory").addEventListener("change", () => {
  currentPage = 0; // Reset to first page
  fetchStores();
});

window.onload = fetchStores;
