// import projectsData from "../../src/projects/projects.json";
import { useState, useEffect } from "react";

export const MyWork = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
                            {project.images.length > 0 && (
                                
                                    <img
                                        src={project.images[0].url}
                                        alt={`${project.name} thumbnail`}
                                        className="w-full h-full object-cover"
                                    />
                                
                            )}
                            <div className="h-1/2 p-6 flex flex-col justify-between">
                                <h2 className="text-white text-2xl font-semibold">{project.name}</h2>
                                <p className="text-gray-400 mt-2">{project.description.slice(0, 200)}...</p>
                                <button className="mt-4 px-4 py-2 bg-customRed text-white rounded hover:bg-red-600">
                                    View Project
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
