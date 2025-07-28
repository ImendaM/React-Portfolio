import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Nav from './components/Nav'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {


  return (
    <>
     <Header/>
     <Body/>
     <Footer/>
    </>
  )
}

export default App

/*
    React 
    React is a frontend Javascript library that aims to make building user interfaces seamless. It does this by allowing developers to create reuseable
    components that can be used throughout the React application.

    Node js
    Node js is a javascript runtime environment. Node js allows developers to use Javascript to write command line tools 
    as well as for server side scripting.

    There are two methods to create a React application the first method is to use Create React App and the second one which is the one that we are using
    is to create a react application with vite.


    Project Structure 
    Node Modules
    Node modules are reusable blocks of code or directories that provide specific functionalities in a Node.js application.
    Some of built modules are https and path and there are some third party modules that we'll talk about when we build our project

    public
    This contains files that are directly to the web browser such as logos, images 

    .gitignore
     The .gitignore serves a vital role in applications that use git for version control. It prevents developers from sending their own 
     environment variables and private api keys to production(The live version of the app found at a specified domain online).

    eslint.config.js 
    The eslint.config.js is the file used to configure linting rules for the Nodejs application. Linting is a process of analyzing source code 
    to find logic errors and stylistic issues in an automated manner. Linting is carried out by a linter. Linters are static code analysis tools
    that can identify syntax errors that would lead to bugs.

    index.html
    Gives the browser an entry point into our application. It used to connect the main.jsx file that allows developers
    to use create and reuse React modules in their application.

    package-lock.json 
    The package-lock.json is created when you run npm install in a nodejs application. It tracks all the packages that are used in your application
    and keeps an account of the version that each package is using.

    package.json 
    The package.json is a crucial file for the Nodejs as well as the Package manager. It is JSON file that contains
    metadata about the project. This metadata will include the name of the project, the project version and the project dependencies.

    README.md 
    README.md is a file used by developers to share important information about a project. This file normally included set up 
    information for the current configuration of the project and suggestions to modify the project in stable manner.

    vite.config.js 
    The vite.config.js is an important file for the configuration of a Vite-powered application. It can be a javascript or typescript file
    and it will be located in the root directory of the project. It defines how Vite should build, serve and optimize the application.

    src
    This folder contains all code files that need to be built in some manner before being accessed by the browser.

    Assets

    App.css
    This file contains styling parameters for corresponding react component.

    App.jsx
    This file is a default react component that is created when the React application is built with vite.
    JSX file extension stands for Javascript XML and it allows developers to create html elements inside 
    of the javascript file. This simplifies the process of creating user interfaces.

    index.css
    This file contains global styling parameters for the application.

    main.jsx
    This file renders the React components and then mounts/appends it to the div tag in the html file.

    Tailwind
    Tailwindcss is a utilities-first css framework. It provides developers with predefined classes that can be used to style 
    components in a simple and time-efficient. Learning Tailwindcss will come with a small learning curve but once the developers
    gets used to it, its benefits are felt immediately.

    npm install tailwindcss @tailwindcss/vite

    import tailwindcss from '@tailwindcss/vite'

    tailwindcss()
    @import "tailwindcss";





*/
