import {React, useState} from 'react'
import './newarchitectureprojectform.css'

const initialState = {
    title: "",
    image_url: "",
    content: "",
    budget: "",
    
  };
  

function NewArchitectureProjectForm({onAddProject}) {

    const [formData, setFormData] = useState(initialState);
  

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://portfolio-production-e1a7.up.railway.app/architecturals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((newProject) => {
            setFormData(initialState);
            onAddProject(newProject);
          });
    }

    return (
        <div className="form-card">
      
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="image_url">Image URL: </label>
          <input
            type="text"
            id="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
          <label htmlFor="content">content: </label>
          <input
            type="text"
            id="content"
            value={formData.content}
            onChange={handleChange}
          />
          <label htmlFor="budget">budget: </label>
          <input type="number"
            id="budget"
            value={formData.budget}
            onChange={handleChange}
          />
        
          <button className='submit-btn' type="submit">Submit</button>
        </form>
    </div>
    );
    
  
}

export default NewArchitectureProjectForm