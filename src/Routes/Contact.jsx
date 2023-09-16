import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useTheme } from '../Context/ThemeContext'

const Contact = () => {
  //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
  const { state } = useTheme();
  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className={`page ${themeClass}`}>
      <Navbar/>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact