import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from './Routes';

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
