# Modern Barbershop Landing Page 💈

A premium, high-performance landing page for a modern barbershop, built with a "Minimalist Professional" aesthetic. This project focuses on clean architecture, type safety, and a seamless user experience across all devices.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
[![Deploy with Vercel](https://vercel.com/button)](https://twoj-link-z-vercela.vercel.app)

## ✨ Key Features

- **Dynamic Booking Integration**: Seamless redirection to the Booksy platform for appointment management.
- **Responsive Team Showcase**: A dedicated section for barbers with dynamic pagination that adjusts the number of items based on screen size (Mobile/Tablet/Desktop).
- **Intelligent Service Catalog**: Categorized service lists (Haircuts, Beard Care, Full Grooming) with "Show More" functionality to keep the UI clean.
- **Smart Navigation**: A custom header that hides on scroll-down and reappears on scroll-up, combined with an animated smooth-scroll utility.
- **Legal Compliance**: Built-in Privacy Policy and Terms of Service pages with a persistent, animated Cookie Banner that stores user consent in `localStorage`.
- **Performance Optimized**: Features lazy loading for images and code-splitting for routes to ensure fast load times.

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite.
- **Styling**: Tailwind CSS v4 using modern CSS variables and a centralized theme configuration.
- **State Management**: React Hooks (useState, useMemo, useEffect, useRef).
- **Routing**: React Router DOM for Single Page Application (SPA) navigation.
- **Testing**: Vitest and React Testing Library for unit and component testing.

## 📂 Project Structure

The project follows the **Separation of Concerns** principle to ensure scalability:

- `src/data/`: Centralized "Single Source of Truth" for all content (services, team, reviews, legal text).
- `src/ui/components/`: Atomic UI elements like `Typography`, `SmartLink`, and `AnchorButton`.
- `src/ui/sections/`: Large, content-heavy blocks that compose the landing page.
- `src/hooks/`: Custom business logic (e.g., viewport detection, scroll behavior).
- `src/types/`: Centralized TypeScript interfaces and types for better maintainability.

## 🚦 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/modern-barbershop.git](https://github.com/your-username/modern-barbershop.git)
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
