import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'project-remote',
  exposes: {
    './Routes': 'apps/project-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
