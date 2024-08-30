import projectsData from "../../src/projects/projects.json";
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
                    <a href="#" className="text-white poppins-medium text-sm hover:text-customRed">Python </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            {project.images.length > 0 && (
                                <img
                                    src={project.images[0].url}
                                    alt={`${project.name} thumbnail`}
                                    className="w-full h-48 object-cover"
                                />
                            )}
                            <div className="p-6">
                                <h2 className="text-white text-2xl font-semibold">{project.name}</h2>
                                <p className="text-gray-400 mt-2">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
