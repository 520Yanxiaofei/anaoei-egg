const Service = require('egg').Service

class UserService extends Service {
    /*构造函数*/
    // constructor(ctx) {
    // this.UserCreateTransfer = {
    //     mobile: {
    //         type: 'string',
    //         required: true,
    //         allowEmpty: false,
    //         format: /^[0-9]{11}$/
    //     },
    //     password: {
    //         type: 'password',
    //         required: true,
    //         allowEmpty: false,
    //         min: 6
    //     },
    //     realName: {
    //         type: 'string',
    //         required: true,
    //         allowEmpty: false,
    //         format: /^[\u2E80-\u9FFF]{2,6}$/
    //     }
    // }
    // }
    async list(request) {
        const {ctx, service, app} = this
        // this.logger.debug(this)
        // const queryStr = "show ta bles;";
        let record = await app.mysql.query('select * from web_admin')
        return record
    }
}

module.exports = UserService