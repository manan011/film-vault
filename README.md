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
4.  API Integration - Follow the link : [API Integration](#-api-integration)
   
6.  Start the development server:
    ```bash
    npm run dev
    ```
7.  Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).

## 🧪 API Integration
**API Used**: [The Movie Database (TMDB)](https://www.themoviedb.org/documentation/api)

This project uses TMDB to fetch movie data dynamically.

### 🔐 API Key Setup
To run the project locally, you need to create a `.env` file in the root directory and add your TMDB API key:
```bash
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

## Contributing

Contributions to this project are welcome. Feel free to fork the repository and submit pull requests with improvements or bug fixes.
