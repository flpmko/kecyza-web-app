import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import './TheNavigation.scss'

interface Props {

}

const TheNavigation: React.FC<Props> = () => {
    return (

        <nav className="navigation">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/schedule">Schedule</NavLink>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
            <NavLink to="/food">Food</NavLink>
        </nav>

    )
}

export default TheNavigation