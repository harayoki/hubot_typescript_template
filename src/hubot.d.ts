/// <reference path="../typings/tsd.d.ts" />

interface Robot {
  respond(reg:RegExp, callback:(mes:Message)=>void):void;
  hear(reg:RegExp, callback:(mes:Message)=>void):void;
}

interface Message  {
  send(...messages:string[]):void;
  reply(...messages:string[]):void;
}

