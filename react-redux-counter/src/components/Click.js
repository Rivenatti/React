import React from "react";
import { connect } from "react-redux";

const Click = props => {
  return (
    <div>
      <h1>Clicked: {props.clicked}</h1>
      <button onClick={props.btnClicked}>click</button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    clicked: state.clicked
  };
}

function mapDispatchToProps(dispatch) {
  return {
    btnClicked: () => {
      const action = { type: "BTNCLICKED" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Click);
