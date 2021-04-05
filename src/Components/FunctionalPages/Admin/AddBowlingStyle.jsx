import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

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
              onSubmit={this.bowling_style}
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
                      Add Bowling style
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </div>

        <p>
          <h1>adding bowling style order</h1>
          <option value="">Select Type</option>
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
        </p>
      </div>
    );
  }
}

export default AddBowlingStyle;
