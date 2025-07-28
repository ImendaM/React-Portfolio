import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router'
import './index.css'
import App from './App.jsx'
import AuthRoute from './components/Auth/AuthRoute'

//Routes 
import Blogs from './components/Blogs/Blogs'
import CreateBlogs from './components/Blogs/CreateBlogs'
import ErrorPage from './components/ErrorPage'
import Login from './components/Auth/Login.jsx'
import ForgotPassword from './components/ForgotPassword'
import BlogPage from './components/Blogs/BlogsPage'
import Admin from './components/Admin'
import UploadImage from './components/Blogs/UploadImage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>
      <Route path='/' element={<App/>} errorElement={<ErrorPage/>}/>
      <Route path='/blogs' element={<Blogs/>} errorElement={<ErrorPage/>}/>
      <Route path='/createblog' element={<CreateBlogs/>} errorElement={<ErrorPage/>}/>
      <Route path='/login' element={<Login/>} errorElement={<ErrorPage/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>} errorElement={<ErrorPage/>}/>
      <Route path='/blogpage' element={<BlogPage/>} errorElement={<ErrorPage/>}/>
      <Route path='/admin' element={<Admin/>} errorElement={<ErrorPage/>} />
      <Route path='/uploadimage' element={<UploadImage/>} errorElement={<ErrorPage/>} />
    </Routes>
   </Router>
  </StrictMode>,
)


/*Functionality
Routing
Routing allows developers to specify routes on the webpage that the user can access. Different routes may contain different contents.
Browser Router allows developers to use dynamic routing in React application. It does this mapping the URL to a corresponding component
without reloading the full page.

Routes act as a container that will contain all routes in the application.

Route is responsible for rendering a UI component when its path property matches the current URL. It takes in 
a path and an element that will render when that path is hit.

 */