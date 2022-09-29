import React from 'react';
import "./ClubDetails.css"

const ClubDetails = (props) => {
    // console.log(props)
    const {picture, name, about, age, time} = props.item;
    // console.log(props.item)
    return (
        <div>
            <div className="card">
                <img src={picture} alt="" />
                <div className="info">
                <h2>{name}</h2>
                <p>{about}</p>
                <p className='age'>For Age: {age}</p>
                <p className='time-required'>Time Requried: {time}</p>
                <button className='btn'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;