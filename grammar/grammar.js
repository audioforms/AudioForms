/**
 *  @fileoverview Grammar information at high level for forms audio.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */

// we need to add context; we'll do this by switching commands

function home(){
  var commands = {
    'hello': hello,
    'hi': hello,
    'help':
    'load :type *name': load,
    'open :type *name': load,
    'read :type *response': load
  };
}

function load(type, name){
  if (type=="form"){
    loadForm(name)
  }
  else if (type=="response") {
    loadResp(name)
  }
  else {
    var say = "load command type not recognized; say load form or load response, followed by a form or reponse name.";
    home()
  }
}

function loadForm(name){
  // do the form stuff
  var position  = 0;
  var form = ""; // get using faudapi
  var commands = {
    'reply *reply' : questionReply,
    'repeat' : questionRepeat
    'back' : questionBack,
    'about' : formAbout,
    'next' : questionNext,
    'skip' : questionSkip,
    'home now' : home
  };

}

function loadResp(name){
  // do the response stuff
  var position  = 0;
  var resp = ""; // get using faudapi
  var commands = {
    'repeat' : respRepeat
    'back' : respBack,
    'next' : respNext,
    'skip' : respSkip,
    'parent' : respParent,
    'home now' : home
  };
}

function hello(){
  // just say hi
  var say = "Hello!"
  home();
}

function help(){
  // just say the help message
  var say = "We'll help you, just not this early in alpha. Talk to birm."
  home();
}
