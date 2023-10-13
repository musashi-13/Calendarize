import './App.css';
import TodayCard from './Today';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <nav className="navBar">
        <h1 className="nameLogo">CALENDARIZE</h1>
        <button className="addEvent"><FontAwesomeIcon icon={faCirclePlus} size="xl" /></button>
        <button className="profile"><FontAwesomeIcon icon={faUser} size="xl"/></button>
      </nav>
      <div className="TodayCardContainer">
      {[...Array(10)].map((_, index) => (
          <TodayCard key={index} EventName="Hallothon" EventFrom="14th Oct" />
        ))}
      </div>
    </div>
  );
}
export default App;
