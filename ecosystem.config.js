module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "SpiceCakes-API",
      script: "index.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      listen_timeout: 900000,
      instances: "max",
      exec_mode: "cluster",
      env_production: {
        NODE_ENV: "development"
      }
    },
  ]
};
