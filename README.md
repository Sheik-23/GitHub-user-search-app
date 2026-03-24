# 🔍 GitHub User Search App

A React application that allows you to search any GitHub user and instantly view their profile details and top repositories.

## 🚀 Live Demo
[View Live →](https://github.com/Sheik-23/GitHub-user-search-app)

---

## 📸 Features

- 🔎 Search any GitHub username instantly
- 👤 View profile — avatar, name, bio, location
- 📦 See top 5 repositories sorted by stars
- ⭐ Repository stats — stars and forks
- ❌ Error handling for invalid usernames
- ⏳ Loading state while fetching data
- 🔗 Clickable profile and repository links

---

## 🛠️ Built With

- [React](https://react.dev/) — UI library
- [Vite](https://vitejs.dev/) — build tool & dev server
- [GitHub REST API](https://docs.github.com/en/rest) — data source

---

## 📂 Project Structure

```
src/
├── App.jsx          # Main component — state & logic
├── UserCard.jsx     # Profile card component
└── RepoList.jsx     # Repositories list component
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine

### Installation

1. Clone the repository
```bash
git clone https://github.com/Sheik-23/GitHub-user-search-app.git
```

2. Navigate into the project
```bash
cd GitHub-user-search-app
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

5. Open your browser at `http://localhost:5173`

---

## 💡 Concepts Used

| Concept | Usage |
|---|---|
| `useState` | Managing search, user, loading, error states |
| `useEffect` | Triggering API fetch when query changes |
| `Props` | Passing data from App → UserCard → RepoList |
| `async/await` | Handling API calls cleanly |
| `Promise.all` | Fetching user & repos simultaneously |
| `try/catch/finally` | Graceful error handling |
| Conditional Rendering | Showing loading, error, or results |
| `.map()` | Rendering the list of repositories |

---

## 🔌 API Reference

This project uses the public GitHub REST API — no authentication required.

```
GET https://api.github.com/users/{username}
GET https://api.github.com/users/{username}/repos?sort=stars&per_page=5
```

---

## 🙌 Author

**Sheik**
- GitHub: [@Sheik-23](https://github.com/Sheik-23)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).