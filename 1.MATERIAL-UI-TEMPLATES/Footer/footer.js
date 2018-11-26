import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const styles = theme => ({
  footerToolbar: {
    float: "none",
    minWidth: "220px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  aLink: {
    textDecoration: "none",
    color: "#FFA441"
  }
});

const footer = props => {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.footerToolbar}>
          <Typography variant="h6" color="inherit" fullWidth>
            Copyright &copy; 2018{" "}
            <a href="https://msulewski.pl/" className={classes.aLink}>
              Marcin Sulewski
            </a>
            .
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(footer);
