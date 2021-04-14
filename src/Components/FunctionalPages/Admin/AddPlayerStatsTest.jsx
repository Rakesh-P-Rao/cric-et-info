import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { savePlayerStatstestToList } from "../functionalApiActions";

class AddPlayerStatsTest extends Component {
  constructor(props) {
    super(props);

      let player_stats_test = {
        id: props.update ? props.player_stats_test.id : "",
        player_stats_test_id: props.update
          ? this.props.player_id.id
          : this.props.player_id.id,
        matches: props.update ? props.player_stats_test.matches : "",
        innings: props.update ? props.player_stats_test.innings : "",
        no_of_notOuts: props.update
          ? props.player_stats_test.no_of_notOuts
          : "",
        runs: props.update ? props.player_stats_test.runs : "",
        high_score: props.update ? props.player_stats_test.high_score : "",
        average: props.update ? props.player_stats_test.average : "",
        balls_faced: props.update ? props.player_stats_test.balls_faced : "",
        strike_rate: props.update ? props.player_stats_test.strike_rate : "",
        hundreds: props.update ? props.player_stats_test.hundreds : "",
        double_hundreds: props.update
          ? props.player_stats_test.double_hundreds
          : "",
        fifties: props.update ? props.player_stats_test.fifties : "",
        fours: props.update ? props.player_stats_test.fours : "",
        sixes: props.update ? props.player_stats_test.sixes : "",
        ducks: props.update ? props.player_stats_test.ducks : "",
        matchesB: props.update ? props.player_stats_test.matchesB : "",
        inningsB: props.update ? props.player_stats_test.inningsB : "",
        balls_bowled: props.update ? props.player_stats_test.balls_bowled : "",
        runsB: props.update ? props.player_stats_test.runsB : "",
        maidens: props.update ? props.player_stats_test.maidens : "",
        wickets: props.update ? props.player_stats_test.wickets : "",
        bBBI: props.update ? props.player_stats_test.bBBI : "",
        bBBM: props.update ? props.player_stats_test.bBBM : "",
        economy: props.update ? props.player_stats_test.economy : "",
        averageB: props.update ? props.player_stats_test.averageB : "",
        strike_rateB: props.update ? props.player_stats_test.strike_rateB : "",
        four_fers: props.update ? props.player_stats_test.four_fers : "",
        fifers: props.update ? props.player_stats_test.fifers : "",
        ten_wickets: props.update ? props.player_stats_test.ten_wickets : "",
      };

    this.state = {
      show: false,
      player_stats_test: player_stats_test,
    };
  }

  addPlayerStatsTestToList = (data, formAction) => {
    formAction.setSubmitting(true);
    savePlayerStatstestToList(data, formAction).then(
      (response) => {
        formAction.setSubmitting(false);
        //this.props.updateList();
        this.handleClose();
        window.location.reload();
      },
      (error) => {
        formAction.setSubmitting(false);
      }
    );
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };

    render() {
    return (
      <div className="container">
        <h1>Add Player Test Stats</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Player Test Stats
            </Button>
          ) : (
            <Button variant="primary" onClick={this.handleShow}>
              Edit
            </Button>
          )}

