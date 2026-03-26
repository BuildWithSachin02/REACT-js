import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";//step:1 pehle yeh import krna hota h mtlb pehle toh install kro fir isse import kr paoge isse

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
  <App/>
 </BrowserRouter>
)

//router kyy hota h
/*
1. React Router kya hota hai?

React Router ek library hai jo React application me different URLs ko
different components se connect karti hai.

Isse hum Single Page Application (SPA) bana sakte hain.

SPA kya hota hai?

Single Page Application me:

Page reload nahi hota

Sirf component change hota hai

Website fast feel hoti hai

Example website routes:
/home
/about
/contact
/services

Har URL par different component render hota hai.

2. React Router install kaise kare

React project me pehle install karna padta hai.

npm install react-router-dom
3. React Router ke Important Components
Component	Kaam
BrowserRouter	Routing enable karta hai
Routes	Saare routes ko wrap karta hai
Route	URL ko component se connect karta hai
Link	Navigation ke liye use hota hai
 */