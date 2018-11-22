import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Form from "./Form";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    overflowY: "auto",
    [theme.breakpoints.up("sm")]: {
      marginTop: 5,
      height: "calc(100% - 10px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  "@global": {
    "html, body, #root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 48px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 48px)"
    }
  },
  item: {
    [theme.breakpoints.down("xs")]: {
      height: "50%"
    }
  }
});

const exercises = props => {
  const {
    classes,
    exercise,
    exercises,
    category,
    muscles,
    editMode,
    onSelect,
    exercise: {
      id,
      title = "Welcome",
      description = "Select an exercise from the left ListeningStateChangedEvent."
    },
    onSelectEdit,
    onEdit,
    onDelete
  } = props;
  return (
    <Grid container className={classes.container}>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper style={styles.paper}>
          {exercises.map(([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={id}>
                <Typography
                  color="secondary"
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem button key={id} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton
                          color="primary"
                          onClick={() => onSelectEdit(id)}
                        >
                          <Edit />
                        </IconButton>

                        <IconButton
                          color="primary"
                          onClick={() => onDelete(id)}
                        >
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item className={classes.item} xs={12} sm={6}>
        <Paper style={styles.paper}>
          {editMode ? (
            <Form exercise={exercise} muscles={muscles} onSubmit={onEdit} />
          ) : (
            <Fragment>
              <Typography variant="display1" color="secondary">
                {title}
              </Typography>
              <Typography
                variant="subheading"
                style={{ marginTop: 20, height: 500 }}
              >
                {description}
              </Typography>
            </Fragment>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(exercises);
