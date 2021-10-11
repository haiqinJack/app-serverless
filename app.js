const LocalStrategy = require('passport-local').Strategy;

module.exports = app => {
  // 挂载 strategy
  app.passport.use(new LocalStrategy({
    passReqToCallback: true,
  }, (req, username, password, done) => {
    // format user
    const user = {
      provider: 'local',
      username,
      password,
    };
    // console.log(username, password, '?????')
    app.passport.doVerify(req, user, done);
  }));

  // 处理用户信息
  app.passport.verify(async (ctx, user) => {
    const {username, password} = user;
    const _user = await app.model.User.findOne({where: {username, password}});
    // console.log(_user, '_user')
    if(_user){
      return user
    }
  });
  app.passport.serializeUser(async (ctx, user) => { 
    console.log('serializeUser',user)
    return user
  });
  app.passport.deserializeUser(async (ctx, user) => {
    console.log('deserializeUser', user)
    return user
  });
};
