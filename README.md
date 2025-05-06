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
