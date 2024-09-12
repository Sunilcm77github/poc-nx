import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => loadRemoteModule('project-remote', './Routes').then(m => m.remoteRoutes),
  },
];
