import React, { useState } from 'react'
import Navbar from './components/Navbar/navbar'

const App = () => {

  const [theme, setTheme] = useState('light')
  return (
    <div className='container'>

      <Navbar theme={theme} setTheme={setTheme}/>

    </div>
  )
}

export default App
