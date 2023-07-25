import React from 'react'
import TimeCard from '../TimeCard/TimeCard'

const containerStyles = {
    display:'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
}

const TimesContainer = () => {
    const New_York = `Time in New York: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}`
    const Los_Ageles = `Time in Los Angeles: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}`
    const London = `Time in the London: ${new Date().toLocaleString('en-US', { timeZone: "Europe/London" })}`
  return (
    <div>
        <h3>TimesContainer will show times in all four time zones</h3>
        <div  style={containerStyles}>
        <TimeCard text={New_York}/>
        <TimeCard text={Los_Ageles}/>
        <TimeCard text={London}/>
        </div>
    </div>
  )
}

export default TimesContainer