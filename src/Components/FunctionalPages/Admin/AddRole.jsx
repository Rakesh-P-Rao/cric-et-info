import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { saveRoleToList } from "../functionalApiActions";

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
    };
  }

  addRoleToList = (data, formAction) => {
    formAction.setSubmitting(true);
    saveRoleToList(data, formAction).then(
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
              initialValues={this.state.role}
              onSubmit={this.addRoleToList}
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
