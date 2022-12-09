import React from 'react'
import{useState,useEffect} from 'react'
import './webdevs.css'

const Webdevs = () => {
    const [projects, setProjects] = useState([]);

  
    useEffect(()=>{
        fetch("/webdevs")
        .then((res) => res.json())
        .then((projects) => setProjects(projects) )
      })
    
      return (
        <div className='web-container'>
          <h1>Web-Development Projects</h1>
          {projects.map((project) =>{
            return (
              <div className='web-card'> 
                <img src={project.image_url}/>
                <h2>{project.title}</h2>
                <button><a href={project.web_url}>View</a></button>
                
              </div>
            )
          })}
        </div>
      )
}

export default Webdevs