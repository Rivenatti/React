import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateDialog from "../Components/Exercises/CreateDialog";

const Header = ({ muscles, onExerciseCreate }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
            Exercise database
          </Typography>
          <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
