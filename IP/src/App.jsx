import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800 mb-2'>AI Image Enhancer</h1>
        <p className='text-lg text-grey-500'>Uplode Your image and let AI Enhance Your Image</p>
      </div>

      <Home />

      <div className="text-lg tyext-grey-500 mt-6">
       Power By Sahil Prasad
      </div>
    </div>
  )
}

export default App
