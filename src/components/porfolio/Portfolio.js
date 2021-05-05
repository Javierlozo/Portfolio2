import React, { Component } from 'react';
import Modal1 from '../../images/portfolio/droplet.jpg'
import Modal2 from '../../images/portfolio/lamp.jpg'
import Modal3 from '../../images/portfolio/minimalismo.jpg'
import Modal4 from '../../images/portfolio/shutterbug.jpg'
import Modal1_1 from '../../images/portfolio/gallery/g-droplet.jpg'


export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-12">
                    <h3>A Few Of My Latest Creations</h3>
                </div>
            </div>

            <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
            
                <div className="column folio-item">
                    <a href="#modal-01" className="folio-item__thumb">
                        <img src="images/portfolio/droplet.jpg" srcset="images/portfolio/droplet.jpg 1x, images/portfolio/droplet@2x.jpg 2x" alt=""/>
                    </a>
                </div> {/* end folio-item */}

                <div className="column folio-item">
                    <a href="#modal-02" className="folio-item__thumb">
                        <img src="images/portfolio/lamp.jpg" srcset="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x" alt=""/>
                    </a>
                </div> {/* end folio-item */}

                <div className="column folio-item">
                    <a href="#modal-03" className="folio-item__thumb">
                        <img src="images/portfolio/minimalismo.jpg" srcset="images/portfolio/minimalismo.jpg 1x, images/portfolio/minimalismo@2x.jpg 2x" alt=""/>
                    </a>
                </div> {/* end folio-item */}

                <div className="column folio-item">
                    <a href="#modal-04" className="folio-item__thumb">
                    <img src="images/portfolio/shutterbug.jpg" srcset="images/portfolio/shutterbug.jpg 1x, images/portfolio/shutterbug@2x.jpg 2x" alt=""/>
                    </a>
                </div> {/* end folio-item */}
            </div> {/* end folio-list */}
        
            <div id="modal-01" hidden>
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-droplet.jpg" alt="" />
                    <div className="modal-popup__desc">
                        <h5>Rental App</h5>
                        <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                    </div>
                    <a href="https://javierlozo.github.io/Rental-App/" className="modal-popup__details">Project link</a>
                </div>
            </div> {/* end modal */}

            <div id="modal-02" hidden>
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-lamp.jpg" alt="" />
                    <div className="modal-popup__desc">
                        <h5>The Lamp</h5>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div> {/* end modal */}
            
            <div id="modal-03" hidden>
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-minimalismo.jpg" alt="" />
                    <div className="modal-popup__desc">
                        <h5>Minimalismo</h5>
                        <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div> {/* end modal */}

            <div id="modal-04" hidden>
                <div className="modal-popup">
                    <img src="images/portfolio/gallery/g-shutterbug.jpg" alt="" />
                    <div className="modal-popup__desc">
                        <h5>Shutterbug</h5>
                        <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                    </div>
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div> {/* end modal */}
            {/* end s-portfolio */}
        </section>
      </React.Fragment>
    );
  }
}