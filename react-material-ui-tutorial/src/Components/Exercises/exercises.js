import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflow: "auto"
  }
};

const exercises = props => {
  const { exercises } = props;
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return (
              <>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) => (
                    <ListItem button>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </>
            );
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="display1">Welcome:</Typography>
          <Typography
            variant="subheading"
            style={{ marginTop: 20, height: 500 }}
          >
            Select an exercise from the left ListeningStateChangedEvent.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default exercises;
