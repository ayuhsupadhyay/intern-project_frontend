import { useEffect, useState } from "react";
import { getRouters, deleteRouter } from "../api/api";
import { useNavigate } from "react-router-dom";

function RouterList() {
    const [routers, setRouters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchRouters();
    }, []);

    const fetchRouters = () => {
        getRouters().then(response => setRouters(response.data));
    };

    const handleDelete = (id) => {
        deleteRouter(id).then(() => fetchRouters());
    };

    return (
        <div>
            <h2>Routers</h2>
            <button onClick={() => navigate("/add")}>Add Router</button>
            <ul>
                {routers.map(router => (
                    <li key={router.id}>
                        {router.name} - {router.brand} 
                        <button onClick={() => navigate(`/update/${router.id}`)}>Edit</button>
                        <button onClick={() => handleDelete(router.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RouterList;
