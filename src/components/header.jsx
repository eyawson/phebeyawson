import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <p class="more">
                    Now available on
                  <a
                      href="http://kyanitepublishing.com/product/she-cried-wolf/"
                      aria-label="link to book store"
                      rel="noopener noreferrer"
                      target="_blank"
                    > Kyanite</a>,
                  <a
                      href="https://www.amazon.com/She-Cried-Wolf-Phebe-Yawson-ebook/dp/B07WVQGFXJ/ref=sr_1_1?crid=125VXZBNBWW1&keywords=she+cried+wolf+phebe+yawson&qid=1568994090&sprefix=she+cried+wolf+p%2Caps%2C136&sr=8-1"
                      aria-label="link to book store"
                      rel="noopener noreferrer"
                      target="_blank"
                    > Amazon</a>,
                  <a
                      href="https://www.barnesandnoble.com/w/she-cried-wolf-phebe-yawson/1133061505?ean=9781949645910"
                      aria-label="link to book store"
                      rel="noopener noreferrer"
                      target="_blank"
                    > Barnes and Nobles</a>,
                  <a
                      href="https://www.secondsale.com/i/she-cried-wolf/9781949645910?gclid=EAIaIQobChMIs72J8MO75QIVgZ6zCh2YjQRUEAYYASABEgK2ivD_BwE"
                      aria-label="link to book store"
                      rel="noopener noreferrer"
                      target="_blank"
                    > Target</a>,
                  <a
                      href="https://www.kobo.com/us/en/search?query=she+cried+wolf"
                      aria-label="link to book store"
                      rel="noopener noreferrer"
                      target="_blank"
                    > Kobo</a>, and all of your favorite
                  <a
                      href="https://www.google.com/search?q=she+cried+wolf+by+phebe+yawson&oq=She+Cried&aqs=chrome.0.69i59j0l3j69i60l2.3615j0j9&sourceid=chrome&ie=UTF-8"
                      aria-label="google search query on She Cried Wolf"
                      rel="noopener noreferrer"
                      target="_blank"
                    > bookstores</a>.
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    She Cried Wolf
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
