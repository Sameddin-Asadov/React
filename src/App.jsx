import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './assets/Login'
import { users } from './assets/Login'

function App() {
  console.log(users)

  return (
       <div>
        <Login/>
        <hr />
        <Login/>
       </div>
  )
}

export default App
