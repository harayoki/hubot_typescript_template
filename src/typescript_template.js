/// <reference path="../typings/tsd.d.ts" />
var Main = function (robot) {
    var onMessage = function (mes) {
        mes.send('hoge hoge');
    };
    robot.respond(/hoge/, onMessage);
};
module.exports = Main;
