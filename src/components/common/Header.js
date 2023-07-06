import { Link, useLocation } from 'react-router-dom';
import { useRef } from "react";

export const Header = (props) => {
    //const location = useLocation().pathname.replace(/^./, "");
    const location = useLocation().pathname.slice(21);

    // toggle hamburger menu
    const ref = useRef(null);
    const toggleMobileNav = event => {
        const visiblity = ref.current.getAttribute("data-visible");
        if (visiblity === "false") {
            ref.current.setAttribute("data-visible", true);
            event.target.setAttribute("aria-expanded", true);
        } else {
            ref.current.setAttribute("data-visible", false);
            event.target.setAttribute("aria-expanded", false);
        }
    }

    return(
        <header className="primary-header flex">
            <div>
                <img src="/space-tourism-react/assets/shared/logo.svg" alt="space tourism logo" className="logo" />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={toggleMobileNav}><span className="sr-only" aria-expanded="false">Menu</span></button>
            <nav>
                <ul ref={ref} id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex">
                    <li className={(location==='home'||location==='')?'active':''}>
                        <Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/space-tourism-react/home">
                            <span aria-hidden="true">00</span>Home</Link>
                    </li>
                    <li className={(location==='destination')?'active':''}>
                        <Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/space-tourism-react/destination">
                            <span aria-hidden="true">01</span>Destination</Link>
                    </li>
                    <li className={(location==='crew')?'active':''}>
                        <Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/space-tourism-react/crew">
                            <span aria-hidden="true">02</span>Crew</Link>
                    </li>
                    <li className={(location==='technology')?'active':''}>
                        <Link className="ff-sans-cond uppercase text-white letter-spacing-2" to="/space-tourism-react/technology">
                            <span aria-hidden="true">03</span>Technology</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}