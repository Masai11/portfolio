import React from 'react'
import './service.css'

const Service = () => {
  return (
    <div id='service'>
      <div className='service-container'>
          <h1 className='title'>My Services</h1>
        <div className='service-card'>

          
          <div className='card'>
             <h1>Architectural Design</h1>
             <p>I am passionate about what I do, and this shows in my work. My designs are always inspired by the client's goals and vision for their home, and they are always executed with integrity and professionalism.</p>
          </div>
          <div className='card'>
             <h1>Web Development</h1>
             <p>I offer web development services for small businesses of all kinds.I know that the first impression of your business is the one that will last—especially when you're just getting started. And that's why I take the time to create a website that speaks to your brand, conveys your values, and keeps visitors coming back for more.</p>
          </div>

        </div>
      </div>
    </div>
   
  )
}

export default Service