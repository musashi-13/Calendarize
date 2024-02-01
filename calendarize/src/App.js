import './App.css';
import React, { useState } from 'react';
import TodayCardContainer from './TodayContainer';
import UpcomingCardContainer from './UpcomingContainer';
import Calendar from './calendar';
import Sidebar from './sideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBell, faScrewdriverWrench, faUser} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Slideshow from './Slideshow';


function App() {
  const [showLiked, setShowLiked] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleShowLiked = () => {
    setShowLiked(!showLiked);
    console.log(showLiked)
  };
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">SYNCd</h1>
        <button className="navButtons"><a href='https://github.com/kaushik-bhat/Calendarize' style={{textDecoration: "none", color: "white"}}><FontAwesomeIcon icon={faGithub} size="xl"/></a></button>      
        <button className="navButtons"><FontAwesomeIcon icon={faScrewdriverWrench} size="xl"/></button>
        <button className="likedEvents" onClick={toggleShowLiked}><FontAwesomeIcon icon={faHeart} size="xl" /></button>
        <button className="navButtons"><FontAwesomeIcon icon={faUser} size="xl"/></button>      
        <button className="navButtons" onClick={toggleSidebar}><FontAwesomeIcon icon={faBell} size="xl"/></button>
      </nav>
      <div style={{position: "fixed", height: "54px", backdropFilter: "blur(5px)", width: "100%", zIndex: "9"}}></div>
      <div style={{height: "40px"}}></div>
      <h1 className="todayEvents" style={{marginBottom: "0.5em", position: "relative"}}>Spotlight</h1>
      <Slideshow/>
      <div className='filterContainer'>
        <button className='filterButtons' id='Hackathons'>Hackathons</button>
        <button className='filterButtons' id='Fests'>Fests</button>
        <button className='filterButtons' id='Recruitments'>Recruitments</button>
        <button className='filterButtons' id='Competitions'>Competitions</button>
        <button className='filterButtons' id='Conferences'>Conferences</button>
        <button className='filterButtons' id='ISAs'>ISAs</button>
        <button className='filterButtons' id='Quizzes'>Quizzes</button>
        <button className='filterButtons' id='Marathons'>Marathons</button>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <h1 className="todayEvents">Today's Events</h1>
      <TodayCardContainer showLiked={showLiked}/>
      <h1 className="upcomingEvents">Upcoming Events</h1>
      <UpcomingCardContainer showLiked={showLiked}/>
      <div className="calendarContainer">
        <Calendar />
      </div>
    </div>
  );
}
export default App;