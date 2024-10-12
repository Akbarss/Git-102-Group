const API_KEY = "37153a486788dafbb90b90b4ed4ae4a1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const movieTitleEl = document.getElementById("movie-title");
const movieDetailsEl = document.getElementById("movie-details");

// Get the movie ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get("id");

// Fetch movie details using the movie ID
const MOVIE_DETAILS_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;

getMovieDetails(MOVIE_DETAILS_API);

async function getMovieDetails(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const movie = await res.json();
    displayMovieDetails(movie);
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

function displayMovieDetails(movie) {
  const { title, poster_path, vote_average, overview, release_date, runtime, genres } = movie;

  movieTitleEl.textContent = title;

  const genresList = genres.map((genre) => genre.name).join(", ");

  movieDetailsEl.innerHTML = `
    <div class="movie-details">
      <img src="${IMG_PATH + poster_path}" alt="${title}">
      <div class="movie-info">
        <h2>${title}</h2>
        <p><strong>Rating:</strong> ${vote_average}</p>
        <p><strong>Release Date:</strong> ${release_date}</p>
        <p><strong>Runtime:</strong> ${runtime} minutes</p>
        <p><strong>Genres:</strong> ${genresList}</p>
        <h3>Overview</h3>
        <p>${overview}</p>
      </div>
    </div>
  `;
}
