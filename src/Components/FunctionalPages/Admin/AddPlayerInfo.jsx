import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { savePlayerInfoToList } from "../functionalApiActions";

class AddPlayerInfo extends Component {
  constructor(props) {
    super(props);

    let player_info = {
      id: props.update ? props.player_info.id : "",
      name: props.update ? props.player_info.name : "",
      birth_place: props.update ? props.player_info.birth_place : "",
      born: props.update ? props.player_info.born : "",
      role: props.update ? props.player_info.role : "",
      batting_style: props.update ? props.player_info.batting_style : "",
      bowling_style: props.update ? props.player_info.bowling_style : "",
      nick_name: props.update ? props.player_info.nick_name : "",
      teams: props.update ? props.player_info.teams : "",
      description: props.update ? props.player_info.description : "",
      image: props.update ? props.player_info.image : "",
      team_id: props.update ? props.player_info.team_id : "",
      bowlingStyle_id: props.update ? props.player_info.bowlingStyle_id : "",
      battingStyle_id: props.update ? props.player_info.battingStyle_id : "",
      role_id: props.update ? props.player_info.role_id : "",
    };

    this.state = {
      show: false,
      player_info: player_info,
    };
  }

  addPlayerInfoToList = (data, formAction) => {
    formAction.setSubmitting(true);
    savePlayerInfoToList(data, formAction).then(
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
        <h1>Add Player Info</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Player Info
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
              initialValues={this.state.player_info}
              onSubmit={this.addPlayerInfoToList}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Name: </label>
                          <Field
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter Name"
                          ></Field>
                          <ErrorMessage
                            name="name"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Birth Place: </label>
                          <Field
                            type="text"
                            name="birth_place"
                            className="form-control"
                            placeholder="Enter birth place"
                          ></Field>
                          <ErrorMessage
                            name="birth_place"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Born: </label>
                          <Field
                            type="text"
                            name="born"
                            className="form-control"
                            placeholder="Enter DOB"
                          ></Field>
                          <ErrorMessage
                            name="born"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Role: </label>
                          <select
                            defaultValue={this.state.player_info.role_id}
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("role", e.target.value);
                            }}
                          >
                            <option value="">Select Role</option>
                            <option value="1">Batsman</option>
                            <option value="2">WK-Batsman</option>
                            <option value="3">Batting Allrounder</option>
                            <option value="4">Bowling Allrounder</option>
                            <option value="5">Bowler</option>
                          </select>
                          <ErrorMessage
                            name="role"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Batting style: </label>
                          <select
                            defaultValue={
                              this.state.player_info.battingStyle_id
                            }
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("batting_style", e.target.value);
                            }}
                          >
                            <option value="">Select Batting style</option>
                            <option value="1">Right Handed Bat</option>
                            <option value="2">Left Handed Bat</option>
                          </select>
                          <ErrorMessage
                            name="batting_style"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Bowling style: </label>
                          <select
                            defaultValue={
                              this.state.player_info.bowlingStyle_id
                            }
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("bowling_style", e.target.value);
                            }}
                          >
                            <option value="">Select Bowling style</option>
                            <option value="1">Right-arm fast</option>
                            <option value="2">Right-arm fast-medium</option>
                            <option value="3">Right-arm medium-fast</option>
                            <option value="4">Right-arm medium</option>
                            <option value="5">Right-arm medium-slow</option>
                            <option value="6">Right-arm slow-medium</option>
                            <option value="7">Right-arm slow</option>
                            <option value="8">Left-arm fast</option>
                            <option value="9">Left-arm fast-medium</option>
                            <option value="10">Left-arm medium-fast</option>
                            <option value="11">Left-arm medium</option>
                            <option value="12">Left-arm medium-slow</option>
                            <option value="13">Left-arm slow-medium</option>
                            <option value="14">Left-arm slow</option>
                            <option value="15">Right-arm offbreak</option>
                            <option value="16">Left-arm orthodox</option>
                            <option value="17">Right-arm legbreak</option>
                            <option value="18">Left-arm chinaman</option>
                          </select>
                          <ErrorMessage
                            name="bowling_style"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Teams: </label>
                          <select
                            defaultValue={this.state.player_info.team_id}
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("teams", e.target.value);
                            }}
                          >
                            <option value="">Select Team</option>
                            <option value="1">AFGHANISTAN</option>
                            <option value="2">AUSTRALIA</option>
                            <option value="3">BANGLADESH</option>
                            <option value="4">ENGLAND</option>
                            <option value="5">INDIA</option>
                            <option value="6">IRELAND</option>
                            <option value="7">NEW ZEALAND</option>
                            <option value="8">PAKISTAN</option>
                            <option value="9">SCOTLAND</option>
                            <option value="10">SOUTH AFRICA</option>
                            <option value="11">SRI LANKA</option>
                            <option value="12">WEST INDIES</option>
                            <option value="13">ZIMBABWE</option>
                          </select>
                          <ErrorMessage
                            name="teams"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Description: </label>
                          <Field
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Enter description"
                          ></Field>
                          <ErrorMessage
                            name="description"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Image: </label>
                          <Field
                            type="file"
                            name="image"
                            className="form-control"
                            placeholder="Enter image"
                          ></Field>
                          <ErrorMessage
                            name="image"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
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
                      Add Player Info
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

export default AddPlayerInfo;
