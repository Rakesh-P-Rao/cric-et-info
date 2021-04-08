import React, { Component } from 'react';

class StadiumForList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="container">
            <div
              className="card mb-3"
              style={{ maxWidth: "1200px", height: "180px" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={this.props.sList.image} alt="stadium dp here" />
                </div>
                <div className="col-md-8">
                  <div className="card-body pt-lg-5 ">
                    <h2 className="card-text pt-lg-4">
                      {this.props.sList.name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default StadiumForList;