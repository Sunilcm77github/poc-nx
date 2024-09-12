import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'task',
  exposes: {
    './Routes': 'apps/task/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
