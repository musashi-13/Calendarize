import React from "react";

function TodayCard(props) {
    return (
      <div className="TodayCard" style={{ background: props.linearGradient }}>
        <h1 style={{margin:0}}>{props.EventName}</h1>
        <p style={{margin:0, fontSize:'14px', textTransform: "uppercase"}}>{props.EventFrom} to {props.EventTo}</p>
        <p>{props.EventDesc}</p>      
      </div>
    );
  }
  

export default TodayCard