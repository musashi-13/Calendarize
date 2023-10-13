import './App.css';
import TodayCardContainer from './TodayContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus, faBell } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">CALENDARIZE</h1>
        <button className="addEvent"><FontAwesomeIcon icon={faCirclePlus} size="xl" /></button>
        <button className="profile"><FontAwesomeIcon icon={faUser} size="xl"/></button>
        <button className="notifications"><FontAwesomeIcon icon={faBell} size="xl"/></button>      
      </nav>
      
      <TodayCardContainer />
    </div>
  );
}
export default App;
