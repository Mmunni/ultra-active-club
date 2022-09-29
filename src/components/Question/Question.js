import React from 'react';
import "./Question.css"
const Question = () => {
    return (
        <div className='question'>
            <h2>Q: How does React work</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
            <h2>Q: Differnce between Props and State</h2>
            <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            <h2>Q: Where we use useEffect without data load</h2>
            <p>useEffect after render: We know that, the useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component.</p>
        </div>
    );
};

export default Question;