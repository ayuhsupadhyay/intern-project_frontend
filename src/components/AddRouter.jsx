import { useState } from "react";
import { addRouter } from "../api/api";
import { useNavigate } from "react-router-dom";

function AddRouter() {
    const [form, setForm] = useState({ name: "", brand: "", model: "", price: "", features: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form:", form); // Debugging log
    
        try {
            await addRouter(form);
            console.log("Router added successfully"); // Check if API call succeeds
            navigate("/");
        } catch (error) {
            console.error("Error adding router:", error.response ? error.response.data : error);
        }
    };
    

    return (
        <div>
            <h2>Add Router</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="brand" placeholder="Brand" onChange={handleChange} required />
                <input name="model" placeholder="Model" onChange={handleChange} required />
                <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
                <input name="features" placeholder="Features" onChange={handleChange} required />
                <button type="submit">Add Router</button>
            </form>
        </div>
    );
}

export default AddRouter;
