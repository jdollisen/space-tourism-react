//import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';
import { SpaceSavvy } from './pages/SpaceSavvy';
import { TemplateLayout } from './pages/Template';
import { Error } from './pages/Error';

export default function App(props) {

  return (
    <Routes>
      <Route path="/space-tourism-react/" element={ <TemplateLayout /> }>
        <Route exact path="/space-tourism-react/" element={ <Home /> } />
        <Route exact path="/space-tourism-react/home" element={ <Home /> } />
        <Route exact path="/space-tourism-react/destination" element={ <Destination /> } />
        <Route exact path="/space-tourism-react/crew" element={ <Crew /> } />
        <Route exact path="/space-tourism-react/technology" element={ <Technology /> } />
        <Route exact path="/space-tourism-react/spacesavvy" element={ <SpaceSavvy  /> } />
      </Route>
      <Route path="*" element={ <Error /> } />
    </Routes>
  );
};
