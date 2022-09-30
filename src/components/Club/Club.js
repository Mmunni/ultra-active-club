import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import ClubDetails from '../ClubDetails/ClubDetails';
import ClubRightSide from '../ClubRightSide/ClubRightSide';
import Question from '../Question/Question';
import "./Club.css"
import { addToDb, getStoredTime } from '../../utilities/fakedb';

const Club = () => {
    const [items, setItems] = useState([]);
    const [time, setTime] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, []);

    useEffect(() => {
        const storedTime = getStoredTime();
        const saveTime = [];
        for(const id in storedTime){
            const addedTime = items.find(item => item.id === id);
            if(addedTime){
                const qunatity = storedTime[id];
                addedTime.qunatity = qunatity;
                saveTime.push(addedTime)
            }
        }
        setTime(saveTime);
    }, [items]);

    const handelBtn = (item) => {
        // console.log(item)
        const newTime = [...time, item]
        setTime(newTime)
        addToDb(item.id)
        
         
    }
    return (
        <div>
            <div className="container">
           
                <div className="club">
                    <div className="club-info">
                    <div className="club-title">
                     <h1><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon> FINTNESS CLUB</h1>
                     <p>Select today's exercise</p>
                  </div>
                    <div className="club-items">
                    {
                        items.map(item => <ClubDetails key = {item.id}
                        item = {item}
                        handelBtn ={handelBtn}
                        ></ClubDetails>)
                    }
                    </div>
                    <div className="question">
                        <Question></Question>
                    </div>
                 </div>
                  <div className="club-right-side">
                       <ClubRightSide time={time}></ClubRightSide> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Club;