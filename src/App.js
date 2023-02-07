import logo from './logo.svg';
import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import AboutPage from "./components/aboutPage/AboutPage";
import LoginPage from "./components/loginPage/LoginPage";
import RegisterPage from "./components/registerPage/RegisterPage"
import WalletPage from "./components/walletPage/WalletPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/wallet",
    element: <WalletPage/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
    errorElement: <AboutPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage/>,
  },
]);

function App() {
  return(
    <>
    <RouterProvider router={router} />
   </>
  )
}

export default App;
