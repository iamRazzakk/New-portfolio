import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../../../src/App.css'
const ProjectDetails = ({ project }) => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                // Find the project with the matching ID
                const selectedProject = data.find(proj => proj.id === parseInt(id));
                setProjectData(selectedProject);
            })
            .catch(error => console.error(error));
    }, [id]);

    // console.log(projectData);

    return (
        <div>
            {projectData ? (
                <div>
                    <h3 className=" article-title text-white lg:flex items-center gap-4"><span className="font-bold text-xl">Project Title: </span> {projectData?.title}</h3>
                    <h3 className=" flex items-center gap-4 lg:text-xl font-bold text-white">
                        Live link: <a target="_blank" className="text-blue-600" href={projectData?.url}>{projectData?.url}</a>
                    </h3>
                    <h3 className="text-white lg:mt-4 lg:flex items-center gap-4"><span className="font-bold text-xl">Technology: </span> {projectData?.technology}</h3>
                    <p className=" lg:mt-4 text-white"><span className="md:text-xl font-bold text-xl">Project Description:</span> {projectData?.description}</p>
                    <figure className="project-img w-full lg:h-96 lg:mt-4 ">
                        <img className="lg:mr-6" src={projectData?.image} alt={projectData.title} loading="lazy" />
                    </figure>
                    <div className="flex justify-center">
                        <Link to='/Projects'>
                            <button className="resume lg:p-3 lg:px-5 mt-1 p-2 px-4 lg:mt-4" type="submit" data-form-btn>
                                Back To Project
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p className="text-white">Loading...</p>
            )}
        </div>
    );
};

export default ProjectDetails;