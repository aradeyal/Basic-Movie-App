# 🎬 Basic Movie App

A modern web app to search and discover movies using the [TMDB API](https://www.themoviedb.org/), built with **React**, **Vite**, and **CSS Modules**.  
Includes functionality to view popular movies, search for specific titles, and manage a list of favorite movies.

---

## 🚀 Features

- 🔍 Search movies by title  
- ⭐ Add and remove favorite movies  
- 🎞 View popular movies from TMDB  
- 📸 Display movie posters, overviews, and release dates  
- ⚡ Powered by Vite for fast development and builds  
- 🎨 Custom styling with CSS Modules  
- 🌐 Live data from TMDB API  

---

## 🛠️ Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [The Movie Database API (TMDB)](https://www.themoviedb.org/)
- CSS Modules

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aradeyal/MovieSearcher.git
cd MovieSearcher
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

```
MovieSearcher/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── css/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── .env              <-- holds the API key (not committed to GitHub)
├── .gitignore        <-- includes .env
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🌐 API Reference

This project uses The Movie Database (TMDB) API to fetch real-time movie data.

- Get an API key:
  1. Visit: [TMDB API Settings](https://www.themoviedb.org/settings/api)
  2. Sign up or log in
  3. Request a developer API key (free)

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

