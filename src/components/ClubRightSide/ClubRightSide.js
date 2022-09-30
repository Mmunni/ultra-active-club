import React, { useState } from 'react';
import "./ClubRightSide.css";
import images from "../../images/user-image.jpg"
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ClubRightSide = ({time}) => {
    
   const [brk = 0, setBrk] = useState([])
  
   let totalTime = 0;
  

   for(const times of time){
     
    totalTime = totalTime + times.time ;
   }
//    toast
   const notify = ()=>{

    // Calling toast method by passing string
    toast('Complited', {position: toast.POSITION.TOP_CENTER})
}

// break btn function
const addTime = () => {
    const second = document.getElementById('btn1').innerText;

    const cart2 = {};
    cart2['brkTime'] = second;
    localStorage.setItem('brkTime', JSON.stringify(cart2));

}
const addTime20 = () => {
    const second = document.getElementById('btn2').innerText;

    const cart2 = {};
    cart2['brkTime'] = second;
    localStorage.setItem('brkTime', JSON.stringify(cart2));
}
const addTime30 = () => {
    const second = document.getElementById('btn3').innerText;

    const cart2 = {};
    cart2['brkTime'] = second;
    localStorage.setItem('brkTime', JSON.stringify(cart2));
}
const addTime40 = () => {
    const second = document.getElementById('btn4').innerText;
    // console.log(second);

    const cart2 = {};
    cart2['brkTime'] = second;
    localStorage.setItem('brkTime', JSON.stringify(cart2));
}
const addTime50 = () => {
    const second = document.getElementById('btn5').innerText;
    const cart2 = {};
    cart2['brkTime'] = second;
    localStorage.setItem('brkTime', JSON.stringify(cart2));
    const storeTime = localStorage.getItem('brkTime', JSON.parse(cart2));
   
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
            {/* break area */}
            <div className="break-area">
            <h3>Add A Break</h3>
                <div className="break-items">
                    <div className="single-break-item">
                    <button id='btn1' onClick={() => addTime(setBrk(10))}>10s</button>
                    </div>
                    <div className="single-break-item">
                    <button id='btn2' onClick={() => addTime20(setBrk(20))}>20s</button>
                    </div>
                    <div className="single-break-item">
                    <button id='btn3' onClick={() => addTime30(setBrk(30))}>30s</button>
                    </div>
                    <div className="single-break-item">
                    <button id='btn4' onClick={() => addTime40(setBrk(40))}>40s</button>
                    </div>
                    <div className="single-break-item">
                    <button id='btn5' onClick={() => addTime50(setBrk(50))}>50s</button>
                    </div>
                </div>
            </div>
            {/* tore time abd break area */}
            <div className="exercice-details-area">
            <h3>Exercise Details</h3>
            <div className="exercise-details">
                <div className="exercise-time">
                <h4>Exercise time: {totalTime}second</h4>
                </div>
                <div className="break-time">
                <h4 id='breakTym'>Break time: {brk}seconds</h4>
                </div>
            </div>
                <button className='btn-2' onClick={notify}>Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default ClubRightSide;