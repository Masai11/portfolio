import React from 'react'
import './architectural.css'

import {useState,useEffect} from 'react'
import NewArchitectureProjectForm from './NewArchitectureProjectForm'

const ReadMore = ({ children }) => {
  const text = children

  const [isReadMore, setIsReadMore] = useState(true)

  const toggleReadMore = ()=>{
    setIsReadMore(!isReadMore)
  }
  return(
    <p className='text'>
      {isReadMore ? text.slice(0,150) : text}
      <span onClick={toggleReadMore} className='read-or-hide'>
        {isReadMore ? "...Read More" : "Show Less"}
      </span>
    </p>
  )
}



const Achitectural = () => {
  const [projects, setProjects] = useState([]);
  const [formVisible, setFormVisible] = useState(false)

  useEffect(()=>{
    fetch("/architecturals")
    .then((res) => res.json())
    .then((projects) => setProjects(projects) )
  })


  return (
    <>
      <h1 className='head'>Architecture Projects</h1>
      <div className='btn'>    
          <button onClick={()=>{setFormVisible(!formVisible)}} className='form-btn'>Add New</button>
      </div>
      {formVisible ? <NewArchitectureProjectForm/> : null}
    <div className='arch-container'>
      {projects.map((project) =>{
        return (
          
          <div className ='arch-card'> 
            <img src={project.image_url} className='card-img'/>
            <h2>{project.title}</h2>
            <h4>

              <ReadMore>
                {project.content}
                
              </ReadMore>
            </h4>
            <h4>ksh. {project.budget}M</h4>
            <button>View</button>
            
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Achitectural

