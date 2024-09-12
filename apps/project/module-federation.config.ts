import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'project',
  exposes: {
    './Routes': 'apps/project/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
