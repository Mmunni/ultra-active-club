import React from 'react';
import "./ExerciseDetails.css"
const ExerciseDetails = () => {
    return (
        <div>
            <h3>Exercise Details</h3>
            <div className="exercise-details">
                <div className="exercise-time">
                <h4>Exercise time: <span>0 seconds</span></h4>
                </div>
                <div className="break-time">
                <h4>Break time: <span>0 seconds</span></h4>
                </div>
            </div>
                <button className='btn-2'>Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;