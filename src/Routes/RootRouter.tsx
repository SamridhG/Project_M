
import { useRoutes } from 'react-router-dom';
import { authenticatedRoutes, guestRoutes } from './config';
import AppLayout from '../components/Layouts/AppLayout';


function RootRouter() {
  const guest = useRoutes(guestRoutes);
  const authenticated = useRoutes(authenticatedRoutes);
  const isAuthenticated = false //!!token;
  return (
    <>
      <AppLayout isAuthenticated={isAuthenticated}>
        {isAuthenticated ? authenticated : guest}
      </AppLayout>
    </>
  );
}

export default RootRouter;
