import React, { Component } from 'react';
import StadiumForList from './StadiumForList';

class Stadiums extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="container">
            <h1>onclick should go to that particular stadium</h1>
            <div className="row">
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
              <div className="col-12">
                <StadiumForList
                  stadiumImage="stadium image here"
                  stadiumName="stadium name here"
                />
              </div>
            </div>
          </div>
        );
    }
}
 
export default Stadiums;