import React from 'react';

const ProjectCard = (props) => {
    const badges = props.badges;
    let demoBtn;
    if (props.demo) {
        demoBtn = <a type="button" className="btn btn-dark" href={props.demoLink}><i class="fa fa-eye mr-1"></i>Live Demo</a>
    }
    return (
        <>
            <div className="row">
                <div className="col-11 col-sm-9 col-md-7 mt-3 mb-3 projectsBackground" style={props.background}>
                    <div className="projectsContent">
                        <div className="row">
                            <div className={"col-12 col-md-8 order-2 " + props.classText}>
                                <div className="">
                                    <h3> {props.title} </h3>
                                    <div className="row ml-1">
                                        {
                                            badges.map((item, index) => {
                                                return (
                                                    <span class="badge badge-primary m-1" key={index}>{item}</span>
                                                );
                                            })
                                        }
                                    </div>

                                    <p className="mt-1"><pre className="preContent">{props.desc}</pre></p>
                                    <a type="button" className="btn btn-dark mr-1" href={props.sourceCode}><i className="fa fa-github mr-1"></i>Source code</a>
                                    {demoBtn}

                                </div>
                            </div>
                            <div className={"col-12 col-md-4 order-1 " + props.classImg}>
                                <img alt="projectImages" className="projectImages" src={process.env.PUBLIC_URL + './images/projects/' + props.imgsrc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;