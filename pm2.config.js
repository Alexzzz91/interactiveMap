module.exports = {
  apps: [
    {
      name: 'server',
      script: './src/server/build/server/src/index.js',

      exec_mode: 'fork',
      instances: 1,
      // logs
      combine_logs: true,

      // restart
      exp_backoff_restart_delay: 200,
      max_restarts: 20,
      restart_delay: 30,
      watch: false,
      max_memory_restart: '1000M',
      env: {
        NODE_ENV: 'production',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_TLS_REJECT_UNAUTHORIZED: 0,
      },
    },
  ],
};