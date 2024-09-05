import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectByID } from "../data-service/project-service.js"; 
import { getAllImages } from "../data-service/image-service.js";
import { getAllTags } from "../data-service/tags-service.js";

export const ProjectDetails = () => {
    const { id } = useParams(); 
    const [project, setProject] = useState(null);
    const [projectImages, setProjectImages] = useState([]);
    const [alltags, setAllTags] = useState([])

    const baseURL = "http://localhost:8000"; 

    useEffect(() => {
        getProjectByID(id).then((data) => setProject(data));
        getAllTags().then((data) =>{setAllTags(data)})
        getAllImages().then((images) => {
            const relatedImages = images.filter((image) => image.project === parseInt(id));
            setProjectImages(relatedImages);
        });
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }

    const relatedProjectTags = alltags.filter((tag) => project.tags.includes(tag.id));
    console.log(relatedProjectTags);

    console.log(project)
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-6 text-gray-900">{project.name}</h1>
                <p className="text-lg text-gray-700 mb-4">{project.description}</p>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectImages.map((image) => (
                        <img
                            key={image.id}
                            className="w-full h-64 object-cover rounded-lg"
                            src={`${baseURL}${image.image}`}
                            alt={image.caption || "Project Image"}
                        />
                    ))}
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Tags:</h2>

                    <ul className="list-disc pl-5">
                        {relatedProjectTags.map((tag) => (
                            <p key={tag.id} className="text-gray-700">
                                {tag.name}
                            </p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

