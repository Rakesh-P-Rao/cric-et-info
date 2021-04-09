import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { saveTeamToList } from "../functionalApiActions";

class AddTeam extends Component {
  constructor(props) {
    super(props);

    let team = {
      id: props.update ? props.team.id : "",
      team: props.update ? props.team.team : "",
      image: props.update ? props.team.image: "",
    };

    this.state = {
      show: false,
      team: team,
    };
  }

  addTeammToList = (data, formAction) => {
    formAction.setSubmitting(true);
    saveTeamToList(data, formAction).then(
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
        <h1>Add Team</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Team
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
              initialValues={this.state.team}
              onSubmit={this.addTeammToList}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Team: </label>
                          <Field
                            type="text"
                            name="team"
                            className="form-control"
                            placeholder="Enter Team"
                          ></Field>
                          <ErrorMessage
                            name="team"
                            style={{ color: "red" }}
                            component="div"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Image: </label>
                          <Field
                            type="file"
                            name="image"
                            className="form-control"
                            placeholder="Enter Image"
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
                      Add Team
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

export default AddTeam;
