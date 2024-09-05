import { getAllImages } from "../data-service/image-service.js";
import { getAllProjects } from "../data-service/project-service.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const MyWork = () => {

    const [allProjects, setAllProjects] = useState([])
    const [allImages, setAllImages] = useState([])


    const baseURL = "http://localhost:8000"

    useEffect(() =>{
        getAllProjects().then((data) =>{setAllProjects(data)})
        getAllImages().then((data) =>{setAllImages(data)})
    },[])

    const getProjectImage = (projectId) => {
        const projectImages = allImages.filter((image) => image.project === projectId);
        return projectImages.length > 0 ? `${baseURL}${projectImages[0].image}` : null; 
    };


    return (
        <>
            <div className="pb-8">
                <h1 className="text-white text-6xl font-poppins font-semibold mb-4 leading-tight">
                    My<br />Work
                </h1>

                <div className="flex flex-wrap -mx-4">
                    {allProjects.map((project) => (
                        <div key={project.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                {/* Image Section */}
                                {getProjectImage(project.id) && (
                                    <Link to={`/project/${project.id}`}>
                                        <img
                                            className="rounded-t-lg w-full h-64 object-cover"
                                            src={getProjectImage(project.id)}
                                            alt={project.name}
                                        />
                                    </Link>
                                )}

                                {/* Project Info */}
                                <div className="p-5">
                                    <Link to={`/project/${project.id}`}>
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {project.name}
                                        </h5>
                                    </Link>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
