# 🍽️ Smart Restaurant Queue Management System

> A real-time full-stack MERN application that eliminates physical restaurant wait lines by letting customers join queues online and receive live token updates.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

🏆 **Top Finalist — SolvIt Hackathon 2025**

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Features](#-features)
- [System Architecture](#-system-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [Performance Metrics](#-performance-metrics)

---

## 🌟 Overview

The Smart Restaurant Queue Management System is a production-grade real-time web application that digitizes restaurant waitlists. Customers can join a queue from their phone, track their position live, and get notified when their table is ready — no physical tokens, no crowded lobbies.

Restaurant owners get a powerful dashboard to manage queues, call tokens, view analytics, and support multiple branches — all in real time.

### 🎯 Key Results
| Metric | Value |
|---|---|
| Real-time update latency | < 200ms |
| Wait time reduction | 45% |
| Concurrent sessions supported | 10+ |
| Hackathon result | Top Finalist — SolvIt 2025 |

---

## ✨ Features

### 👤 Customer Side
- 📱 Join restaurant queue online from any device
- 🔢 Receive a digital token with live position tracking
- 🔔 Get notified via QR code / SMS when table is ready
- 📺 Live "Now Serving" display for in-restaurant screens

### 🏪 Owner / Admin Side
- 📊 Live queue analytics dashboard
- 📣 Token call controls (call next, skip, cancel)
- 🏢 Multi-branch support from a single account
- 👥 Role-based access: owner vs. customer views

### 🔐 Security
- JWT authentication on all routes
- bcrypt password hashing
- Role-based access control (RBAC)

---

## 🏗️ System Architecture

```
┌──────────────────────────────────────────────────────┐
│               CUSTOMER / OWNER BROWSER                │
└───────────────┬──────────────────────┬───────────────┘
                │ HTTP REST            │ WebSocket
┌───────────────▼──────────────────────▼───────────────┐
│          FRONTEND — React + TypeScript + Vite         │
│            (TailwindCSS, Redux, React Router)         │
└──────────────────────────┬───────────────────────────┘
                           │ REST + WebSocket
┌──────────────────────────▼───────────────────────────┐
│            BACKEND — Node.js + Express.js             │
│                   Socket.io Server                    │
│      JWT Auth ──── Role-based Routes ──── MongoDB     │
└──────────────────────────────────────────────────────┘
                           │
              ┌────────────▼────────────┐
              │   MongoDB Database      │
              │  (Queue, User, Branch)  │
              └─────────────────────────┘
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, TypeScript, Vite, TailwindCSS, Redux, React Router v6 |
| Backend | Node.js, Express.js, Socket.io, JWT, bcrypt, Nodemailer |
| Database | MongoDB, Mongoose |
| Notifications | QR Code generation, SMS integration |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB

### Installation

```bash
# Clone the repository
git clone https://github.com/shatakshi-1404/resturant-queue-management-system.git
cd resturant-queue-management-system
```

**1. Start the Backend**
```bash
cd backend
npm install
cp .env.example .env    # Fill in your values
npm run dev
```

**2. Start the Frontend**
```bash
cd frontend
npm install
npm run dev
```

App runs at:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

### Environment Variables

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
SMS_API_KEY=your_sms_provider_key   # optional
```

---

## 📁 Project Structure

```
resturant-queue-management-system/
├── frontend/
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── QueueDisplay/  # Live token display
│   │   │   ├── Dashboard/     # Owner analytics
│   │   │   └── TVDisplay/     # "Now Serving" screen
│   │   ├── pages/             # Customer & Owner pages
│   │   ├── store/             # Redux slices
│   │   └── socket/            # Socket.io client setup
├── backend/
│   ├── routes/                # Auth, queue, branch routes
│   ├── controllers/           # Business logic (OOP service classes)
│   ├── models/                # MongoDB schemas
│   │   ├── Queue.js
│   │   ├── User.js
│   │   └── Branch.js
│   ├── middleware/            # JWT verification, role guard
│   ├── socket/                # Socket.io event handlers
│   └── utils/                 # QR, SMS, notification helpers
└── README.md
```

---

## 📡 API Reference

### Auth
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register customer or owner |
| POST | `/api/auth/login` | Login and receive JWT |

### Queue
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/queue/join` | Customer joins queue |
| GET | `/api/queue/status/:token` | Get live token position |
| POST | `/api/queue/call-next` | Owner calls next token |
| POST | `/api/queue/cancel/:token` | Cancel a token |

### Branch (Owner)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/branch/create` | Create a new branch |
| GET | `/api/branch/all` | Get all branches for owner |
| GET | `/api/branch/:id/analytics` | Live queue analytics |

### WebSocket Events
| Event | Direction | Description |
|---|---|---|
| `queue:update` | Server → Client | Broadcast queue state change |
| `token:called` | Server → Client | Notify when token is called |
| `token:cancel` | Client → Server | Customer cancels token |

---

## 📊 Performance Metrics

- ⚡ Real-time update latency: **< 200ms**
- 👥 Concurrent sessions: **10+ simultaneous**
- ⏱️ Customer wait time reduction: **45%**
- 🏆 Recognition: **Top Finalist — SolvIt Hackathon 2025**

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 👩‍💻 Author

**Shatakshi Prasad**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shatakshi-prasad-9104772b8/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/shatakshi-1404)
