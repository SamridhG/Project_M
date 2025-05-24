const ROUTES = {
  HOMEPAGE: '/',
  MESSAGES: '/messages',
  TASKS: '/tasks',
  MEMBERS: '/members',
  SETTINGS: '/settings',
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.HOMEPAGE,
};
const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: 'Dashboard',
  },
};
export {
    ROUTES,
    ROUTES_CONFIG,
    WILDCARD_ROUTES,
}