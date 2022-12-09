import React from 'react'
import './landing.css'

const Landing = () => {
  return (
    <div className='container'>
      <div className='wrapper'>
          <div className="hero-content">
            <h1>Hi, I'm Masai</h1>
            <p>
            I am an architectural designer with great experience in web-design and web development. I have worked on various projects that include website design, e-commerce sites and other web apps. I have also worked on various projects related to 3D modeling, detailing and 
            project management.
            </p>
            <button className='view-more'>
              View more
            </button>
          </div>

          <div className="hero-image">
          <img src="https://images.pexels.com/photos/7212834/pexels-photo-7212834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            
          </div>
      </div>

    </div>
  )
}

export default Landing