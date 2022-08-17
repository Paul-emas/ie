export const routes = [
  { path: '/', isProtected: false },
  { path: '/about', isProtected: false },
  { path: '/contact', isProtected: false },
  { path: '/error', isProtected: false },
  { path: '/dashboard', isProtected: true },
  { path: '/solar', isProtected: true },
  { path: '/meters', isProtected: true },
  { path: '/transactions', isProtected: true },
  { path: '/transactions/wallet', isProtected: true },
  { path: '/profile', isProtected: true },
];

export const checkIsRouteProtected = (path) => {
  let isProtected;
  routes.forEach((route) => {
    if (path == route.path && route.isProtected) {
      isProtected = true;
    }
  });

  return isProtected;
};
