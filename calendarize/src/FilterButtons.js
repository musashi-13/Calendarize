import React, { useState } from 'react';

export default function FilterButtons() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const toggleColor1 = () => {
        setIsActive1(!isActive1);
    };

    const toggleColor2 = () => {
        setIsActive2(!isActive2);
    };
    return(
    <div className='filterContainer'>
        <button className='filterButtons'>All</button>
        <button className='filterButtons'>Hackathons</button>
        <button className='filterButtons'>Fests</button>
        <button className='filterButtons'>Recruitments</button>
        <button className='filterButtons'>Competitions</button>
        <button className='filterButtons'>Conferences</button>
        <button className='filterButtons'>ISAs</button>
        <button className='filterButtons'>Quizzes</button>
        <button className='filterButtons'>Marathons</button>
    </div>
    )
}