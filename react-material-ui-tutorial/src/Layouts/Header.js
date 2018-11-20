import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit">
            Exercise database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
