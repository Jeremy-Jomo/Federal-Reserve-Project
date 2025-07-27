import { useState, useEffect } from "react"
import './Interpol.css'
import AddCriminalForm from "./AddCriminalForm"
import { useNavigate } from 'react-router-dom'


function Interpol(){
    const [interpolDatabase, SetInterpolData ] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://json-server-ymmn.onrender.com/criminals')
        .then(res => res.json())
        .then(data => SetInterpolData(data))
    },[])
    const filteredCriminals = interpolDatabase.filter((criminal) =>
        criminal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        criminal.crimelevel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        criminal.gender.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleDelete = (id) => {
        fetch(`https://json-server-ymmn.onrender.com/criminals/${id}`, {
            method: 'DELETE',
        })
        .then((res) => {
            if(res.ok){
                SetInterpolData(prev => prev.filter(criminal => criminal.id !== id));
            }else{
                console.error('Failed to delete criminal')
            }
        })
        .catch(err => console.error('Error deleting:', err))
    }
    const handleAddCriminal = (newCriminal) => {
        SetInterpolData(prev => [newCriminal, ...prev])
    }

    return(
        <div>
            <div className='headercontainer'>
                <div className="header1">
                    <div className='header11'>
                        <p>INTER-<br/>POL</p>
                    </div>
                    <div>
                        <strong>Most Wanted</strong><br/>
                        <small className='header12'>International Criminal Police Organization</small>
                    </div>
                    </div>
                    <div className="totals">
                        <h3>Total Cases: {filteredCriminals.length}</h3>
                    </div>
            </div>
            <div className="ole">
                <input 
                type="search" 
                placeholder="Search by name,gender or crime level..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                />
                <button className="add-btn" onClick={() => setShowForm(true)}>
                    Add Crimnal
                </button>
                <button className="back-btn"
                    onClick={()=> navigate(-1)}
                >
                    Back
                </button>

            </div>

            <p id="total">showing {filteredCriminals.length} of {interpolDatabase.length}</p>

            {showForm && (
            <AddCriminalForm
            onAdd={handleAddCriminal}
            onClose={() => setShowForm(false)}
            />)}
            <div className="card-container">
            {filteredCriminals.map((criminal, index) => (
                <div className="card" key={index}>
                    <img src={criminal.image} alt={criminal.name} />
                    <h3>Name: {criminal.name}</h3>
                    <p>Age: {criminal.age}</p>
                    <p>Gender: {criminal.gender}</p>
                    <p>Description: {criminal.description}</p>
                    <p>CrimeLevel: {criminal.crimelevel}</p>
                    <p>Charges: {criminal.wantedfor}</p>
                    <p>Last Seen: {criminal.lastseen}</p>
                    <p>Bounty: ${criminal.bounty}</p>
                    <div className="btnholder">
                    <button id="editbtn"
                        onClick={()=> navigate(`/edit/${criminal.id}`)}
                    >Edit</button>
                    <button id="deletebtn"
                        onClick={() => handleDelete(criminal.id)}
                    >Delete</button>
                    </div>
                </div>
            ))}
        </div>

        </div>
    )}
export default Interpol