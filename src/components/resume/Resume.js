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
                                    <a href="https://html.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.EV3cuJCFmwUPTUVtWrRIIgAAAA%26pid%3DApi&f=1" style={{height: "100px"}}/></a>
                                    <a href="https://css3-tutorial.net/"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0" style={{height: "100px"}}/></a>
                                    <a href="https://www.javascript.com/"><img src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5b30" style={{height: "100px"}}/></a>
                                    <a href="https://reactjs.org/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Uw88lyFAvnP9xLfdp9zaBwAAAA%26pid%3DApi&f=1" style={{height: "100px"}}/></a>
                                    <a href="https://nodejs.org/en/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/d/d9/20160327233836!Node.js_logo.svg/120px-Node.js_logo.svg.png" style={{height: "100px"}}/></a>
                                    <a href="https://aws.amazon.com/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.dZuDnjC6O3K29YQ6VCo9EwHaHa%26pid%3DApi&f=1" style={{height: "100px"}}/></a>
                                    <a href="https://www.mongodb.com/"><img src="serverdensity.wpengine.com/wp-content/uploads/2010/02/logo_mongodb.png" style={{height: "100px"}}/></a>
                                    <a href="https://www.mysql.com/"><img src="https://www.layer2solutions.com/images/default-source/solultions/mysql-logo.tmb-height166.png?sfvrsn=29a9b181_1" style={{height: "100px"}}/></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}