import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

class AddPlayerStats extends Component {
  constructor(props) {
    super(props);

    let player_stats = {
      id: props.update ? props.player_stats.id : "",
      matches: props.update ? props.player_stats.matches : "",
      innings: props.update ? props.player_stats.innings : "",
      no_of_notOuts: props.update ? props.player_stats.no_of_notOuts : "",
      runs: props.update ? props.player_stats.runs : "",
      high_score: props.update ? props.player_stats.high_score : "",
      average: props.update ? props.player_stats.average : "",
      balls_faced: props.update ? props.player_stats.balls_faced : "",
      strike_rate: props.update ? props.player_stats.strike_rate : "",
      n100: props.update ? props.player_stats.n100 : "",
      n200: props.update ? props.player_stats.n200 : "",
      n50: props.update ? props.player_stats.n50 : "",
      n4: props.update ? props.player_stats.n4 : "",
      n6: props.update ? props.player_stats.n6 : "",
    };

    this.state = {
      show: false,
      player_stats: player_stats,
      //gunNames: this.props.gunNames,
    };
  }

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
        <h1>Add Player Stats</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Player Stats
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
              initialValues={this.state.player_stats}
              onSubmit={this.player_stats}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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

                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
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
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>200's: </label>
                          <Field
                            type="text"
                            name="n200"
                            className="form-control"
                            placeholder="Enter no of double hundreds"
                          ></Field>
                          <ErrorMessage
                            name="n200"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>100's: </label>
                          <Field
                            type="text"
                            name="n100"
                            className="form-control"
                            placeholder="Enter no of centuries"
                          ></Field>
                          <ErrorMessage
                            name="n100"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>50's: </label>
                          <Field
                            type="text"
                            name="n50"
                            className="form-control"
                            placeholder="Enter no of fifties"
                          ></Field>
                          <ErrorMessage
                            name="n50"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>4's: </label>
                          <Field
                            type="text"
                            name="n4"
                            className="form-control"
                            placeholder="Enter no of 4's"
                          ></Field>
                          <ErrorMessage
                            name="n4"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>6's: </label>
                          <Field
                            type="text"
                            name="n6"
                            className="form-control"
                            placeholder="Enter no of 6's"
                          ></Field>
                          <ErrorMessage
                            name="n6"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      {/*                       
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Chooos a gun (optional):</label>
                          <select
                            defaultValue={this.state.bookSlot.arsenal_id}
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("arsenal_id", e.target.value);
                            }}
                          >
                            <option value="">Select Type</option>
                            {this.props.gunNames.map((names) => (
                              <option key={names.id} value={names.id}>
                                {names.name}
                              </option>
                            ))}
                          </select>
                          <ErrorMessage
                            name="arsenal_id"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div> 

                      <div className="form-group" hidden>
                        <Field
                          name="id"
                          value={this.state.bookSlot.profile_id}
                        ></Field>
                      </div>
                      <div className="form-group" hidden>
                        <Field name="id" value={this.state.bookSlot.id}></Field>
                      </div> */}
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
                      Add Player Stats
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

export default AddPlayerStats;
