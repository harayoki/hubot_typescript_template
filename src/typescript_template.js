/// <reference path="hubot.d.ts" />
var Main = function (robot) {
    robot.respond(/hoge/, function (message) {
        message.send('hoge hoge');
    });
};
module.exports = Main;
