# Wellness Coach - Premium Wellness & Nutrition Center Platform

Wellness Coach is a state-of-the-art, high-performance web application designed for modern nutritionists, wellness centers, and health coaches. Built with a focus on aesthetics, user experience, and robust functionality, this platform provides everything a wellness business needs to thrive online.

## 🌟 Key Features

-   **Premium Modern Design**: Carefully curated color palette (White, Gray, Green-500) and high-end typography (Inter & Playfair Display).
-   **Fully Responsive**: Optimized for all devices—desktops, tablets, and mobile phones.
-   **Comprehensive Service Pages**: Dedicated sections for Weight Management, Healthy Aging, Child Nutrition, and more.
-   **Dynamic Blog System**: A fully functional journal to share nutritional insights and research.
-   **Admin Dashboard**: A secure, streamlined interface for administrators to track user registrations and contact inquiries.
-   **Integrated Contact System**: Custom form handling with direct backend integration.
-   **Full-Stack Architecture**: React (Vite) frontend with a Node.js/Express backend and MongoDB.

## 🛠️ Technology Stack

-   **Frontend**: React 19, Vite, Tailwind CSS 4, Framer Motion (for premium animations).
-   **Backend**: Node.js, Express.
-   **Database**: MongoDB (Mongoose).
-   **Authentication**: JWT-based secure authentication.
-   **Animations**: Framer Motion for scroll reveals and micro-interactions.

## 📁 Project Structure

```text
wellnutrition/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components
│   │   ├── context/     # Auth and Global State
│   │   └── styles/      # Global CSS and Tailwind config
├── server/              # Express backend
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   └── middleware/      # Auth and Admin guards
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18+)
-   MongoDB (Local or Atlas)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone [repository-url]
    cd wellnutrition
    ```

2.  **Setup Backend**:
    ```bash
    cd server
    npm install
    cp .env.example .env
    # Add your MONGODB_URI and JWT_SECRET to .env
    npm start
    ```

3.  **Setup Frontend**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

## 👤 Developer

**Ubaidullah**
*Professional Full-Stack Developer*

Dedicated to creating high-converting, beautiful digital products for the wellness industry.

## 🛒 Sales & Licensing

This product is optimized for sale on platforms like **ThemeForest** and other digital marketplaces. It includes:
- Clean, documented code.
- Scalable architecture.
- Modular component design.
- SEO-friendly structure.

---
*Transforming health through technology.*
