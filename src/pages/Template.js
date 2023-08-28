import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../components/common/Header';

const RenderHeader = (data) => {
    if (data.location === 'spacesavvy') {
        return (
            <div className="jumbotron overlay">
                <Header />
                <h1 id="header" className="header-title">Discover Space Missions</h1>
                <a href="#results"><i className="fa fa-chevron-down"></i></a>
            </div>
        )
    } else {
        return(
            <Header />
        )
    }
}

export const TemplateLayout = (props) => {

    let location = useLocation().pathname.slice(21);

    if (location === '') location = 'home'
    //console.log(props.errorData.value);
    return (<>
        <div className={location}>
            <a className="skip-to-content" href="#main">Skip to content</a>
            
            <RenderHeader location={location} />
            <Outlet />
        </div>
    </>)
}