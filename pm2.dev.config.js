module.exports = {
  apps: [
    {
      name: 'server',
      script: './src/server/build/server/src/index.js',
      // watch: ['./assets/img/levels/', './src/server/build'],
      ignore_watch: ['node_modules'],
      node_args: [
        '--inspect=0.0.0.0',
        '--trace-deprecation',
        '--trace-warnings',
      ],
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      restart_delay: 300,
      watch: false,
      max_restarts: 3,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'development',
      },
    },
  ],
};