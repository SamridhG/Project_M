import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constant/constant';
import Dashboard from '../View/DashBoard/DashBoard';
export const PUBLIC_ROUTES = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <Dashboard/>,
    title: ROUTES_CONFIG.HOMEPAGE.title,
  },
  
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
