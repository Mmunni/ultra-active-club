import React from 'react';
import "./ClubDetails.css"

const ClubDetails = (props) => {
    const {handelBtn} = props
    const {picture, name, about, age, time} = props.item;
       
    return (
        <div>
            <div className="card">
                <img src={picture} alt="" />
                <div className="info">
                <h2>{name}</h2>
                <p>{about}</p>
                <p className='age'>For Age: {age}</p>
                <p className='time-required'>Time Requried: {time}second</p>
                <button onClick={() => handelBtn(props.item)}  className='btn'>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;