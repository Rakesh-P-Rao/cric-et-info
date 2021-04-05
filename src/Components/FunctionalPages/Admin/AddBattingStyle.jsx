import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

class AddBattingStyle extends Component {
  constructor(props) {
    super(props);

    let batting_style = {
      id: props.update ? props.batting_style.id : "",
      batting_style: props.update ? props.batting_style.batting_style : "",
    };

    this.state = {
      show: false,
      batting_style: batting_style,
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
        <h1>Add Batting Style</h1>
        <div>
          {!this.props.update ? (
            <Button variant="danger" onClick={this.handleShow}>
              Add Batting style
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
              initialValues={this.state.team}
              onSubmit={this.team}
              enableReinitialize={true}
            >
              {({ errors, isSubmitting, setFieldValue }) => (
                <Form enctype="multipart/form-data">
                  <Modal.Body>
                    <div className="row">
                      <div className="col-xl-12 col-lg-12 col-md-12 mb-1">
                        <div className="form-group">
                          <label>Batting style: </label>
                          <Field
                            type="text"
                            name="batting_style"
                            className="form-control"
                            placeholder="Enter Batting style"
                          ></Field>
                          <ErrorMessage
                            name="batting_style"
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
                      Add Batting style
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </div>
        <p>
          <h1>add batting style in this order</h1>
          <option value="">Select Type</option>
          <option value="1">Right Handed Bat</option>
          <option value="2">Left Handed Bat</option>
        </p>
      </div>
    );
  }
}

export default AddBattingStyle;
