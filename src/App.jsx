import React from 'react'
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import Categories from './components/Categories'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <HeroSlider />
        <Categories />
      </main>
    </div>
  )
}

export default App
