# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



books-shop-app/
 ├── frontend/
 │     ├── src/
 │     │    ├── assets/
 │     │    │    ├── books/
 │     │    │    └── logo.png
 │     │    ├── components/
 │     │    │    ├── Navbar.jsx
 │     │    │    ├── Hero.jsx
 │     │    │    ├── BookCard.jsx
 │     │    │    ├── BookList.jsx
 │     │    │    └── CartItem.jsx
 │     │    ├── context/
 │     │    │    ├── AuthContext.jsx
 │     │    │    ├── ThemeContext.jsx
 │     │    │    └── WishlistContext.jsx
 │     │    ├── features/               // Redux slices
 │     │    │    ├── booksSlice.js
 │     │    │    ├── cartSlice.js
 │     │    │    └── userSlice.js
 │     │    ├── pages/
 │     │    │    ├── Home.jsx
 │     │    │    ├── Books.jsx
 │     │    │    ├── Cart.jsx
 │     │    │    └── Wishlist.jsx
 │     │    ├── routes/
 │     │    │    └── AppRoutes.jsx
 │     │    ├── services/
 │     │    │    ├── booksService.js
 │     │    │    └── authService.js
 │     │    ├── store/
 │     │    │    └── store.js
 │     │    ├── styles/
 │     │    │    ├── App.css
 │     │    │    └── variables.css
 │     │    ├── utils/
 │     │    │    ├── formatPrice.js
 │     │    │    └── helpers.js
 │     │    ├── App.jsx
 │     │    └── index.js
 │     └── package.json
 │
 ├── backend/
 │     ├── controllers/
 │     │    ├── authController.js
 │     │    ├── booksController.js
 │     │    └── cartController.js
 │     ├── models/
 │     │    ├── User.js
 │     │    ├── Book.js
 │     │    └── Cart.js
 │     ├── routes/
 │     │    ├── authRoutes.js
 │     │    ├── booksRoutes.js
 │     │    └── cartRoutes.js
 │     ├── middleware/
 │     │    ├── authMiddleware.js
 │     │    └── errorMiddleware.js
 │     ├── config/
 │     │    └── db.js
 │     ├── utils/
 │     │    └── generateToken.js
 │     ├── server.js
 │     └── package.json
 │
 └── README.md
