
import { getAllProjects } from "../data-service/project-service.js";
import { useEffect, useState } from "react";

export const MyWork = () => {

    const [allProjects, setAllProjects] = useState([])

    useEffect(() =>{
        getAllProjects().then((data) =>{setAllProjects(data)})
    },[])

    const OptimumMensHealth = allProjects.filter((project) => project.name === "Optimum Mens Health")
    console.log(OptimumMensHealth)

    return (
        <>
            <div className="">
                <h1 className="text-white text-6xl font-poppins font-semibold mb-4 leading-tight">
                    My<br/>Work
                </h1>

                <div className="flex space-x-4 mb-8">
                    <p className="text-white font-poppins font-semibold text-sm"> Filter By</p>
                    <a href="#" className="text-white poppins-medium text-sm hover:text-customRed">All /</a>
                    <a href="#" className="text-white poppins-medium text-sm hover:text-customRed">Full Stack /</a>
                    <a href="#" className="text-white poppins-medium text-sm hover:text-customRed">Python /</a>
                    <a href="#" className="text-white poppins-medium text-sm hover:text-customRed">React(JS) </a>
                </div>
                
            </div>
        </>
    );
}
