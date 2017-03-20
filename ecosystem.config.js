module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "SpiceCakes-API",
      script: "index.js",
      listen_timeout: 900000,
      instances: "2",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development"
      },
    },
  ]
};
