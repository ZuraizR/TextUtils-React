import './App.css'

import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#252a2f'
      // document.body.style.backgroundColor = '#212529'
      document.body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#252a2f'
      // document.body.style.color = '#212529'
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route
              exact
              path='/'
              element={
                <TextForm
                  heading='Enter Text to Analyze Below'
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
