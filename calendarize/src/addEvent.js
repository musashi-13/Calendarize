import './addevent.css'
import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faInfoCircle, faSquareXmark, faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom';
import cardTheme from './CardTheme';

export default function AddEvent(){
    const navigate = useNavigate();
    const [eDesc, setDesc] = useState('');
    const [eName, setName] = useState('');
    const [eCategory, setCategory] = useState('');
    const [eStartDate, setStartDate] = useState('');
    const [eStartTime, setStartTime] = useState('');
    const [eEndDate, setEndDate] = useState('');
    const [eEndTime, setEndTime] = useState('');
    const [eRegLink, setRegLink] = useState('');
    const [eRegDate, setRegDate] = useState('');
    const [eRegTime, setRegTime] = useState('');
    const [eInstaLink, setInstaLink] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleDescChange = (event) => {
    setDesc(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };
    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    };
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };
    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    };
    const handleRegLinkChange = (event) => {
        setRegLink(event.target.value);
    };
    const handleRegDateChange = (event) => {
        setRegDate(event.target.value);
    };
    const handleRegTimeChange = (event) => {
        setRegTime(event.target.value);
    };
    const handleInstaLinkChange = (event) => {
        setInstaLink(event.target.value);
    };


    const handleAdd = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setIsSubmitting(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form successfully submitted");
        navigate('/')
        alert("Event Added Succcessfully")
    };

    return(
        <div className='event-container'>
            <form className={`event-form ${isSubmitting ? 'submitting' : ''}`} onSubmit={handleSubmit}>
                <Link to='../login'><FontAwesomeIcon icon={faArrowLeft} style={{position: "absolute", color: "rgb(96, 96, 96)"}} /></Link>
                <h2>Add an event</h2>
                <label>Event Name</label>
                <div>
                    <input maxLength='25' type="text" value={eName} onChange={handleNameChange} style={{width: '83%'}}/>
                    <label>{eName.length}/25</label>
                </div> 
                <label>Event Description &nbsp; 
                    <FontAwesomeIcon className='info-bubble' icon={faInfoCircle} size='xs'/>
                    <span class="info-text">Keep</span>
                </label>
                <div>
                    <input maxLength='120' type="text" value={eDesc} onChange={handleDescChange} style={{width: '83%'}}/>
                    <label>{eDesc.length}/120</label>
                </div>  
                <label>Event Category &nbsp; 
                    <FontAwesomeIcon className='info-bubble' icon={faInfoCircle} size='xs'/>
                    <span class="info-text">Tooltip text</span>
                </label>
                <select className='select-category' value={eCategory} onChange={handleCategoryChange}>
                <option value="Hackathon">--Category--</option>
                    <option value="Hackathon">Hackathon</option>
                    <option value="Fest">Fest</option>
                    <option value="Recruitment">Recruitment</option>
                    <option value="Competition">Competition</option>
                    <option value="Conference">Conference</option>
                    <option value="Quiz">Quiz</option>
                    <option value="Marathon">Marathon</option>
                    <option value="ISAs">ISAs</option>
                </select>
                <label>Start date and time</label>
                <div className='date-time-container'>
                    <input type='date' value={eStartDate} onChange={handleStartDateChange}/>
                    <input type='time' value={eStartTime} onChange={handleStartTimeChange}/>
                </div>
                <label>End date and time</label>
                <div className='date-time-container'>
                    <input type='date' value={eEndDate} onChange={handleEndDateChange}/>
                    <input type='time' value={eEndTime} onChange={handleEndTimeChange}/>
                </div>
                <label>Registration Link</label>
                <input value={eRegLink} onChange={handleRegLinkChange}/>
                <label>Registration end date and time</label>
                <div className='date-time-container'>
                    <input type='date' value={eRegDate} onChange={handleRegDateChange}/>
                    <input type='time' value={eRegTime} onChange={handleRegTimeChange}/>
                </div>
                <label>Instagram Link</label>
                <input value={eInstaLink} onChange={handleInstaLinkChange}/>
                <label><i><s>Add Image Link</s></i></label>
                <input disabled/>
                <div className='event-button-container'>
                {!isSubmitting ? (
                        <>
                            <button type='button' id='Add' onClick={handleAdd}>Add &nbsp; <FontAwesomeIcon icon={faFolderPlus} /></button>
                            <button type='clear' id='Clear'>Clear &nbsp; <FontAwesomeIcon icon={faSquareXmark} /></button>
                        </>
                    ) : (
                        
                        <>
                            <button type='submit' id='Confirm'>Confirm</button>
                            <button type='button' id='Cancel' onClick={handleCancel}>Cancel</button>
                        </>
                    )}
                </div>
                
            </form>
            <div className="TodayCard" style={{ background: cardTheme['Hackathon'], position: "absolute", top: "15%", left: "50%", translate: "-50%", zIndex: "1"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1 style={{margin:0}}>{eName}</h1>
                <button className="heartButton liked"><FontAwesomeIcon icon={faHeart} size="2xl" />
                </button>
                </div>
                <p style={{marginTop:0, marginBottom: '1em', fontSize:'14px', textTransform: "uppercase"}}>{eStartDate} to {eEndDate}</p>
                <p style={{margin:'0.3em', fontSize:'14px',}}>{eDesc}</p>
                <p style={{marginTop:'0.3em',marginLeft:'0.3em', marginBottom: '1em', fontSize:'14px',}}>Criteria: None</p>
                <button className="regButton">
                    <a href={eRegDate} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                        Register Now!
                    </a>
                </button>
            </div>
        </div>
    )
}