import React from 'react';
import ProjectCard from './ProjectCard';
import Data from '../config.json';

const Projects = () => {
    const projects = Data.projects;

    let background={};
    let classText = "";
    let classImg = "";
    return (
        <>
            <section id="projectContainer" className="">
                <div className="row"><h1 className="mx-auto mb-5" style={{color:"white"}}>My Projects</h1></div>
                {projects.map((item, index) => {
                    if(index%2===1)
                    {
                        classText = "order-md-2"; 
                        classImg="order-md-1";
                        background = {backgroundColor:"white", marginLeft:"auto", borderTopRightRadius: "0", borderBottomRightRadius: "0"};
                    }
                    else
                    {
                        
                        classText = "order-md-1";
                        classImg="order-md-2";
                        background={marginRight:"auto",   borderTopLeftRadius: "0", borderBottomLeftRadius: "0"};
                    }
                    return (
                        <ProjectCard
                        imgsrc={item.image}
                        desc={item.desc}
                        title={item.title}
                        sourceCode={item.sourceCode} 
                        demo={item.demo} 
                        demoLink={item.demoLink}
                        badges={item.badges} 
                        classText={classText} 
                        classImg={classImg}
                        background={background}
                        key={index}
                        />
                    );
                })}
            </section>
        </>
    );
};

export default Projects;