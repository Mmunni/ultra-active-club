import React from 'react';
import "./ClubRightSide.css";
import images from "../../images/user-image.jpg"

const ClubRightSide = ({time}) => {
   console.log(time)
  
   let totalTime = 0;

   for(const times of time){
    totalTime = totalTime + times.time;
   }
    return (
        <div className='right-side-container'>
            <div className="my-info">
                <div className="my-img">
                    <img src={images} alt="" />
                </div>
                <div className="my-details">
                    <h3>Masuma Munni</h3>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className="break-area">
            <h3>Add A Break</h3>
                <div className="break-items">
                    <div className="single-break-item">
                        <p>10s</p>
                    </div>
                    <div className="single-break-item">
                        <p>20s</p>
                    </div>
                    <div className="single-break-item">
                        <p>30s</p>
                    </div>
                    <div className="single-break-item">
                        <p>40s</p>
                    </div>
                    <div className="single-break-item">
                        <p>50s</p>
                    </div>
                </div>
            </div>
            <div className="exercice-details-area">
            <h3>Exercise Details</h3>
            <div className="exercise-details">
                <div className="exercise-time">
                <h4>Exercise time: {totalTime}second</h4>
                </div>
                <div className="break-time">
                <h4>Break time:  seconds</h4>
                </div>
            </div>
                <button className='btn-2'>Activity Completed</button>
            </div>
        </div>
    );
};

export default ClubRightSide;