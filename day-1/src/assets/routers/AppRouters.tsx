import { Route, Routes } from "react-router-dom"
import Login from "../../pages/login";
import Dashboard from "../../pages/dashboard";

const AppRoutes = () => {
  return (
    <div>

    <Routes>
        <Route path="/login" element={<Login />}/>

        <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
      
    </div>
  )
}

export default AppRoutes