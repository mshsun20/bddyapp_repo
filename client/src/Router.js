import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Events from './components/Events'


const Router = () => {
  return (
    <>
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/event' element={<Events/>}/>
            </Routes>
            <Footer/>
        </div>
    </>
  )
}

export default Router