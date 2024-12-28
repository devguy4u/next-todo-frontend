# Todo-app
This is the simple todo-app application(full-stack). It is built using Node.js, Express, and Prisma for backend and database management and Nextjs for the frontend.

---

## 🚀 Features
- RESTful API built with Express.js.
- Database ORM with Prisma.
- Environment-based configuration.
- Structured for scalability.

---

## 🛠 Prerequisites
Before running the backend, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (or another database supported by Prisma)
- [Prisma](https://www.prisma.io/) (for database ORM)
- [Next.js](https://nextjs.org/) (for frontend)

---

## 📦 Setup Instructions

1. **Clone the repository**
    ```bash
    git clone https://github.com/devguy4u/next-todo-app.git
    cd next-todo-app
    ```  
2. **Install dependencies**
   ```bash
   npm install
    ```

3. **Create a `.env` file**
    
    Copy the `.env.example` file and rename it to `.env`:
  
    ```bash
    cp .env.example .env
    ```

    Update the `DATABASE_URL` in the `.env` file with your database connection string:

    ```bash
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<database>"
4. **Initialize the database**
  
    Run the following commands to set up the database schema using Prisma:

    ```bash
    npx prisma migrate dev --name init
5. **Generate Prisma client**
   
   After migrations, generate the Prisma client:

   ```bash
   npx prisma generate
6. **Start the backend server**
   
    Run the backend server in development mode:

    ```bash
    npm run dev
    ```
    The backend API will be available at `http://localhost:4000`.

---

## 🖥 Frontend Setup
1. **Clone the frontend repository**
    ```bash
    git clone https://github.com/your-username/frontend-repo.git
cd frontend-repo
    ```
2. **Install dependencies**
    ```bash
    npm install
    ```
3. **Create a `.env` file**

    Copy the `.env.example` file and rename it to `.env`:
    ```bash
    cp .env.example .env
    ```

---

## 🔄 Database Initialization (Backend)
The database schema is managed using Prisma. Follow these steps to initialize and manage the database:
1. **Run Migrations**
   
    To apply the migrations and create the necessary tables in your database:

    ```bash
    npx prisma migrate dev
    ```
2. **Seeding the Database (Optional)**
   
    `prisma/seed.ts` file. Then, run:

    ```bash
    npx prisma db seed
    ```
3. **Access Prisma Studio**
   
    Use Prisma Studio to view and manage your database in a user-friendly interface:

    ```bash
    npx prisma studio
    ```

---

## 📂 Folder Structure Overview

The backend project is organized as follows:

### Backend:

```bash
backend-repo/
├── prisma/               # Prisma schema and migrations
├── index.ts              # Backend implementation
├── .env.example          # Environment variable template
└── package.json          # Backend dependencies

```


---

## 🛡 Environment Variables

### Backend:
| Variable     | Description                           |
| ------------ | ------------------------------------- |
| DATABASE_URL | Connection string for the database    |
| PORT         | Port on which the backend server runs |

### Frontend:
| Variable              | Description             |
| --------------------- | ----------------------- |
| REACT_APP_BACKEND_URL | URL for the backend API |
