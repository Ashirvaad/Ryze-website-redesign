# Ryze.ai – Website Redesign

This project is a redesign of the **Get-Ryze.ai** website, created as part of an internship assignment. The goal was to improve visual clarity, user experience, and structure while keeping the design modern, clean, and professional for an AI-driven performance marketing product.

---

## 🚀 Project Overview

Ryze is positioned as an **AI performance marketer** that audits, optimizes, and scales paid advertising campaigns automatically.  
The redesign focuses on clearly communicating this value proposition while following real-world SaaS design and frontend practices.

---

## 🎯 Objectives

- Improve overall visual appeal and readability  
- Clearly explain what Ryze does and how it helps users  
- Create a modular, reusable component structure  
- Ensure smooth navigation and responsive behavior  
- Follow modern SaaS UX patterns  

---

## 🧩 Pages Implemented

- **Home (`/`)** – Product overview, features, social proof, and CTA  
- **Features (`/features`)** – Detailed feature breakdown using card-based layout  
- **Pricing (`/pricing`)** – Clear pricing tiers with CTA and FAQ section  
- **Case Studies (`/case-studies`)** – Example use cases and results  
- **FAQ (`/faq`)** – Common questions about the product  
- **Responsive Navigation** – Desktop header + mobile sidebar navigation  

---

## 🏗️ Design & Structure Decisions

- The UI follows a **clean SaaS layout** with consistent spacing, typography, and subtle accents to reflect AI and performance marketing.
- The homepage is structured as a clear flow:  
  **Value Proposition → Trust → Features → Social Proof → Call-to-Action**
- Reusable UI elements are separated into components, while route-level pages are kept in a dedicated `pages` folder.
- React Router is used for client-side navigation, with scroll-to-top handling to ensure proper UX on route changes.
- Basic accessibility considerations (focus states, readable contrast, semantic structure) and responsive design were included.

---

## 📁 Project Structure

src/

├── assets/

├── components/

├── pages/

├── App.tsx

├── main.tsx

└── index.css


---

## 🧠 Key Features Implemented

- Modular React components
- Responsive sidebar navigation
- Scroll restoration on route change
- Clean and scalable folder structure

---

## 🛠️ Tech Stack

- **React + TypeScript**
- **Vite**
- **React Router**
- **CSS (component-scoped styles)**

---

## ▶️ Getting Started
```bash
### 1. Clone the repository
git clone <repository-url>


### 2. Install dependencies
npm install

### 3. Run the project locally
npm run dev
```
The app will be available at:
http://localhost:5173


## 🌐 Live Demo


### 👉 Live URL: https://ryze-website-redesign-nine.vercel.app/


## 📌 Notes

This project focuses on frontend design and structure; backend functionality is not implemented.

Images and content are used for demonstration purposes only.

The codebase is structured to allow easy future expansion.

## 🙌 Conclusion

This redesign demonstrates an understanding of frontend fundamentals, component-based architecture, and SaaS UX principles, while keeping the implementation clean and scalable. The goal was to deliver a realistic, production-style landing experience suitable for an AI marketing product.



        