          <Modal show={this.state.show} onHide={this.handleClose} size="xl">
            <Modal.Header closeButton>
              {!this.props.update ? (
                <Modal.Title>{this.props.title}</Modal.Title>
              ) : (
                <Modal.Title>{this.props.title}</Modal.Title>
              )}
            </Modal.Header>
            <Formik
              // validationSchema={AddGunSchema}
              initialValues={this.state.player_stats_test}
              onSubmit={this.addPlayerStatsTestToList}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Matches: </label>
                          <Field
                            type="text"
                            name="matches"
                            className="form-control"
                            placeholder="Enter matches"
                          ></Field>
                          <ErrorMessage
                            name="matches"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Innings: </label>
                          <Field
                            type="text"
                            name="innings"
                            className="form-control"
                            placeholder="Enter innings"
                          ></Field>
                          <ErrorMessage
                            name="innings"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Runs: </label>
                          <Field
                            type="text"
                            name="runs"
                            className="form-control"
                            placeholder="Enter runs"
                          ></Field>
                          <ErrorMessage
                            name="runs"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Balls_faced: </label>
                          <Field
                            type="text"
                            name="balls_faced"
                            className="form-control"
                            placeholder="Enter Balls faced"
                          ></Field>
                          <ErrorMessage
                            name="balls_faced"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>High score: </label>
                          <Field
                            type="text"
                            name="high_score"
                            className="form-control"
                            placeholder="Enter High score"
                          ></Field>
                          <ErrorMessage
                            name="high_score"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Average: </label>
                          <Field
                            type="text"
                            name="average"
                            className="form-control"
                            placeholder="Enter average "
                          ></Field>
                          <ErrorMessage
                            name="average"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Strike_rate: </label>
                          <Field
                            type="text"
                            name="strike_rate"
                            className="form-control"
                            placeholder="Enter Strike_rate"
                          ></Field>
                          <ErrorMessage
                            name="strike_rate"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>No of notouts: </label>
                          <Field
                            type="text"
                            name="no_of_notOuts"
                            className="form-control"
                            placeholder="Enter no of notouts"
                          ></Field>
                          <ErrorMessage
                            name="no_of_notOuts"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>4's: </label>
                          <Field
                            type="text"
                            name="fours"
                            className="form-control"
                            placeholder="Enter no of 4's"
                          ></Field>
                          <ErrorMessage
                            name="fours"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>6's: </label>
                          <Field
                            type="text"
                            name="sixes"
                            className="form-control"
                            placeholder="Enter no of 6's"
                          ></Field>
                          <ErrorMessage
                            name="sixes"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Ducks: </label>
                          <Field
                            type="text"
                            name="ducks"
                            className="form-control"
                            placeholder="Enter ducks"
                          ></Field>
                          <ErrorMessage
                            name="ducks"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>50's: </label>
                          <Field
                            type="text"
                            name="fifties"
                            className="form-control"
                            placeholder="Enter no of fifties"
                          ></Field>
                          <ErrorMessage
                            name="fifties"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>100's: </label>
                          <Field
                            type="text"
                            name="hundreds"
                            className="form-control"
                            placeholder="Enter no of centuries"
                          ></Field>
                          <ErrorMessage
                            name="hundreds"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>200's: </label>
                          <Field
                            type="text"
                            name="double_hundreds"
                            className="form-control"
                            placeholder="Enter no of double hundreds"
                          ></Field>
                          <ErrorMessage
                            name="double_hundreds"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>MatchesB: </label>
                          <Field
                            type="text"
                            name="matchesB"
                            className="form-control"
                            placeholder="Enter matchesB"
                          ></Field>
                          <ErrorMessage
                            name="matchesB"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>InningsB: </label>
                          <Field
                            type="text"
                            name="inningsB"
                            className="form-control"
                            placeholder="Enter inningsB"
                          ></Field>
                          <ErrorMessage
                            name="inningsB"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Balls_bowled: </label>
                          <Field
                            type="text"
                            name="balls_bowled"
                            className="form-control"
                            placeholder="Enter balls_bowled"
                          ></Field>
                          <ErrorMessage
                            name="balls_bowled"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>RunsB: </label>
                          <Field
                            type="text"
                            name="runsB"
                            className="form-control"
                            placeholder="Enter runsB"
                          ></Field>
                          <ErrorMessage
                            name="runsB"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Maidens: </label>
                          <Field
                            type="text"
                            name="maidens"
                            className="form-control"
                            placeholder="Enter maidens"
                          ></Field>
                          <ErrorMessage
                            name="maidens"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Wickets: </label>
                          <Field
                            type="text"
                            name="wickets"
                            className="form-control"
                            placeholder="Enter wickets"
                          ></Field>
                          <ErrorMessage
                            name="wickets"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>AverageB: </label>
                          <Field
                            type="text"
                            name="averageB"
                            className="form-control"
                            placeholder="Enter averageB"
                          ></Field>
                          <ErrorMessage
                            name="averageB"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Economy: </label>
                          <Field
                            type="text"
                            name="economy"
                            className="form-control"
                            placeholder="Enter economy"
                          ></Field>
                          <ErrorMessage
                            name="economy"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Strike rateB: </label>
                          <Field
                            type="text"
                            name="strike_rateB"
                            className="form-control"
                            placeholder="Enter strike_rateB"
                          ></Field>
                          <ErrorMessage
                            name="strike_rateB"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>BBI: </label>
                          <Field
                            type="text"
                            name="bBBI"
                            className="form-control"
                            placeholder="Enter BBI"
                          ></Field>
                          <ErrorMessage
                            name="bBBI"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>BBM: </label>
                          <Field
                            type="text"
                            name="bBBM"
                            className="form-control"
                            placeholder="Enter BBM"
                          ></Field>
                          <ErrorMessage
                            name="bBBM"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Four'fers: </label>
                          <Field
                            type="text"
                            name="four_fers"
                            className="form-control"
                            placeholder="Enter four_fers"
                          ></Field>
                          <ErrorMessage
                            name="four_fers"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Fifers: </label>
                          <Field
                            type="text"
                            name="fifers"
                            className="form-control"
                            placeholder="Enter fifers"
                          ></Field>
                          <ErrorMessage
                            name="fifers"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2 col-md-2 mb-1">
                        <div className="form-group">
                          <label>Ten_wickets: </label>
                          <Field
                            type="text"
                            name="ten_wickets"
                            className="form-control"
                            placeholder="Enter ten_wickets"
                          ></Field>
                          <ErrorMessage
                            name="ten_wickets"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="form-group" hidden>
                        <Field
                          name="id"
                          value={
                            this.state.player_stats_test.player_stats_test_id.id
                          }
                        ></Field>
                      </div>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                      Close
                    </Button>
                    <Button
                      variant={isSubmitting ? "secondary" : "primary"}
                      type="submit"
                    >
                      Add Player Test Stats
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AddPlayerStatsTest;
