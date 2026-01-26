# 🚀 USWellnessCenter Deployment Guide

This guide provides a complete, step-by-step process to deploy your **USWellnessCenter** application for free with high performance and custom domain support.

---

## 🏗️ 1. Prepare for Deployment
We will use:
- **GitHub**: For version control.
- **MongoDB Atlas**: For the online database.
- **Render**: For the Backend (Server).
- **Vercel**: For the Frontend (Client).

### ✅ Secure Your Folders
The project already includes a `.gitignore` at the root. This ensures that:
- `node_modules/` are not uploaded.
- `.env` files (containing your secrets) are kept **private** on your computer.

---

## 📦 2. GitHub Repository Setup
1. Go to [GitHub](https://github.com/) and create a new **Private** or **Public** repository named `wellnesscms`.
2. Open your terminal in the folder and run:
   ```bash
   git add .
   git commit -m "Rename project to USWellnessCenter"
   git push origin main
   ```

---

## 🍃 3. MongoDB Atlas Setup (Database)
1. Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Create a **Free Shared Cluster** (M0).
3. Under **Network Access**, click "Add IP Address" and select **"Allow Access From Anywhere"** (0.0.0.0/0).
4. Under **Database Access**, create a user with a username and password. **Save these.**
5. Click **Connect** -> **Drivers** -> Copy the `SRV` connection string.
   - It will look like: `mongodb+srv://ubaiddevdiploy:Ttmm2211@wellnesscms.yrstbmg.mongodb.net/uswellnesscenter?retryWrites=true&w=majority`

---

## ⚙️ 4. Backend Deployment (Render)
1. Sign up at [Render.com](https://render.com/).
2. Click **New +** -> **Web Service**.
3. Connect your GitHub repository `wellnesscms`.
4. Set the following details:
   - **Name**: `uswellnesscenter-api`
   - **Root Directory**: `server`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
5. Click **Advanced** and add **Environment Variables**:
   - `NODE_ENV`: `production`
   - `MONGODB_URI`: `mongodb+srv://ubaiddevdiploy:Ttmm2211@wellnesscms.yrstbmg.mongodb.net/uswellnesscenter?retryWrites=true&w=majority`
   - `JWT_SECRET`: `wellnutrition_secret_cloud_2024_secure_99`
   - `CLIENT_URL`: *Wait for Vercel URL in step 5*
6. Click **Create Web Service**.

---

## 🖥️ 5. Frontend Deployment (Vercel)
1. Sign up at [Vercel.com](https://vercel.com/).
2. Click **Add New** -> **Project**.
3. Import your `wellnesscms` repository.
4. Set the following details:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add **Environment Variables**:
   - `VITE_API_URL`: `https://uswellnesscenter-api.onrender.com/api` (Replace with your actual Render URL)
6. Click **Deploy**.

---

## 🔗 6. Connecting & Custom Domain
### Connect Frontend to Backend
Once Vercel gives you a URL (e.g., `https://uswellnesscenter.vercel.app`):
1. Go back to your **Render** Dashboard for the `uswellnesscenter-api`.
2. Add/Update the Environment Variable `CLIENT_URL` with your Vercel URL.
3. Save changes.

### Adding a Custom Domain
- **On Vercel**: Settings -> Domains -> Add your domain (e.g., `uswellnesscenter.com`).
- **On Render**: Settings -> Custom Domains -> Add your api domain (e.g., `api.uswellnesscenter.com`).
- Follow the DNS instructions provided by each platform.

---

## ⚡ Summary of Secrets
| Variable | Value | Location |
| :--- | :--- | :--- |
| `MONGODB_URI` | Atlas Connection String | Render Env |
| `VITE_API_URL` | Render Service URL | Vercel Env |
| `JWT_SECRET` | Secret Key | Render Env |
| `CLIENT_URL` | Vercel App URL | Render Env |

Your app is now **secure**, **fast**, and **live**! 🚀
