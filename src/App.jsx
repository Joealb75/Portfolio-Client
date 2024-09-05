import { Route, Routes } from "react-router-dom";
import { HomeAndNav } from "./home/HomeAndNav.jsx"
import { ProjectDetails } from "./project/projectDetails.jsx";

export const App = () => {

  return(
    <>
    <Routes>
      <Route path="/" element={<HomeAndNav/>} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      
    </Routes>

        
    
    </>
  )
}

