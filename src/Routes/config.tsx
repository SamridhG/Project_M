
import { PRIVATE_ROUTES } from './PrivateRoutes';
import { PUBLIC_ROUTES } from './PublicRoutes';

export const guestRoutes = [...PUBLIC_ROUTES];

export const authenticatedRoutes = [...PRIVATE_ROUTES];
