import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Project from '../shared/components/Project'
import Tools from '../shared/components/Tools'
import About from '../shared/components/About'

import Resume from '../shared/components/Resume'

function Main() {

  
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <About/>
        <Project/>
        <Tools/>
        <Resume/>
        <Footer/>
    </div>
  )
}

export default Main