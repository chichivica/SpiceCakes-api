module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "SpiceCakes-API",
      script: "index.js",
      instances: "MAX",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development"
      },
      listen_timeout: 3000,
      wait_ready: true
    },
  ]
};
