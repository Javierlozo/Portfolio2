import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume" className="s-resume target-section">

                    {/* Front and back end */}
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Front and Back End Skills</h3>
                        </div>

                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <ul className="skills">
                                    <div>
                                        <a href="https://html.com/" target="_blank"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EV3cuJCFmwUPTUVtWrRIIgAAAA%26pid%3DApi&f=1" style={{height: "75px"}}/></a>
                                        <a href="https://css3-tutorial.net/" target="_blank"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0" style={{height: "75px"}}/></a>
                                        <a href="https://www.javascript.com/" target="_blank"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5b30" style={{height: "75px"}}/></a>
                                        <a href="https://reactjs.org/" target="_blank"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Uw88lyFAvnP9xLfdp9zaBwAAAA%26pid%3DApi&f=1" style={{height: "75px"}}/></a>
                                        <a href="https://nodejs.org/en/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/d/d9/20160327233836!Node.js_logo.svg/120px-Node.js_logo.svg.png" style={{height: "75px"}}/></a>
                                        <a href="https://www.mongodb.com/" target="_blank"><img src="https://www.w3schools.in/wp-content/uploads/mongodb-logo.png" style={{height: "75px"}}/></a>
                                        <a href="https://www.mysql.com/" target="_blank"><img src="https://www.layer2solutions.com/images/default-source/solultions/mysql-logo.tmb-height166.png?sfvrsn=29a9b181_1" style={{height: "75px"}}/></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>


                    {/* Tools and Software */}
                    <div className="row s-resume__section">
                        <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Tools and Software</h3>
                        </div>

                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <ul className="skills">
                                    <div>
                                        <a href="https://www.linux.org/" target="_blank"><img src="https://docs.espressif.com/projects/esp-idf/en/release-v3.2/_images/linux-logo2.png" style={{height: "75px"}}/></a>
                                        <a href="https://aws.amazon.com/" target="_blank"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dZuDnjC6O3K29YQ6VCo9EwHaHa%26pid%3DApi&f=1" style={{height: "75px"}}/></a>
                                        <a href="https://github.com/" target="_blank"><img src="https://major.io/wp-content/uploads/2014/08/github-150x150.png" style={{height: "75px"}}/></a>
                                        <a href="https://www.postman.com/" target="_blank"><img src="https://media.glassdoor.com/sqll/1926052/postman-squarelogo-1522909460182.png" style={{height: "75px"}}/></a>
                                        <a href="https://www.wireshark.org/" target="_blank"><img src="https://seeklogo.com/images/W/wireshark-logo-FE3D32C8FD-seeklogo.com.gif" style={{height: "75px"}}/></a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>

                        {/* <div className="column large-3 tab-12">
                            <h3 className="section-header-allcaps">Interests</h3>
                        </div>
                        <div className="column large-9 tab-12">
                            <div className="resume-block">
                                <ul className="skills">
                                    <div>
                                        <li>Software Development</li>
                                        <li>Cybersecurity</li>
                                    </div>
                                </ul>
                            </div>
                        </div> */}
                </section>
            </React.Fragment>
        );
    }
}