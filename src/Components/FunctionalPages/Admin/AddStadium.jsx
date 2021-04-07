import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
      country: props.update ? props.stadium.country : "",
      location: props.update ? props.stadium.location : "",
      home_to: props.update ? props.stadium.home_to : "",
      description: props.update ? props.stadium.description : "",
    };

    this.state = {
      show: false,
      stadium: stadium,
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
        <h1>Add Stadium</h1>
        <div>
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
              // validationSchema={AddGunSchema}
              initialValues={this.state.stadium}
              onSubmit={this.stadium}
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
                          <label>Opened on: </label>
                          <Field
                            type="text"
                            name="opened"
                            className="form-control"
                            placeholder="Enter opening year"
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
                            placeholder="Enter stadium capacity"
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
                          <label>Country: </label>
                          <Field
                            type="text"
                            name="country"
                            className="form-control"
                            placeholder="Enter country"
                          ></Field>
                          <ErrorMessage
                            name="country"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-1">
                        <div className="form-group">
                          <label>Location: </label>
                          <Field
                            type="text"
                            name="location"
                            className="form-control"
                            placeholder="Enter location"
                          ></Field>
                          <ErrorMessage
                            name="location"
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
                      Add Stadium
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

export default AddStadium;
