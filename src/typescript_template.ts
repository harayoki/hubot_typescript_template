/// <reference path="../typings/tsd.d.ts" />

interface IRobot {
  respond(reg:RegExp, callback:Function):void;
}

interface IMessage  {
  send(message:string):void;
}

var Main = function(robot:IRobot) {

  var onMessage:Function = (mes:IMessage):void => {
    mes.send('hoge hoge');
  };

  robot.respond(/hoge/, onMessage)
}

export = Main;
