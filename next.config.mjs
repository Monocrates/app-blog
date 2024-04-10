import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants.js';

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'testuser',
        mongodb_password: 'hfWD26Av5Sc3wm0x',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site-dev',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'testuser',
      mongodb_password: 'hfWD26Av5Sc3wm0x',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};

export default nextConfig;
