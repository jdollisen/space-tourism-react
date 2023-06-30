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
      {path: '/', element: <Home />},
      {path: '/home', element: <Home />},
      {path: '/destination', element: <Destination />},
      {path: '/crew', element: <Crew />},
      {path: '/technology', element: <Technology />},
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
};
