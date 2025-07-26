import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './EditCriminal.css';

function EditCriminal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch(`https://json-server-ymmn.onrender.com/criminals/${id}`)
      .then(res => res.json())
      .then(data => setFormData(data));
  }, [id]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    fetch(`https://json-server-ymmn.onrender.com/criminals/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(() => navigate(-1)); // Go back after save
  };

  if (!formData) return <p>Loading...</p>;

  return (
    <div className="edit-form">
      <h2>Edit Criminal</h2>
      {Object.entries(formData).map(([key, value]) => (
        key !== 'id' && (
          <input
            key={key}
            name={key}
            value={value}
            onChange={handleChange}
            placeholder={key}
          />
        )
      ))}
      <div className="edit-actions">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default EditCriminal;
