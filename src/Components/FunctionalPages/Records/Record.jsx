import React, { Component } from "react";

class Record extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="card border-dark mb-3">
          <div className="card-body text-dark row">
            <h2 className="card-title text-center">
              {this.props.record}
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Record;
