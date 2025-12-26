# 🎬 Basic Movie App

A modern web app to search and discover movies using the [TMDB API](https://www.themoviedb.org/), built with **React**, **Vite**, **React Router**, and **CSS Modules**.  
Includes functionality to view popular movies, search for specific titles, manage a list of favorite movies, explore detailed movie information, and discover cast and crew details.

---

## 🚀 Features

- 🔍 Search movies by title  
- ⭐ Add and remove favorite movies  
- 🎞 View popular movies from TMDB  
- 📸 Display movie posters, overviews, release dates, and ratings  
- 🎬 **Detailed movie pages** with cast and crew information  
- 👤 **Actor profiles** with complete filmography and biography  
- 🔗 **Clickable cast members** linking to their profiles  
- ⚡ Powered by Vite for fast development and builds  
- 🎨 Custom styling with CSS Modules  
- 🌐 Live data from TMDB API  
- 🚀 Client-side routing with React Router  

---

## 🛠️ Technologies Used

- [React](https://react.dev/) (v19.1.0)
- [Vite](https://vitejs.dev/) (v7.0.4)
- [React Router DOM](https://reactrouter.com/) (v7.6.3) - Client-side routing
- [The Movie Database API (TMDB)](https://www.themoviedb.org/)
- CSS Modules

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aradeyal/ Movie App.git
cd  Movie App
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project (at the same level as `vite.config.js`) and add:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> **Note:** Do NOT commit your `.env` file. It is already listed in `.gitignore`.

### 4. Start the Development Server

```bash
npm run dev
```
Visit: [http://localhost:5173](http://localhost:5173)

---

## 📁 Project Structure

frontend/
├── public/
├── src/
│   ├── assets/              <-- Images and static assets
│   ├── components/          <-- Reusable React components
│   │   ├── MovieCard.jsx    <-- Movie card component
│   │   └── NavBar.jsx       <-- Navigation bar
│   ├── contexts/            <-- React Context
│   │   └── MovieContext.jsx <-- Global movie state (favorites)
│   ├── css/                 <-- CSS Modules
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── Favorites.css
│   │   ├── MovieCard.css
│   │   ├── MovieDetails.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/               <-- Page components
│   │   ├── Home.jsx         <-- Popular movies & search
│   │   ├── Favorites.jsx    <-- Favorite movies list
│   │   ├── MovieDetails.jsx <-- Movie details with cast
│   │   └── PersonDetails.jsx <-- Actor/crew profile & filmography
│   ├── services/            <-- API integration
│   │   └── api.js          <-- TMDB API calls
│   ├── App.jsx              <-- Main app component
│   └── main.jsx             <-- React entry point
├── .env                     <-- API key (not committed to GitHub)
├── .gitignore               <-- Includes .env
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

### Key Components

- **MovieCard.jsx**: Displays individual movie cards with title, poster, and rating
- **NavBar.jsx**: Navigation links to Home and Favorites pages
- **MovieContext.jsx**: Global state management for favorite movies using React Context API
- **MovieDetails.jsx**: Detailed view of a single movie with cast, crew, and description
- **PersonDetails.jsx**: Actor/crew profile with biography and complete filmography
- **api.js**: All TMDB API endpoints (popular, search, movie details, person details) README.md
```

---

## 🌐 API Reference

This project uses **The Movie Database (TMDB) API** to fetch real-time movie data.

### Available Endpoints

- **`getPopularMovies()`** - Fetch popular movies for the home feed
- **`searchMovies(query)`** - Search movies by title
- **`getMovieDetails(id)`** - Get detailed info about a movie including cast and crew
- **`getPersonWithCredits(id)`** - Get actor/crew profile with complete filmography

### Setup TMDB API Key

1. Visit: [TMDB API Settings](https://www.themoviedb.org/settings/api)
2. Sign up or log in to your account
3. Request a developer API key (free tier available)
4. Add the key to your `.env` file as `VITE_TMDB_API_KEY`

---

## 📸 Screenshots

<img width="1898" height="869" alt="image" src="https://github.com/user-attachments/assets/28e43d53-83f5-4bac-9431-e38b611bbb4d" />

<img width="1865" height="854" alt="image" src="https://github.com/user-attachments/assets/ba36cc32-3585-46c0-bf21-f3721a60e9f6" />

<img width="1878" height="858" alt="image" src="https://github.com/user-attachments/assets/c4dace37-e7a2-4570-a01a-09600896aa73" />

---


## 📄 License

This project is provided for educational and personal use only.  
Feel free to fork, modify, and build upon it!

---

## 🙏 Credits

- Built by following this YouTube tutorial by Tech With Tim: [Watch here](https://www.youtube.com/watch?v=G6D9cBaLViA) 
- Movie data powered by [TMDB](https://www.themoviedb.org/)

