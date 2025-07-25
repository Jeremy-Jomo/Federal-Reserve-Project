# 🕵️‍♂️ Federal Reserve – FBI Most Wanted Web App

**Federal Reserve** is a secure, responsive, single-page application (SPA) built with React. It showcases the FBI's most wanted criminals, complete with search functionality, detailed views, and route protection via a login system.

> 🚧 This is a Phase 2 project built for learning and demonstration purposes with a fulfilling UI.

---

## 📌 Table of Contents

- [🔐 Features](#-features)
- [🧩 Project Structure](#-project-structure)
- [🛠 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [🚀 Running the Project](#-running-the-project)
- [🧪 Usage](#-usage)
- [⚙️ Route Protection Logic](#️-route-protection-logic)
- [🎯 Future Improvements](#-future-improvements)
- [📄 License](#-license)
- [🙋 Author](#-author)

---

## 🔐 Features

- 🔐 **Login Authentication** with hardcoded credentials
- 📦 **Protected Routes** for secure navigation
- 🧑‍🤝‍🧑 **Criminals Listing** with FBI-style cards
- 🔍 **Live Search** for filtering criminals
- 📃 **Detailed View Pages** for individual profiles
- 📞 **Contact Us** and ℹ️ **About Us** pages
- 🎨 Responsive design using **Bootstrap**
- 🔁 **Automatic redirects** based on login status

---

## 🧩 Project Structure


Federal_Reserve/
├── public/
├── src/
│ ├── assets/
│ ├── Components/
│ │ ├── LoginPage/
│ │ │ ├── LoginPage.jsx
│ │ │ └── LoginPage.css
│ │ ├── AboutUs.jsx
│ │ ├── ContactUsPage.jsx
│ │ ├── Home.jsx
│ │ ├── SearchBar.jsx
│ │ ├── WantedCard.jsx
│ ├── pages/
│ │ ├── Details.jsx
│ │ └── CriminalsDisplay.jsx
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
├── vercel.json
└── README.md


## 🛠 Tech Stack

| Tech              | Description                          |
|------------------|--------------------------------------|
| React            | Frontend framework                   |
| Vite             | Build tool for lightning-fast dev    |
| React Router DOM | Client-side routing                  |
| Bootstrap        | CSS framework for layout & styling   |
| CSS              | Custom styling                       |
| JavaScript       | Application logic                    |

---

## 📦 Installation

> Ensure you have **Node.js and npm** installed.

1. Clone the repository:

```bash


2. Install dependancies:
git clone https://github.com/yourusername/federal-reserve.git
cd federal-reserve
```bash
npm install

3. 🚀 Running the Project
start server
```bash
npm run dev

open browser and go to [text](http://localhost:5173)

## 🧪 Usage
## 🔑 Login Credentials:
> Username	Password
> admin	password123

1. On app load, the user is shown the Login Page.

## 🖼️ Login Page Preview

![Login Page Screenshot](image.png)




2. Upon successful login, the app redirects to the Home Page.
## 🖼️ Project Preview

![Federal Reserve Watchlist Homepage](/home/jomo/Desktop/Phase_2_project/Federal_Reserve/public/screenshots/Screenshot from 2025-07-25 00-21-15.png)




3.Users can then access:

🔍 /criminals – View list of wanted individuals


🧾 /details/:id – View detailed info for each

![Criminal page](/home/jomo/Desktop/Phase_2_project/Federal_Reserve/public/screenshots/Screenshot from 2025-07-25 00-33-09.png)

📄 /about – About this platform

![About us page](/home/jomo/Desktop/Phase_2_project/Federal_Reserve/public/screenshots/Screenshot from 2025-07-25 00-33-30.png)

📬 /contactus – Contact support or admin
![Contact us](/home/jomo/Desktop/Phase_2_project/Federal_Reserve/public/screenshots/Screenshot from 2025-07-25 00-33-30.png)

⚙️ Route Protection Logic
jsx
Copy
Edit
 <Route
  path="/home"
  element={
    isLoggedIn ? <Home /> : <Navigate to="/" replace />
  }
 />
 >If the user is not logged in, they're redirected to the login page.

> After logging in, isLoggedIn becomes true and the app shows protected content.



##  🎯 Future Improvements
🔧 Connect to a real backend (Node.js/Express, Firebase, etc.)

📥 Add user registration and password reset

🔒 Replace hardcoded auth with JWT-based authentication

🧩 Add filters (e.g., by region, crime type)

📲 Make the app PWA-ready with offline support

💾 Save login state in localStorage or sessionStorage

📄 License
This project is licensed under the MIT License.

🙋 Authors
Jomo
Kaynan
Angela
Jimmy
Kiama
🚀 React Developers • Students • Explorers





This project was built as part of my learning journey through the Software Engineering Phase 2 program.





