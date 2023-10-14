import React, { useRef, useState } from 'react';
import TodayCard from './Today';
import CollegeEvents from './CollegeEvents.json';


function TodayCardContainer() {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const gradientStyle = 'linear-gradient(-225deg, rgba(253,29,29,1) 0px, rgba(0,0,0,1) 400px)';

  const handleMouseDown = (e) => {
  setIsDragging(true);
  setStartX(e.pageX - containerRef.current.offsetLeft);
  setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
  setIsDragging(false);
  };

  const handleMouseMove = (e) => {
  if (!isDragging) return;
  const x = e.pageX - containerRef.current.offsetLeft;
  const walk = (x - startX) * 2;
  containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
    className= "todayCardContainer"
    ref={containerRef}
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    >
      {CollegeEvents.map(cEvent => {
        return(
          <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        >
        <TodayCard EventName={cEvent.eventName} EventFrom={cEvent.eventFrom} EventTo={cEvent.eventTo} linearGradient={gradientStyle} />
        </div>
        )
      })
      }
      <div className="todayGradient"></div>
    </div>
  );
}

export default TodayCardContainer;
