/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  const key = appInfo.name + '_1576384476895_3620';
  const secret = appInfo.name + 'qwertyuiop1234567890_';
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    env: 'local',
    // env: 'prod',
    rundir: '/tmp',
    logger: {
      dir: '/tmp',
    },
  };

  config.cors = {
    origin: '*',
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH'
  }
  config.jwt = {
    secret
  }

  config.security = {
    csrf : {
      enable: false
    },
    domainWhiteList: ['http://localhost:8080']
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = key

  // add your middleware config here
  config.middleware = ['errorHandler'];

  // add your user config here
  const userConfig = {
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
    },

    errorHandler: {
      match: '/'
    }
  };
 
  config.sequelize = {
    "username": "postgres",
    "password": "450450",
    "database": "postgres",
    "port": 5433,
    "host": "127.0.0.1",
    "dialect": "postgres"
  };


  return {
    ...config,
    ...userConfig,
  };
};
