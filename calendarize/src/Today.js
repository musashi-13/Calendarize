import React from "react";

function TodayCard(props) {
    return (
      <div className="TodayCard" style={{ background: props.linearGradient }}>
        <h1>{props.EventName}</h1>
        <h2>{props.EventFrom}</h2>
        <h2>{props.EventTo}</h2>
      </div>
    );
  }
  

export default TodayCard