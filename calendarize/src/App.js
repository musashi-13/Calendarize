import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './App.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <navigator className="navBar">
      <h1 className="nameLogo">CALENDARIZE</h1>
      <button className="addEvent"><FontAwesomeIcon icon={faCirclePlus} size="xl" /></button>
      <button className="profile"><FontAwesomeIcon icon={faUser} size="xl"/></button>
    </navigator>
  );
}
export default App;
