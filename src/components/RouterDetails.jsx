import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRouterById } from "../api/api";

function RouterDetails() {
    const { id } = useParams();
    const [router, setRouter] = useState(null);

    useEffect(() => {
        getRouterById(id).then(response => setRouter(response.data));
    }, [id]);

    if (!router) return <p>Loading...</p>;

    return (
        <div>
            <h2>Router Details</h2>
            <p>Name: {router.name}</p>
            <p>Brand: {router.brand}</p>
            <p>Model: {router.model}</p>
            <p>Price: ${router.price}</p>
            <p>Features: {router.features}</p>
        </div>
    );
}

export default RouterDetails;
