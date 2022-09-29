import React from 'react';
import "./ClubDetails.css"

const ClubDetails = (props) => {
    const {totalTime} = props
    const {picture, name, about, age, time} = props.item;
       
    return (
        <div>
            <div className="card">
                <img src={picture} alt="" />
                <div className="info">
                <h2>{name}</h2>
                <p>{about}</p>
                <p className='age'>For Age: {age}</p>
                <p className='time-required'>Time Requried: {time}</p>
                <button onClick={() => {totalTime(props.time)}}  className='btn'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;