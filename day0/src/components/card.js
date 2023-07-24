import React from 'react'

const getRandomHexColor = () =>{
    const str = '0123456789abcdef'
    let color =''
    for(let i=0;i<6;i++){
        let index = Math.floor(Math.random() * str.length)
        color+=str[index]
    }
    return "#"+color
  }

const card = () => {
  return (
    <div style={{backgroundColor: getRandomHexColor()}}>{getRandomHexColor()}</div>
  )
}

export default card