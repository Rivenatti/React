import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

const Footer = props => {
  const { muscles, onSelect, category, width } = props;
  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
    onSelect(index === 0 ? "" : muscles[index - 1]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        centered={width !== "xs"}
        scrollable={width === "xs"}
        onChange={onIndexSelect}
      >
        <Tab label="All" />;
        {muscles.map(muscle => {
          return <Tab label={muscle} key={muscle} />;
        })}
      </Tabs>
    </Paper>
  );
};

export default withWidth()(Footer);
