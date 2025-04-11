import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Second from './components/Second'
import Pro from './components/Pro'
import CardGrid from './components/CardGrid'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
   return ( 


        <>
    <NavBar/>
    <Routes>
    <Route path='/' element={<Second/>}/>
    <Route path='/c' element={<Pro/>}/>
    <Route path='/d' element={<CardGrid/>}/>


      {/* <Second/> */}
      {/* <Pro/> */}
      {/* <CardGrid/> */}
      </Routes>

    </>
      
  )

}
export default App

















