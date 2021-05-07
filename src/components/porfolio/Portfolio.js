import React, { Component } from 'react';
import Modal1 from '../../images/portfolio/P1.png'
import Modal2 from '../../images/portfolio/P2.png'

export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="portfolio" class="s-portfolio target-section">
            <div class="row s-portfolio__header">
                <div class="column large-12">
                    <h3>A Few Of My Latest Creations</h3>
                </div>
            </div>

            <div class="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-300-stack folio-list" style={{alignItems: "center", justifyContent: "center"}}>
              <div class="column folio-item" style={{}}>
                <a href="https://javierlozo.github.io/Rental-App/" class="folio-item__thumb" target="_blank">
                    <img src={Modal1}/>
                </a>
              </div>

              <div class="column folio-item" style={{margin: "30px"}}>
                <a href="https://javierlozo.github.io/WeatherCheck-API/" class="folio-item__thumb" target="_blank">
                    <img src={Modal2}/>
                </a>
              </div>
            </div>

         </section>
      </React.Fragment>
    );
  }
}