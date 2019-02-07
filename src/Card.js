import React from 'react';
import './Card.css';



export default function Card(props) {
  // console.log(props.id);
  return (
    <div className='Card'> 
      <button 
        type='button' onClick={()=> props.handleDeleteButton(props.id)}
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

// git rm --cached node_modules
