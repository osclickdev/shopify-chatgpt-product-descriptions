# 🚀 Shopify Community App Template (NodeJS)

## 📚 Overview

This template, owned by [Interactiv4](https://github.com/Interactiv4), is a community-driven initiative aimed at creating a high-quality and fully open-source template for Shopify apps. The goal is to empower developers to contribute and enhance the overall quality of Shopify applications.

## 🎯 Project Purpose

The primary purpose of this project is to provide a template that serves as a foundation for building top-notch Shopify applications. By being completely open-source, it encourages collaboration and contributions from the community, fostering a collective effort to elevate the standards of Shopify app development.

## 🛠️ Technologies Used

- **Frontend:**
    - [React](https://reactjs.org/): A popular JavaScript library for building user interfaces.
    - [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that adds static types.
    - [React Router](https://reactrouter.com/): A declarative routing library for React.
    - [React Query](https://react-query.tanstack.com/): A library for managing, caching, and updating remote and local data.
    - [Vite](https://vitejs.dev/): A fast development server and build tool for modern web development.

- **Backend:**
    - [Node.js](https://nodejs.org/): A JavaScript runtime for server-side development.
    - [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
    - [TypeScript](https://www.typescriptlang.org/): Used for adding static types to the backend code.
    - [Prisma ORM](https://www.prisma.io/): A modern database toolkit for Node.js and TypeScript.
    - [Node Dependency Injection](https://github.com/zazoomauro/node-dependency-injection/): A library for managing dependencies in Node.js applications.
    - [Hexagonal Architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)): An architectural pattern that promotes separation of concerns.
    - [Domain-Driven Design (DDD)](https://dddcommunity.org/): A design approach that aligns software design with the user's mental model of the problem domain.
    - [ESLint](https://eslint.org/): A tool for identifying and fixing problems in JavaScript and TypeScript code.
    - [Prettier](https://prettier.io/): An opinionated code formatter.
    - [Husky](https://typicode.github.io/husky/): A tool that ensures code quality by running scripts before commits.

- **Shopify Integration:**
    - [Shopify API Library](https://shopify.dev/docs/admin-api): A library for interacting with the Shopify Admin API.
    - [App Bridge React](https://shopify.dev/tools/app-bridge/react): A set of React components that make it easy to embed Shopify into your app.
    - [Polaris](https://polaris.shopify.com/): Shopify's design system for building consistent and accessible user interfaces.
    - [Webhooks](https://shopify.dev/tutorials/manage-webhooks): A mechanism for Shopify to notify external services about events in a shop.

## ⭐ What Sets Our Template Apart?

- **TypeScript Support:** The template is fully integrated with TypeScript for both frontend and backend, enhancing code reliability and maintainability.


- **Database Persistence:** We have replaced the default persistence with Prisma ORM, allowing compatibility with PostgreSQL, MySQL, MongoDB, as well as services like Supabase and Planet Scale.


- **API Routing:** API routes are now organized into separate files using a wildcard approach, promoting better project structure and maintainability.


- **Dependency Injection:** Leveraging [Node Dependency Injection](https://github.com/zazoomauro/node-dependency-injection/) for managing dependencies, improving code organization, and facilitating testing.


- **Architectural Enhancements:** The template adopts Hexagonal Architecture and Domain-Driven Design (DDD) principles, promoting clean and modular code.


- **Code Quality Tools:** ESLint and Prettier are integrated to ensure consistent code style and quality, with Husky enforcing pre-commit hooks for additional reliability.

## 🚀 Installation Guide

1. **Install dependencies:**
   ```bash
   npm install
   cd web/backend
   npm install
   ```
   
2. **Configure database:**

    Create a .env file in the web/backend folder and set the database connection details.
    ```bash
    cd web/backend
    npx prisma migrate dev --name init
    ```
   
3. **Start the development server:** 
   ```bash
   npm run dev
   ```

## 🤝 Feedback and Contributions
We welcome feedback, bug reports, and contributions. Feel free to submit an [issue](https://github.com/interactiv4/shopify-node-app-template/issues) or [create a pull request](https://github.com/interactiv4/shopify-node-app-template/pulls). Let's make this template even better together!

