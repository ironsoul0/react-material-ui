import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = (props) => {
  const { muscles, category } = props;
  const index = muscles.findIndex(muscle => {
    return category === muscle;
  }) + 1;

  const handleTabPress = (_, value) => {
    props.categoryPressed(value ? muscles[value - 1] : "all");
  }

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered
        onChange={handleTabPress}
      >
        <Tab label="All" />
        {muscles.map(group => {
          return (
            <Tab label={group} key={group} />
          );
        })}
      </Tabs>
    </Paper>
  );
}

export default Footer;