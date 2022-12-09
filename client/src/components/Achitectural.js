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
    <div className='arch-container'>
      <h1>Architecture Projects</h1>
      {projects.map((project) =>{
        return (
          
          <div className ='arch-card'> 
            <img src={project.image_url}/>
            <h2>{project.title}</h2>
            <button>View</button>
            
          </div>
        )
      })}
    </div>
  )
}

export default Achitectural