import React from 'react';
import "./Break.css"
const Break = () => {
    return (
        <div>
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
    );
};

export default Break;