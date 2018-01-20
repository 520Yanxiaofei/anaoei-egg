'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const {router, controller} = app;
    // router.get('/', controller.home.index);
    router.get('/api/user', controller.user.list)

// router.resources('user', '/api/user', controller.user);
// router.resources('users', '/api/v1/users', controller.v1.users); // app/controller/v1/users.js
};
