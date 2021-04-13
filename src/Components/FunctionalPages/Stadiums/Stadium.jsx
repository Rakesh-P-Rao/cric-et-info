import React, { Component } from "react";
import { getStadiumById } from "../functionalApiActions";

class Stadium extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stadiumInfo: [],
      stadium: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getStadiumInfoById();
  }

  getStadiumInfoById = (id) => {
    getStadiumById(this.state.stadium.id).then((response) => {
      this.setState({
        stadiumInfo: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.stadiumInfo.map((sInfo) => (
          <>
            <div className="card my-3">
              <img
                src=""
                className="card-img-top"
                style={{ height: "300px" }}
                alt="stadium dp here"
              />
              <div className="card-body">
                <div>
                  <h1>{sInfo.name}</h1>
                  <h3>
                    {sInfo.city}, {sInfo.country}
                  </h3>
                </div>
                <div className="row my-3">
                  <div className="col-3 mb-2">
                    <p className="card-text text-dark fs-5 fw-bold">
                      Capacity:
                    </p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">{sInfo.capacity}</p>
                  </div>
                  <div className="col-3 mb-2">
                    <p className="card-text text-dark fs-5 fw-bold">Ends:</p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">{sInfo.ends}</p>
                  </div>
                  <div className="col-3 mb-2">
                    <p className="card-text text-dark fs-5 fw-bold">Home To:</p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">{sInfo.home_to}</p>
                  </div>
                  <div className="col-3 mb-2 fw-bold">
                    <p className="card-text text-dark fs-5">Location:</p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">
                      {sInfo.city}, {sInfo.country}
                    </p>
                  </div>
                  <div className="col-3 mb-2 fw-bold">
                    <p className="card-text text-dark fs-5">Opened:</p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">{sInfo.opened}</p>
                  </div>
                  <div className="col-3 mb-2 fw-bold">
                    <p className="card-text text-dark fs-5">Description:</p>
                  </div>
                  <div className="col-9 mb-2">
                    <p className="card-text text-dark fs-5">
                      {sInfo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }
}

export default Stadium;
