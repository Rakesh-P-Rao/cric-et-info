import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { saveBowlingStylesToList } from "../functionalApiActions";

class AddBowlingStyle extends Component {
  constructor(props) {
    super(props);

    let bowling_style = {
      id: props.update ? props.bowling_style.id : "",
      bowling_style: props.update ? props.bowling_style.bowling_style : "",
    };

    this.state = {
      show: false,
      bowling_style: bowling_style,
    };
  }

  addBowlingStyleToList = (data, formAction) => {
    formAction.setSubmitting(true);
    saveBowlingStylesToList(data, formAction).then(
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
        <h1>Add Bowling Style</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Bowling style
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
              initialValues={this.state.bowling_style}
              onSubmit={this.addBowlingStyleToList}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Bowling style: </label>
                          <Field
                            type="text"
                            name="bowling_style"
                            className="form-control"
                            placeholder="Enter Bowling style"
                          ></Field>
                          <ErrorMessage
                            name="bowling_style"
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
                      Add Bowling style
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

export default AddBowlingStyle;
