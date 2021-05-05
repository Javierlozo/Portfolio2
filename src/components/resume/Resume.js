import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="s-resume target-section">
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Skills</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <p>
                                </p>
                                <ul className="skills">
                                    <a href="https://html.com/"><i className="fab fa-html5" aria-hidden="true" /></a>
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