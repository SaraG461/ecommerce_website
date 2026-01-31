import React from 'react'
import Nav from './comp/nav'
import FlowersBackground from './comp/FlowersBackground'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <FlowersBackground />
      <Nav />
    </BrowserRouter>  
    </>
  )
}

export default App