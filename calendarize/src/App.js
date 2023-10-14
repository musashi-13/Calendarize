import './App.css';
import TodayCardContainer from './TodayContainer';
import UpcomingCardContainer from './UpcomingContainer';
import Calendar from './calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBell } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">SYNCD</h1>
        <button className="likedEvents"><FontAwesomeIcon icon={faHeart} size="xl" /></button>
        <button className="notifications"><FontAwesomeIcon icon={faBell} size="xl"/></button>      
      </nav>
      <h1 className="todayEvents">Today's Events</h1>
      <TodayCardContainer />
      <h1 className="upcomingEvents">Upcoming Events</h1>
      <UpcomingCardContainer />
      <div className="calendarContainer">
        <Calendar />
      </div>
    </div>
  );
}
export default App;
