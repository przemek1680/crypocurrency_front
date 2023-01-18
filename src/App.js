import logo from './logo.svg';
import React from 'react';
import './App.css';
import MainPage from './components/mainPage/MainPage';
import AboutPage from "./components/aboutPage/AboutPage";
import LoginPage from "./components/loginPage/LoginPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/About",
    element: <AboutPage/>,
    errorElement: <AboutPage/>,
  },
  {
    path: "/",
    element: <MainPage/>,
},
{
  path: "/login",
  element: <LoginPage/>,
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
