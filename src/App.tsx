import { Routes, Route } from "react-router-dom";
import Home from "./modules/home/page/Home";
import Layout from "./_cloner/components/Layout";
const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    );
};

export default App;
