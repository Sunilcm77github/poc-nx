import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('project/Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
  {
    path: 'task',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('task/Routes').then((m) => m.remoteRoutes),
      },
    ],
  },
];
