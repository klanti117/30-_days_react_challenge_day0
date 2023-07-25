import React from 'react'

const cardStyles = {
    backgroundColor: '#93c572',
    padding: '1rem',
    border: '2px solid #fedc56',
    color:'#ff5e0e'
}

const TimeCard = (props) => {
  return (
    <div style={cardStyles}>
        <p>{props.text}</p>
    </div>
  )
}

export default TimeCard