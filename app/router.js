'use strict';
const LocalStrategy = require('passport-local').Strategy;
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config: { apiPrefix } } = app;
  const localStrategy = app.passport.authenticate('local');
  
  // router.get('/passport', deserializeUser)
  router.get('/', 'home.index');
  router.get('/logout', 'home.logout');
  router.get('/admin', controller.admin.index)
  router.post('/passport/local', localStrategy);
  // 登录校验
  // router.post('/login', app.passport.authenticate('local', { successRedirect: '/authCallback' }));
  
  router.resources('users', '/users', controller.users);
};
