create github repository and make deployment link


=============================


npm install gh-pages --save-dev

=======

import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({

  plugins: [react()],
  
  base: '/<repo-name>/', // 👈 replace with your GitHub repo name
  
})


base: '/health-insurance-dashboard/',


=========

Open package.json and modify like this:

{
  "name": "health-insurance-dashboard",
  
  "version": "1.0.0",
  
  "private": true,
  
  "scripts": {
  
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    
  },
  
  "devDependencies": {
  
    "vite": "^5.0.0",
    "gh-pages": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.0"
    
  }
}


=============


npm run deploy


=============

upload files of the dist folder



=======================
=======================
{

     "homepage": "https://your-username.github.io/frontend-mern-batch11am"

     ex, 

     {
     "name": "frontend-mern-batch11am",
     "version": "0.1.0", 
     "private": true, 
     "homepage": "https://your-username.github.io/frontend-mern-batch11am", 
     "dependencies": {
     "react": "^18.2.0", 
     "react-dom": "^18.2.0", 
     "react-router-dom": "^6.17.0"},
     "devDependencies": { 
     "gh-pages": "^5.0.0" 
     },
     "scripts": 
     { 
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test", 
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build" }, 
     ------


     "scripts": {
     
        "predeploy": "npm run build", 
        "deploy": "gh-pages -d build"

     }

      BrowserRouter basename = "/frontend-mern-batch11am">

      npm install
      npm run deploy
      npm run build
     
     }





