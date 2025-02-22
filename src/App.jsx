import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterList from "./components/RouterList";
import RouterDetails from "./components/RouterDetails";
import AddRouter from "./components/AddRouter";
import UpdateRouter from "./components/UpdateRouter";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RouterList />} />
                <Route path="/router/:id" element={<RouterDetails />} />
                <Route path="/add" element={<AddRouter />} />
                <Route path="/update/:id" element={<UpdateRouter />} />
            </Routes>
        </Router>
    );
}

export default App;
