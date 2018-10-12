import React from 'react';
import { Grid } from '@material-ui/core';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

const styles = {
  padding: 20,
  marginTop: 10,
  marginBottom: 20,
  height: '500px',
  overflowY: 'auto'
}

const Exercises = (props) => {
  const { exercises, category, exercise, exercisePressed } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs>
        <LeftPane 
          styles={styles} 
          exercises={exercises} 
          category={category} 
          exercisePressed={exercisePressed}
        />
      </Grid>
      <Grid item xs>
        <RightPane 
          styles={styles} 
          exercise={exercise} 
        />
      </Grid>
    </Grid>
  );
}

export default Exercises;
