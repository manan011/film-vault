# 🎬 Film Vault

**Film Vault** is a React.js frontend application (bootstrapped with Vite) that replicates core functionalities of IMDb. Users can browse popular movies, add them to a personal watchlist, and filter/search through them interactively. All data persists via `localStorage`.

## 🔗 Live Demo

[Visit Film Vault on Vercel](#) *(add the link after deployment)*

## 🛠️ Built With

- React.js (Vite)
- Axios
- React Router DOM
- TMDB API
- LocalStorage
- Vercel (Deployment)

## 📸 Features

- **Movies Page**: Displays 20 trending movies from TMDB API.
- **Pagination**: Navigate between pages, with current and total pages shown.
- **Movie Cards**: Show poster, overview, and "Add to Watchlist"/"Remove" button.
- **Watchlist Page**:
  - Table view of saved movies with details.
  - "Delete" and "Remove from Watchlist" sync functionality.
- **Persistent State**: `localStorage` used to maintain watchlist.
- **Search Bar**: Filter watchlist by movie name.
- **Genre Filter**: Auto-generated genre buttons based on added movies; filters watchlist by genre.

## 📦 Getting Started Locally

```bash
git clone https://github.com/<your-username>/film-vault.git
cd film-vault
npm install
npm run dev
```


# Film Vault - IMDB Clone

A web application built with React.js (using Vite for fast development) that aims to replicate some of the core features of the IMDB website. Users can explore a list of movies fetched from the TMDB API, add movies to a personal watchlist, and manage their selections.

## Features

* **Movies Page:** Displays a paginated list of movies fetched from the TMDB API. Includes movie banners and individual movie cards.
* **Pagination:** Footer navigation to browse through multiple pages of movies, displaying the current page and total number of pages.
* **Movie Cards:** Each card shows basic movie information and features an "Add to Watchlist" button.
* **Watchlist Page:** A dedicated page accessible through routing where users can view movies added to their watchlist in a table format.
* **Watchlist Table:** Displays movie poster, title, rating, popularity, genre, and a "Delete" button for each movie.
* **Add/Remove from Watchlist:** Clicking "Add to Watchlist" on a movie card adds it to the watchlist and changes the button to "Remove from Watchlist." Clicking "Remove from Watchlist" (on either the movies page or watchlist page) removes the movie.
* **Local Storage Persistence:** The watchlist data is stored in the browser's local storage, ensuring that the watchlist persists across sessions.
* **Search Functionality:** A search bar on the watchlist page allows users to filter movies in their watchlist by title.
* **Genre Filtering:** Dynamic genre buttons appear above the watchlist, populated based on the genres of movies added to the watchlist. Clicking a genre button filters the watchlist to show only movies of that genre.

## Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **Vite:** A build tool that provides a fast and lean development experience for modern web projects.
* **Axios:** A promise-based HTTP client for making API requests (to fetch movie data from TMDB).
* **TMDB API:** The Movie Database API used to retrieve movie information.
* **React Router:** A library for implementing routing and navigation within the React application.
* **Local Storage:** Browser-based storage for persisting the user's watchlist data.

## Setup Instructions

1.  Clone the repository to your local machine:
    ```bash
    git clone <repository-url>
    ```
    (Replace `<repository-url>` with the URL of your GitHub repository)
2.  Navigate to the project directory:
    ```bash
    cd film-vault-react
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```
4.  Obtain an API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api) and replace `'YOUR_TMDB_API_KEY'` in your code (likely in a file where you make API calls) with your actual API key.
5.  Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
6.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## Contributing

Contributions to this project are welcome. Feel free to fork the repository and submit pull requests with improvements or bug fixes.

## License

[Optional: Add a license here, e.g., MIT License]
