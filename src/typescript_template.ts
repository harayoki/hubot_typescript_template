/// <reference path="hubot.d.ts" />

var Main = function(robot:Robot) {
  robot.respond(/hoge/, (message:Message):void => {
    message.send('hoge hoge');
  })

}

export = Main;
