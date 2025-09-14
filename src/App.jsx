import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <HeroSlider />
      </main>
    </div>
  )
}

export default App
