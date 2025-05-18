import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';

import CoffeeDetail from './components/coffeeDetail.jsx';
import SignIn from './components/SignIn.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <h2>this is error page</h2>,
    children: [
    {
      index:true,
      loader: () => fetch('http://localhost:5000/coffees'),
      Component: Home,
    },
    {
      path: 'addCoffee',
      Component: AddCoffee,
    },
    {
      path:'coffee/:id',
      Component: CoffeeDetail,
      loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
    },
    {
      path: 'updateCoffee/:id',
      loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`),
      Component: UpdateCoffee,
    },
    {
      path: "signin",
      Component: SignIn,
    },
    {
      path: "signup",
      Component: SignUp
    },
    {
      path: "users",
      loader: () => fetch('http://localhost:5000/users'),
      Component: Users,
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
      </AuthProvider>
  </StrictMode>,
)
