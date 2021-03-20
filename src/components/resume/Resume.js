import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="s-resume target-section">
                    {/* <div className="row s-resume__section">
            <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Career</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">Dropbox</h4>
                <p className="resume-block__header-meta">
                    <span>Product Designer</span> 
                    <span className="resume-block__header-date">
                    August 2019 - Present
                    </span>
                </p>
                </div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>
            </div>
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">Facebook</h4>
                <p className="resume-block__header-meta">
                    <span>UI/UX Designer</span> 
                    <span className="resume-block__header-date">
                    August 2016 - July 2019
                    </span>
                </p>
                </div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>
            </div>
            </div>
        </div>
        <div className="row s-resume__section">
            <div className="column large-3 tab-12">
            <h3 className="section-header-allcaps">Education</h3>
            </div>
            <div className="column large-9 tab-12">
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">University of Life</h4>
                <p className="resume-block__header-meta">
                    <span>Master in Graphic Design</span> 
                    <span className="resume-block__header-date">
                    April 2015
                    </span>
                </p>
                </div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>
            </div>
            <div className="resume-block">
                <div className="resume-block__header">
                <h4 className="h3">School of Cool Designers</h4>
                <p className="resume-block__header-meta">
                    <span>B.A. Degree in Graphic Design</span> 
                    <span className="resume-block__header-date">
                    August 2012
                    </span>
                </p>
                </div>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                </p>
            </div>
            </div>
        </div> */}
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Skills</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <p>
                                </p>
                                <ul className="skills">
                                    <a href="#0"><i className="fab fa-html5" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-css3" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-js-square" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-react" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-node" aria-hidden="true" /></a>
                                    <a href="#0"><i className="fab fa-aws" aria-hidden="true" /></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}