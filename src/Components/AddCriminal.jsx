import {useState , useEffect } from "react"
function AddCriminal(){

    const [AddedData, setAddedData] = useState([])

    useEffect(() => {
        fetch('https://687e0f0cc07d1a878c311456/users/wanted')
        .then(res => res.json())
        .then(data => console.log(data)
        )
    }, [])
}
export default AddCriminal