import {React,useState} from 'react'

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
        fetch("/webdevs", {
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
    <h2>New WebDevelopment Project</h2>
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
      <label htmlFor="content">web_url: </label>
      <input
        type="text"
        id="web_url"
        value={formData.web_url}
        onChange={handleChange}
      />
    
    
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default NewWebDevProjectForm