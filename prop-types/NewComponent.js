import React, { Component } from "react";

//------- npm -i prop-types
import PropTypes from "prop-types";

const propTypes = {
  nickname: PropTypes.string.isRequired,
  action: PropTypes.func
};

class NewComponent extends Component {
  render() {
    const { nickname, action } = this.props;
    return (
      <div className="App">
        <h3>Nickname: {nickname}</h3>
        <div onClick={action}>Action</div>
      </div>
    );
  }
}

NewComponent.propTypes = propTypes;

export default NewComponent;
