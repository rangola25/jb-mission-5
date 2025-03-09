import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='Header'>
            <div>
                <h1>Our Meetings</h1>
                <nav>
                    <NavLink 
                        to="/home" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/meetings" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                        end
                    >
                        Meetings
                    </NavLink>
                    <NavLink 
                        to="/meetings/new" 
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Add meeting
                    </NavLink>
                </nav>
            </div>          
        </div>
    )
}
