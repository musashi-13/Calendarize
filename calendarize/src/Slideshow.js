import { useState, useEffect, useCallback } from 'react';
import Slide from './slide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

const spotlightevents = [
    {
        eventName: "Diplomat Wars 4.0",
        eventDesc: "Diplomat Wars is the PES MUN Society 's event that de-constructs the skill set of diplomacy and provide a glimpse of the enthralling World of Model UNs. Whether you are a seasoned MUNer or just curious, this is your chance to showcase and polish your analytical and soft skills!",
        eventImage: "/diplomatwars.png",
        eventDate: "3rd Feb - 4th Feb 2024",
        eventTime: "8 AM",
        eventLoc: "MRD Auditorium"
    },
    {
        eventName: "Otakuiz",
        eventDesc: "Anime lovers and Quizzing enthusiasts join us, QQC on 30th January,2024 for an unforgettable experience as we challenge your quick thinking and knowledge on all things anime from cunning villains and their philosophical ideologies to angry Tsunderes, from Eren's raging quest for freedom to Naruto's and Asta's unbreakable determination to achieve their dreams, from clashes between powerful monsters such as Sukuna and Gojo to tales of nostalgia, warmth and heartbreak - we cover it all.",
        eventImage: "/animequiz.png",
        eventDate: "30th Jan 2024",
        eventTime: "4 PM",
        eventLoc: "3rd Floor Seminar Hall, BE Block"
    }
]

export default function Slideshow() {
    const [slide, setSlide] = useState(0);
    const nextSlide = useCallback(() => {
        setSlide(slide => (slide === spotlightevents.length - 1 ? 0 : slide + 1));
    }, []);
  
    const prevSlide = () => {
      setSlide(slide === 0 ? spotlightevents.length - 1 : slide - 1);
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
          nextSlide();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [nextSlide]);
    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", background: "#fff"}}>
            <div className='Spotlight'>
                <button style={{background: "rgb(0,0,0,0)", border: "none"}} onClick={prevSlide}><FontAwesomeIcon icon={faCaretLeft} size='2xl' color='black'/></button>
                {spotlightevents.map((item, idx) =>{
                    return <Slide item={item} idx={idx} slide={slide}/> 
                })}
                <button style={{background: "rgb(0,0,0,0)", border: "none"}} onClick={nextSlide}><FontAwesomeIcon icon={faCaretRight} size='2xl' color='black'/></button>
            </div>
            <span className="indicators" style={{display: "flex", bottom: "1rem", padding: "0.5em"}}>
                    {spotlightevents.map((_, idx) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx ? "indicator" : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                        );
                    })}
            </span>
        </div>
    )
}