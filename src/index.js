import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
