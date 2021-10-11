'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.set('content-type', 'text/html')
    // await ctx.render('index.html', {
    //   msg: 'hi, egg-serverless - version',
    // });
    if (ctx.isAuthenticated()) {
      ctx.body = `<div>
        <h2>${ctx.path}</h2>
        <hr>
        Logined user: <img src="${ctx.user.photo}"> ${ctx.user.displayName} / ${ctx.user.id} | <a href="/logout">Logout</a>
        <pre><code>${JSON.stringify(ctx.user, null, 2)}</code></pre>
        <hr>
        <a href="/">Home</a> | <a href="/user">User</a>
      </div>`;
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a> |
          <a href="/passport/local">local</a>
          <hr>
          <form action="/passport/local" method="post">
            <input value="${ctx.csrf}" name="_csrf" type="hidden"/>
            <lable>name</lable><input name="username"/>
            <lable>pwd</lable><input name="password"/>
            <input type="submit" />
          </form>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }

  logout() {
    const { ctx } = this;
    ctx.logout()
    ctx.redirect('/')
  }
}

module.exports = HomeController;
