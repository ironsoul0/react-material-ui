import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const RightPane = (props) => {
  const { exercise } = props;

  return (
    <Paper style={props.styles}>
      {!exercise
        ? <Fragment>
            <Typography variant="display1">
              Welcome!
            </Typography>
            <Typography variant="subheading" style={{marginTop: 20}}>
              Please select an exercise from the list on the left.
            </Typography>
          </Fragment>
        : <Fragment>
            <Typography variant="h3">
              {exercise.title}
            </Typography>
            <Typography variant="display1" style={{marginTop: 20}}>
              {capitalize(exercise.muscles)}
            </Typography>
            <Typography variant="subheading" style={{marginTop: 20}}>
              {exercise.description}
            </Typography>
          </Fragment>
      } 
    </Paper>
  );
}

export default RightPane;