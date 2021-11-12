import { useEffect, useRef, useState } from "react"
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import { ReactComponent as DownArrow } from '../assets/downArrow.svg'
import './Hamburger.css'
import FloatingNavbar from '../floatingNavbar';

function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            
                <div className="hamburger-container">
                    <Hamburger className="menu-icon" onClick={() => setOpen(!open)}  />
                </div>
                
            
        {open && <FloatingNavbar/>}
        
        </div>
    )
}

export default HamburgerMenu