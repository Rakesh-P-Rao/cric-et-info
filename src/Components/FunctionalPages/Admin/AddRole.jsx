import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

class AddRole extends Component {
  constructor(props) {
    super(props);

    let role = {
      id: props.update ? props.role.id : "",
      role: props.update ? props.role.role : "",
    };

    this.state = {
      show: false,
      role: role,
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
        <h1>Add Role</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Role
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
              initialValues={this.state.role}
              onSubmit={this.role}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Role: </label>
                          <Field
                            type="text"
                            name="role"
                            className="form-control"
                            placeholder="Enter Role"
                          ></Field>
                          <ErrorMessage
                            name="role"
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
                      Add Role
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

export default AddRole;
