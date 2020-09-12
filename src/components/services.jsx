import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Social(ly)</h2>
          </div>
          <aside className="col-md-6">
            <a
              class="twitter-timeline"
              data-dnt="true"
              data-theme="light"
              data-link-color="#e7d1a3"
              href="https://twitter.com/powerndreams?ref_src=twsrc%5Etfw"
            >Tweets by powerndreams</a
            >
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </aside>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {" "}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.line1}</p>
                    <p>{d.line2}</p>
                    <p>{d.line3}</p>
                    <p>{d.line4}</p>
                    <p>{d.line5}</p>
                    <p>{d.line6}</p>
                    <p>{d.line7}</p>
                    <p>{d.line8}</p>
                    <p>{d.line9}</p>
                    <p>{d.line10}</p>
                    <p>{d.line11}</p>
                    <p>{d.line12}</p>
                    <p>{d.line13}</p>
                    <p>{d.line14}</p>
                    <p>{d.line15}</p>
                  </div>
                </div>
              ))
              : "loading"}
            <p>
              <a className="poetry"
                href="https://powerndreams.wordpress.com/etched-in-blood/"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="link to Phebe's blog"
              >Click here to read more poetry ...</a
              >
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
