import React from 'react'

const Leaderboard: React.FC = () => {
    return (
        <div>
            <h1>Leaderboard 📊</h1>
            <p>Who is da best team out here?</p>
            <br />
            {/* <strong>1st place</strong> */}
            <br />

            {/* TODO - prerobit to na pole */}
            {/* TODO - zmenit farby na farby timov */}

            <article style={{ backgroundColor: '#de3c4b' }}>
                <strong>1st place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#f2af29' }}>
                <strong>2nd place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#386c0b' }}>
                <strong>3rd place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#007cbe' }}>
                <strong>4th place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#161315' }}>
                <strong>5th place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#c8bfc7' }}>
                <strong>6th place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article style={{ backgroundColor: '#f391a0' }}>
                <strong>7th place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <article>
                <strong>8th place</strong>
                <br />
                Color - 0 pts
            </article>
            <br />
            <br />
        </div>
    )
}

export default Leaderboard
