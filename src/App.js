import React from 'react'
import Nav from './comp/nav'
import FlowersBackground from './comp/FlowersBackground'
import { BrowserRouter } from 'react-router-dom'
import Rout from './comp/rout'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <FlowersBackground />
      <Nav />
      <Rout />
    </BrowserRouter>  
    </>
  )
}

export default App