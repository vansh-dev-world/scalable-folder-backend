# Create Node Backend

> A powerful CLI to scaffold a scalable and production-ready **Node.js Backend** in seconds.

[![npm version](https://img.shields.io/npm/v/@vanshdeeparya/create-node-backend.svg)](https://www.npmjs.com/package/@vanshdeeparya/create-node-backend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)

Create a scalable backend folder structure with a single command.

---

## Features

- Production-ready folder structure
- ES Module (`type: module`) support
- Generates `package.json`
- Creates `.env`
- Creates `.gitignore`
- Creates `README.md`
- Ready for Express development
- Automatically installs required dependencies *(Express, Dotenv, CORS, etc.)*
- Cross-platform (Windows, Linux & macOS)

---

# Installation

No installation is required.

Run directly using **npx**:

```bash
npx @vanshdeeparya/create-node-backend my-app
```

or install globally

```bash
npm install -g @vanshdeeparya/create-node-backend
```

then

```bash
create-node-backend my-app
```

---

# Usage

Create a new backend project

```bash
npx @vanshdeeparya/create-node-backend ecommerce-api
```

---

## Generated Project Structure

```text
my-app/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   ├── database/
│   ├── docs/
│   ├── event/
│   ├── infrastructure/
│   ├── logs/
│   ├── middleware/
│   ├── modules/
│   ├── scheduler/
│   ├── scripts/
│   ├── shared/
│   ├── socket/
│   ├── test/
│   └── uploads/
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## After Project Creation

Move into your project

```bash
cd my-app
```

Start development

```bash
npm run dev
```

> **Note**
>
> Required dependencies are installed automatically during project creation.

---

## Requirements

- Node.js 18+
- npm 9+

---

<!-- # 🛣 Roadmap -->

## Version 1

- Production Folder Structure
- ES Module Support
- package.json
- README.md
- .env
- .gitignore
- Automatic Dependency Installation

---

<!-- ## 🚧 Upcoming Features

- Interactive CLI
- JavaScript / TypeScript Selection
- Express / Fastify / Hono
- MongoDB
- PostgreSQL
- MySQL
- Prisma
- Sequelize
- Mongoose
- JWT Authentication
- Docker
- Swagger
- ESLint
- Prettier
- Husky
- Git Initialization
- Redis
- BullMQ
- Socket.IO
- Unit Testing
- GitHub Actions
- CI/CD Templates

--- -->

# Example

```bash
npx @vanshdeeparya/create-node-backend ecommerce-api
```

Output

```text
 Creating project...

✔ Creating folder structure
✔ Generating package.json
✔ Copying template files
✔ Installing dependencies

✅ Project created successfully!

Next Steps

cd ecommerce-api
npm run dev
```

---

# Contributing

Contributions are welcome!

1. Fork this repository.
2. Create a feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

# Author

**Vansh Deep Arya**

- GitHub: https://github.com/vansh-dev-world/scalable-folder-backend
- npm: https://www.npmjs.com/~vanshdeeparya

---

# License

This project is licensed under the **MIT License**.