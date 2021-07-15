import React from 'react'

import schedule from '/Users/flpmko/Church/Youth/KECY/2021 - Beyond/web-app/kecyza-web-app/src/assets/schedule-img.png'

const Schedule: React.FC = () => {
    return (
        <div>
            <h1>Schedule 🗓</h1>
            <p>Please, always be on time! Check out the schedule!</p>
            <br />
            <img src={schedule} />
            <br />
            <br />
        </div>
    )
}

export default Schedule
