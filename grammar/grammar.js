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
    'load *form': loadForm,
    'open *form': loadForm,
    'read *response': loadResp
  };
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
}

function help(){
  // just say the help message
  var say = "We'll help you, just not this early in alpha. Talk to birm."
}
