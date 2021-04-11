import React, { Component } from "react";
import StadiumForList from "./StadiumForList";
import {
  getAllStadiumsList
} from "../functionalApiActions";

class Stadiums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allStadiumsList: [],
      stadium: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getAllListOfStadiums();
  }

  getAllListOfStadiums = (type) => {
    getAllStadiumsList(type).then((response) => {
      this.setState({
        allStadiumsList: response,
      });
    });
  };

  render() {
    console.log(this.state.goToStadium);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            {this.state.allStadiumsList.map((sList) => (
              <StadiumForList sList={sList} key={sList.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Stadiums;
