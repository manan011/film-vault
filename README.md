# 🎬 Film Vault

**Film Vault** is a React.js frontend application (bootstrapped with Vite) that replicates core functionalities of IMDb. Users can browse popular movies, add them to a personal watchlist, and filter/search through them interactively. All data persists via `localStorage`.

## 🔗 Live Demo

[Visit Film Vault on Vercel](#) *(add the link after deployment)*

## 🛠️ Built With

- React.js
- Vite
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
- **Genre Filter**: Dynamic genre buttons appear above the watchlist based on added movies; filters watchlist by genre.

## 📦 Getting Started Locally

1.  Clone the repository to your local machine:
    ```bash
    git clone https://github.com/manan011/film-vault.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd film-vault-react
    ```
3.  Install the project dependencies:
    ```bash
    npm install
    ```
4.  🧪 API Integration
    API used: The Movie Database (TMDB)
    You must add your TMDB API key in the appropriate .env file for the app to function.
5.  Start the development server:
    ```bash
    npm run dev
    ```
6.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## Contributing

Contributions to this project are welcome. Feel free to fork the repository and submit pull requests with improvements or bug fixes.
