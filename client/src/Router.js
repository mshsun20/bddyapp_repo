import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Contacts from './components/Contacts'
import Addcont from './components/contparts/Addcont'
import Departments from './components/Departments'
import Adddept from './components/deptparts/Adddept'
import Designations from './components/Designations'
import Adddesig from './components/desigparts/Adddesig'
import Languages from './components/Languages'
import Addlang from './components/langparts/Addlang'
import Events from './components/Events'
import Addevnt from './components/evntparts/Addevnt'


const Router = () => {
  return (
    <>
        <div>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contacts/>}/>
            <Route path='/addcont' element={<Addcont/>}/>
            <Route path='/dept' element={<Departments/>}/>
            <Route path='/adddept' element={<Adddept/>}/>
            <Route path='/desig' element={<Designations/>}/>
            <Route path='/adddesig' element={<Adddesig/>}/>
            <Route path='/lang' element={<Languages/>}/>
            <Route path='/addlang' element={<Addlang/>}/>
            <Route path='/event' element={<Events/>}/>
            <Route path='/addevnt' element={<Addevnt/>}/>
          </Routes>
          <Footer/>
        </div>
    </>
  )
}

export default Router