import React, { Fragment } from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const LeftPane = (props) => {
  const { exercises, category, exercisePressed } = props;

  return (
    <Paper style={props.styles}>
      {exercises.map(([group, exercises]) => (
        group === category || category === 'all' 
          ? <Fragment key={group}>
              <Typography
                variant="h5"
                style={{textTransform: 'capitalize'}}
              >
                {group}
              </Typography>
              <List component="ul"> 
                {exercises.map(exercise => (
                  <ListItem key={exercise.title} button onClick={() => exercisePressed(exercise)}>
                    <ListItemText 
                      primary={exercise.title} 
                    />
                  </ListItem>
                ))} 
              </List> 
            </Fragment> 
          : null    
      ))}
    </Paper>
  );
}

export default LeftPane;