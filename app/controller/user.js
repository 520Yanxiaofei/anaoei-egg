const Controller = require('egg').Controller

class UserController extends Controller {
    /*创建用户*/
    /*所有用户*/
    async list() {
        const {ctx, service, request} = this
        //组装参数
        const payload = ctx.query //接收get参数
        // const payload = ctx.request.body接收body参数
        //调用Sercice进行业务处理
        const res = await ctx.service.user.list(payload)
        console.log(res)
        //设置响应内容和响应状态码
        const response = {
            success: false,
            message: ""
        };
        if (res) {
            response.message = "测试查询成功";
            response.status = true;
            response.data = res;
        } else {
            response.message = "测试查询失败";
        }
        ctx.body = response;
        ctx.status = 200;
    }
/*删除单个用户*/
}

module.exports = UserController