import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constant/constant';
export const PRIVATE_ROUTES = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <></>,
    title: ROUTES_CONFIG.HOMEPAGE.title,
  },
  
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
