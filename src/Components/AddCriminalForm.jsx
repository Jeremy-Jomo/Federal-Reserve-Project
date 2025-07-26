import { useState } from "react";
import './AddCriminalForm.css';

function AddCriminalForm({ onAdd, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    description: '',
    crimelevel: '',
    wantedfor:'',
    lastseen: '',
    bounty: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('https://json-server-ymmn.onrender.com/criminals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(newCriminal => {
      onAdd(newCriminal);  // Pass new data to parent
      onClose();           // Close the form after submission
    })
    .catch(err => console.error("Failed to add criminal:", err));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Criminal</h3>
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          name={field}
          value={formData[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          required
        />
      ))}
      <div className="form-actions">
        <button type="submit">Add</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
}

export default AddCriminalForm;
