import React from 'react'

const Home: React.FC = () => {
    const day = new Date().getDate() - 18

    return (
        <div className="home">
            <h1>Day <strong>#{day < 0 ? 0 : day}</strong> of camp</h1>
            <p>{day < 0 ? 7 : 7 - day} days full of fun remaining!</p>

            {/* TODO -> aktualny datum (a cas so sekundami) */}
            {/* TODO -> z komponentu Food jedlo na aktualny den */}
            {/* TODO -> z komponentu Leaderboard aktualny lider */}
            {/* TODO -> z komponentu Schedule next up (complicated) */}
            {/* TODO -> z komponentu Workshops zapisany workshop */}

        </div>
    )
}


export default Home