# 🎬  Movie App

A modern web application for searching and discovering movies using the **TMDB API**.
Built with **React**, **Vite**, **React Router**, and **CSS Modules**.

The app allows users to browse popular movies, search by title, manage a favorites list, explore detailed movie pages, and view actor profiles with full filmography.

---

## 🚀 Features

* 🔍 Search movies by title
* ⭐ Add and remove favorite movies
* 🎞 Browse popular movies from TMDB
* 📸 View posters, overviews, release dates, and ratings
* 🎬 Detailed movie pages with cast & crew
* 👤 Actor profiles with biography and full filmography
* 🔗 Clickable cast members linking to actor pages
* ⚡ Fast development with Vite
* 🎨 Styling with CSS Modules
* 🌐 Live data from TMDB API
* 🚀 Client-side routing with React Router

---

## 🛠️ Technologies Used

* **React** (v19.1.0)
* **Vite** (v7.0.4)
* **React Router DOM** (v7.6.3)
* **TMDB API**
* **CSS Modules**

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aradeyal/Movie-App.git
cd Movie-App
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Set Up Environment Variables

Create a `.env` file in the project root (same level as `vite.config.js`):

```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

> ❗ The `.env` file must not be committed to GitHub. It is already included in `.gitignore`.

---

### 4. Start the Development Server

```bash
npm run dev
```

Open in your browser:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 📁 Project Structure

```
frontend/
├── public/
├── src/
│   ├── assets/               # Images and static assets
│   ├── components/           # Reusable components
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── contexts/             # React Context
│   │   └── MovieContext.jsx  # Favorites global state
│   ├── css/                  # CSS Modules
│   │   ├── App.css
│   │   ├── Home.css
│   │   ├── Favorites.css
│   │   ├── MovieCard.css
│   │   ├── MovieDetails.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Favorites.jsx
│   │   ├── MovieDetails.jsx
│   │   └── PersonDetails.jsx
│   ├── services/
│   │   └── api.js             # TMDB API integration
│   ├── App.jsx
│   └── main.jsx
├── .env                      # API key (ignored by Git)
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧩 Key Components

* **MovieCard.jsx** – Displays movie poster, title, and rating
* **NavBar.jsx** – Navigation between Home and Favorites
* **MovieContext.jsx** – Global favorites management using React Context
* **MovieDetails.jsx** – Full movie details including cast & crew
* **PersonDetails.jsx** – Actor / crew profile with biography and filmography
* **api.js** – Centralized TMDB API requests

---

## 🌐 API Reference

This project uses **The Movie Database (TMDB) API** for real-time movie data.

### Implemented API Functions

* `getPopularMovies()` – Fetch popular movies
* `searchMovies(query)` – Search movies by title
* `getMovieDetails(id)` – Movie details + cast & crew
* `getPersonWithCredits(id)` – Actor profile + filmography

---

## 🔑 TMDB API Key Setup

1. Go to [https://www.themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
2. Create or log in to your account
3. Request a **free developer API key**
4. Add it to your `.env` file:

```env
VITE_TMDB_API_KEY=your_key_here
```

---

## 📸 Screenshots

<img width="1886" height="853" alt="image" src="https://github.com/user-attachments/assets/19109940-fc44-4b44-8b74-ee93be71edb2" />
<img width="1918" height="811" alt="image" src="https://github.com/user-attachments/assets/c05b5aeb-74ef-4306-b831-6e9d8cb57434" />
<img width="1890" height="869" alt="image" src="https://github.com/user-attachments/assets/8c0728e9-2189-41da-a4dc-dde13443f296" />
<img width="1918" height="793" alt="image" src="https://github.com/user-attachments/assets/1a37a3d5-8217-45a9-8696-4607e7f9c10b" />



---

## 📄 License

This project is provided **for educational and personal use**.
You are free to fork, modify, and expand it.

---

## 🙏 Credits

* Tutorial inspiration by **Tech With Tim**
  [https://www.youtube.com/watch?v=G6D9cBaLViA](https://www.youtube.com/watch?v=G6D9cBaLViA)
* Movie data provided by **TMDB**
  [https://www.themoviedb.org/](https://www.themoviedb.org/)
