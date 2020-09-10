import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Me</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h3>She Cried Wolf</h3>
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <h3>My other books</h3>
                    <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
