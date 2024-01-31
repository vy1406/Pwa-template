import React, { useState } from 'react';
import { CachingService } from '../../services/caching.service';

const postForm = async (formData) => {
    try {
        const response = await fetch('http://localhost:3000/forms', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: formData })
        });
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        return data
      } catch (error) {
        console.error('Error while adding message:', error);
      }
}

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (navigator.onLine) {
        console.log("ONLINE");
        await postForm(formData);
      } else {
        console.log("OFFLINE");        
        await CachingService.save(formData);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
