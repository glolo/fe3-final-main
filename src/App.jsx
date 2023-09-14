import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";

import React from 'react';
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Navbar/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
