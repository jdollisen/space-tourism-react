import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/common/Header';

export const TemplateLayout = () => {
    let location = useLocation().pathname.replace(/^./, "");
    if (location == '') location = 'home'

    return (
        <div className={location}>
            <a className="skip-to-content" href="#main">Skip to content</a>
            <Header />
            <Outlet />
        </div>
    )
}