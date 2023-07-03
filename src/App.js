import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Destination } from './pages/Destination';
import { Crew } from './pages/Crew';
import { Technology } from './pages/Technology';
import { TemplateLayout } from './pages/Template';
import { Error } from './pages/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <TemplateLayout  />,
    errorElement: <Error />,
    children: [
      {path: '/space-tourism-react/', element: <Home />},
      {path: '/space-tourism-react/home', element: <Home />},
      {path: '/space-tourism-react/destination', element: <Destination />},
      {path: '/space-tourism-react/crew', element: <Crew />},
      {path: '/space-tourism-react/technology', element: <Technology />},
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
};
