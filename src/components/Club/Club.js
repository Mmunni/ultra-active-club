import React, { useEffect, useState } from 'react';
import ClubDetails from '../ClubDetails/ClubDetails';
import ClubRightSide from '../ClubRightSide/ClubRightSide';
import "./Club.css"

const Club = () => {
    const [items, setItems] = useState([]);
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setItems(data))
    }, [])
    return (
        <div>
            <div className="container">
           
                <div className="club">
                    <div className="club-info">
                    <div className="club-title">
                     <h1>FINTNESS CLUB</h1>
                     <p>Select today's exercise</p>
                  </div>
                    <div className="club-items">
                    {
                        items.map(item => <ClubDetails key = {item._id}
                        item = {item}
                        ></ClubDetails>)
                    }
                    </div>
                 </div>
                  <div className="club-right-side">
                     <ClubRightSide></ClubRightSide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Club;