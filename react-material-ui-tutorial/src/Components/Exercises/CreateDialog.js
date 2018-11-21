import React, { Fragment, Component } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Form from "./Form";

class CreateDialog extends Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleFormSubmit = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state,
      { muscles } = this.props;

    return (
      <Fragment>
        <Button variant="fab" onClick={this.handleToggle} mini>
          <AddIcon />
        </Button>
        <Dialog open={open} onClose={this.handleToggle}>
          <DialogTitle>Create a new exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill out the form below.</DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleFormSubmit} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default CreateDialog;
