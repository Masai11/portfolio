import React from 'react'
import './architectural.css'

import {useState,useEffect} from 'react'



const Achitectural = () => {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    fetch("/architecturals")
    .then((res) => res.json())
    .then((projects) => setProjects(projects) )
  })

  return (
    <>
      <h1 className='head'>Architecture Projects</h1>
    <div className='arch-container'>
      {projects.map((project) =>{
        return (
          
          <div className ='arch-card'> 
            <img src={project.image_url} className='card-img'/>
            <h2>{project.title}</h2>
            <button>View</button>
            
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Achitectural