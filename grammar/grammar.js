/**
 *  @fileoverview Grammar information at high level for forms audio.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */

// we need to add context; we'll do this by switching commands
var commands = {
  '': hello,
  'help':
  'load *form': loadForm,
  'open *form': loadForm,
  'read *response': loadResp,

}

function loadForm(name){
  // do the form stuff
}

function loadResp(name){
  // fo the response stuff
}

function hello(){
  // just say hi
}

function help(){
  // just say the help message
}
