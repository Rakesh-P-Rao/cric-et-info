import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { saveStadiumToList, getAllTeamsList } from "../functionalApiActions";

class AddStadium extends Component {
  constructor(props) {
    super(props);

    let stadium = {
      id: props.update ? props.stadium.id : "",
      name: props.update ? props.stadium.name : "",
      opened: props.update ? props.stadium.opened : "",
      capacity: props.update ? props.stadium.capacity : "",
      ends: props.update ? props.stadium.ends : "",
      city: props.update ? props.stadium.city : "",
      home_to: props.update ? props.stadium.home_to : "",
      description: props.update ? props.stadium.description : "",
      image: props.update ? props.stadium.image : "",
      country: props.update ? props.stadium.team_id : "",
    };

    this.state = {
      show: false,
      stadium: stadium,
      allTeamsList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfTeams();
  }

  getAllListOfTeams = (type) => {
    getAllTeamsList(type).then((response) => {
      this.setState({
        allTeamsList: response,
      });
    });
  };

  addStadiumToList = (data, formAction) => {
    formAction.setSubmitting(true);
    saveStadiumToList(data, formAction).then(
      (response) => {
        formAction.setSubmitting(false);
        // this.props.updateList();
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
        <>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Stadium
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
              initialValues={this.state.stadium}
              onSubmit={this.addStadiumToList}
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
                          <label>Opened : </label>
                          <Field
                            type="text"
                            name="opened"
                            className="form-control"
                            placeholder="Year opened"
                          ></Field>
                          <ErrorMessage
                            name="opened"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Capacity: </label>
                          <Field
                            type="text"
                            name="capacity"
                            className="form-control"
                            placeholder="Enter capacity"
                          ></Field>
                          <ErrorMessage
                            name="capacity"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Ends: </label>
                          <Field
                            type="text"
                            name="ends"
                            className="form-control"
                            placeholder="Enter ends"
                          ></Field>
                          <ErrorMessage
                            name="ends"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>City: </label>
                          <Field
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="Enter city"
                          ></Field>
                          <ErrorMessage
                            name="city"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Country:</label>
                          <select
                            defaultValue={this.state.stadium.country}
                            className="form-control"
                            onChange={(e) => {
                              setFieldValue("country", e.target.value);
                            }}
                          >
                            <option value="">Select Country</option>
                            {this.state.allTeamsList.map((names) => (
                              <option key={names.id} value={names.id}>
                                {names.team}
                              </option>
                            ))}
                          </select>
                          <ErrorMessage
                            name="country"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Home to: </label>
                          <Field
                            type="text"
                            name="home_to"
                            className="form-control"
                            placeholder="Enter Home to"
                          ></Field>
                          <ErrorMessage
                            name="home_to"
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
                      <div className="form-group" hidden>
                        <Field name="id" value={this.state.stadium.id}></Field>
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
                      Add Stadium
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </>
      </div>
    );
  }
}

export default AddStadium;
