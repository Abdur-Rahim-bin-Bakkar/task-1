# 🛒 Item Price Calculator

A modern Full-Stack web application built with **Next.js**, **JavaScript**, **Tailwind CSS**, and **Hero UI**. The application allows users to add multiple items, submit them to a custom API endpoint, calculate the total price, and identify the most expensive item.

---

## 🚀 Live Demo

**Live Website:** https://item-price-calculator.vercel.app/

> Replace the URL above with your deployed Vercel project URL.

---

## 📌 Features

* Add multiple items with name and price
* Dynamic item list
* Custom Next.js API Route
* Calculate total price
* Find the most expensive item
* Responsive UI
* Modern interface built with Hero UI
* Download developer resume
* Developer contact section

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* React.js
* JavaScript
* Tailwind CSS
* Hero UI
* React Icons

### Backend

* Next.js API Routes

---

## 📂 Project Structure

```text
app/
│
├── api/
│   └── items/
│       └── route.js
│
├── page.js
│
components/
│
├── ItemForm.jsx
├── ItemList.jsx
├── ResultCard.jsx
└── ProjectOverview.jsx
```

---

## ⚙️ How It Works

1. Enter an item name.
2. Enter the item price.
3. Click **Add Item**.
4. Add as many items as needed.
5. Click **See Result**.
6. The frontend sends all items to the API.
7. The API calculates:

   * Total price
   * Most expensive item
8. The result is displayed instantly.

---

## 📤 API Example

### Request

```json
[
  {
    "name": "Apple",
    "price": 2
  },
  {
    "name": "Laptop",
    "price": 1000
  }
]
```

### Response

```json
{
  "total": 1002,
  "mostExpensive": {
    "name": "Laptop",
    "price": 1000
  }
}
```

---

## 💻 Installation

Clone the repository

```bash
git clone https://github.com/Abdur-Rahim-bin-Bakkar/item-price-calculator.git
```

Go to the project directory

```bash
cd item-price-calculator
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit

```text
http://localhost:3000
```

---

## 📸 Screenshots

You can add screenshots here after deployment.

Example:

```text
public/screenshots/home.png
```

---

## 👨‍💻 Developer

**Abdur Rahim**

Frontend / Full-Stack Developer

* 🌐 Portfolio: https://portfolio-eight-pi-mc123cjc5o.vercel.app/
* 💻 GitHub: https://github.com/Abdur-Rahim-bin-Bakkar
* 💼 LinkedIn: https://www.linkedin.com/in/fswd-abdur-rahim-bin-bakkar/
* 📧 Email: [webdesignrahim4061@gmail.com](mailto:webdesignrahim4061@gmail.com)

---

## 📄 Resume

The project includes a downloadable resume located in the `public` directory.

```text
public/resume.pdf
```

---

## 🎯 Purpose

This project was developed as a technical screening assignment for a **Full-Stack Developer Intern** position. It demonstrates:

* React state management
* Next.js App Router
* API Routes
* Client-server communication
* Clean component structure
* Responsive UI design
* Modern frontend development practices

---

## 📃 License

This project is open source and available under the MIT License.
