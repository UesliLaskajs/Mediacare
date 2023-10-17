import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import Service from "../pages/Service"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Doctor from "../pages/Doctor/Doctor"
import DocSpeciality from "../pages/Doctor/DocSpeciality"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctor />} />
            <Route path="/doctors/:id" element={<DocSpeciality />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
        </Routes>
    )
}

export default Routers;