import React from 'react'
import Nav from './comp/nav'
import HeartsBackground from "./comp/heartbackground";
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <HeartsBackground />
      <Nav />
    </BrowserRouter>  
    </>
  )
}

export default App