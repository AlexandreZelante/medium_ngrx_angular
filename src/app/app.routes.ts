import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'register',
    // Lazy loading
    loadChildren: () =>
      import('src/app/auth/auth.routes').then((m) => m.registerRoutes),
  },
];
