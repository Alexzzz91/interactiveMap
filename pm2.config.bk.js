module.exports = {
  apps: [
    {
      name: 'server',
      script: './src/server/build/server/src/index.js',

      // cluster mode
      instances: 'max',
      exec_mode: 'cluster',

      // logs
      combine_logs: true,

      // restart
      exp_backoff_restart_delay: 200,
      max_restarts: 20,
      restart_delay: 300,
      watch: false,
      max_memory_restart: '1000M',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};