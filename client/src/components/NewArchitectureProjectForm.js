import {React, useState} from 'react'

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
        fetch("/architecturals", {
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
        <div className="card">
      <h2>New Design Project</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL: </label>
        <input
          type="text"
          id="image"
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
        <textarea
          id="description"
          value={formData.budget}
          onChange={handleChange}
        />
      
        <button type="submit">Submit</button>
      </form>
    </div>
    );
    
  
}

export default NewArchitectureProjectForm