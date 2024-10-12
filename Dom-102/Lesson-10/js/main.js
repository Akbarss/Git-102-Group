const API_KEY = "37153a486788dafbb90b90b4ed4ae4a1";
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=" + API_KEY;

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=" + API_KEY + "&query='";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    showMovies(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

function showMovies(movies) {
  main.textContent = "";
  movies.forEach((movie) => {
    const { id, title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <button class="add-to-cart" onclick="addToCart(${id}, '${title}')">Add to Cart</button>
      <a href="movie.html?id=${id}">
      <img src="${IMG_PATH + poster_path}" alt="${title}">

      <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
          <h3>Overview</h3>
          ${overview}
      </div>
       </a>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

function addToCart(id, title) {
  const movieToAdd = cartItems.find((item) => item.id === id);
  if (movieToAdd) {
    movieToAdd.quantity++;
  } else {
    cartItems.push({ id, title, quantity: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert(`${title} added to cart`);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (searchTerm && searchTerm !== "") {
    await getMovies(SEARCH_API + searchTerm + "'");
    search.value = "";
  } else {
    window.location.reload();
  }
});
