import React from 'react';
import "./ClubRightSide.css";
import images from "../../images/user-image.jpg"
import Break from '../BreakArea/Break';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';

const ClubRightSide = () => {
    return (
        <div className='right-side-container'>
            <div className="user-info">
                <div className="user-img">
                    <img src={images} alt="" />
                </div>
                <div className="user-details">
                    <h3>Masuma Munni</h3>
                    <p>Sylhet, Bangladesh</p>
                </div>
            </div>
            <div className="break-area">
               <Break></Break>
            </div>
            <div className="exercice-details-area">
                <ExerciseDetails></ExerciseDetails>
            </div>
        </div>
    );
};

export default ClubRightSide;