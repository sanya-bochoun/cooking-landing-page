import React from 'react'
import breakfastIcon from '../assets/images/breakfast.png'
import veganIcon from '../assets/images/vegan.png'
import meatIcon from '../assets/images/meat.png'
import dessertIcon from '../assets/images/dessert.png'
import lunchIcon from '../assets/images/lunch.png'
import chocolateIcon from '../assets/images/chocolate.png'

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Breakfast',
      icon: breakfastIcon,
      description: 'Start your day right'
    },
    {
      id: 2,
      name: 'Vegan',
      icon: veganIcon,
      description: 'Plant-based goodness'
    },
    {
      id: 3,
      name: 'Meat',
      icon: meatIcon,
      description: 'Protein-packed meals'
    },
    {
      id: 4,
      name: 'Dessert',
      icon: dessertIcon,
      description: 'Sweet treats'
    },
    {
      id: 5,
      name: 'Lunch',
      icon: lunchIcon,
      description: 'Midday meals'
    },
    {
      id: 6,
      name: 'Chocolate',
      icon: chocolateIcon,
      description: 'Chocolate delights'
    }
  ]

  return (
    <section className="categories-section">
      <div className="categories-container">
        <div className="categories-header">
          <h2 className="categories-title">Categories</h2>
          <button className="view-all-btn">
            View All Categories
          </button>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">
                <img src={category.icon} alt={category.name} />
              </div>
              <h3 className="category-name">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
