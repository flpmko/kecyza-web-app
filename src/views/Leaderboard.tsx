import React from 'react'
import internal from 'stream'

type Team = {
    color: string,
    name: string,
    points: number
}

const Leaderboard: React.FC = () => {
    return (
        <div>
            <h1>Leaderboard 📊</h1>
            <p>Who is da best team out here?</p>
            <br />
            <br />

            {/* TODO - prerobit to na pole */}
            {/* TODO - zmenit farby na farby timov */}

            <article style={{ backgroundColor: '#4a3e2f' }}>
                <strong>1st place</strong>
                <br />
                Khaki - 13 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#161315' }}>
                <strong>2nd place</strong>
                <br />
                Black - 11 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#386c0b' }}>
                <strong>3rd place</strong>
                <br />
                Green - 10 pts
            </article>
            <br />
            <article>
                <strong>4th place</strong>
                <br />
                Purple - 10 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#f2af29' }}>
                <strong>5th place</strong>
                <br />
                Yellow - 10 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#f391a0' }}>
                <strong>6th place</strong>
                <br />
                Pink - 8 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#de3c4b' }}>
                <strong>7th place</strong>
                <br />
                Red - 3 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#c8bfc7' }}>
                <strong>8th place</strong>
                <br />
                White - 3 pts
            </article>
            <br />
            <br />
        </div>

        
    )
}

export default Leaderboard
