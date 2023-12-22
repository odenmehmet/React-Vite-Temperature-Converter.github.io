import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TemperatureConverter from './Tempconverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <TemperatureConverter/>
    </div>
  )
}

export default App
