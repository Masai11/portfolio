import React from 'react'
import{useState,useEffect} from 'react'
import NewWebDevProjectForm from './NewWebDevProjectForm';
import './webdevs.css'

const Webdevs = () => {
    const [projects, setProjects] = useState([]);
    const [formVisible, setFormVisible] = useState(false)

  
    useEffect(()=>{
        fetch("/webdevs")
        .then((res) => res.json())
        .then((projects) => setProjects(projects) )
      })
    
      return (
        <>
          <h1 className='head'>Web-Development Projects</h1>
          <div className='btn'>    
          <button onClick={()=>{setFormVisible(!formVisible)}} className='form-btn'>Add New</button>
      </div>
      {formVisible ? <NewWebDevProjectForm/> : null}
        <div className='web-container'>
          {projects.map((project) =>{
            return (
              <div className='web-card'> 
                <img src={project.image_url} className='card-img'/>
                <h2>{project.title}</h2>
                <button><a href={project.web_url}>View</a></button>
                
              </div>
            )
          })}
        </div>
        </>
      )
}

export default Webdevs