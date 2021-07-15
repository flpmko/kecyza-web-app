import React from 'react'
import { NavLink } from 'react-router-dom'

//styles
import styles from './TheNavigation.module.scss'

interface Props {

}

const TheNavigation: React.FC<Props> = () => {
    return (

        <nav className={styles.navigation}>
            <NavLink to="/" activeClassName={styles.active} exact>
                Home
            </NavLink>
            <NavLink to="/schedule" activeClassName={styles.active}>
                Schedule
            </NavLink>
            <NavLink to="/leaderboard" activeClassName={styles.active}>
                Leaderboard
            </NavLink>
            <NavLink to="/food" activeClassName={styles.active}>
                Food
            </NavLink>
            <NavLink to="/workshops" activeClassName={styles.active}>
                Workshops
            </NavLink>
        </nav>

    )
}

export default TheNavigation