'use strict';
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, config: { apiPrefix } } = app;
  
  // router.get('/passport', deserializeUser)
  router.get('/', 'home.index');
  router.get('/logout', 'home.logout');
  router.get('/admin', controller.admin.index)
  
  router.resources('users', '/users', controller.users);
};
