import {React,useState} from 'react'
import './newwebdevprojectform.css'

const initialState = {
    title: "",
    image_url: "",
    web_url: "",
  
  };

function NewWebDevProjectForm({onAddProject})  {

    const [formData, setFormData] = useState(initialState);
  

    function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("https://portfolio-production-e1a7.up.railway.app/webdevs", {
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
      <label htmlFor="web_url">web_url: </label>
      <input
        type="text"
        id="web_url"
        value={formData.web_url}
        onChange={handleChange}
      />
    
    
      <button className='submit-btn' type="submit">Submit</button>
    </form>
  </div>
  )
}

export default NewWebDevProjectForm