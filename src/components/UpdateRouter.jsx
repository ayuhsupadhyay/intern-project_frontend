import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRouterById, updateRouter } from "../api/api";

function UpdateRouter() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: "", brand: "", model: "", price: "", features: "" });

    useEffect(() => {
        getRouterById(id).then(response => setForm(response.data));
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRouter(id, form).then(() => navigate("/"));
    };

    return (
        <div>
            <h2>Update Router</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={form.name} onChange={handleChange} required />
                <input name="brand" value={form.brand} onChange={handleChange} required />
                <input name="model" value={form.model} onChange={handleChange} required />
                <input name="price" value={form.price} type="number" onChange={handleChange} required />
                <input name="features" value={form.features} onChange={handleChange} required />
                <button type="submit">Update Router</button>
            </form>
        </div>
    );
}

export default UpdateRouter;
