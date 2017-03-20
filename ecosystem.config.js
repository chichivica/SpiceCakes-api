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
      listen_timeout: 40000,
      wait_ready: true,
      env: {
        NODE_ENV: "development"
      }
    }
  ]
};
