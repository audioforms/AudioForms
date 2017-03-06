# Grammar Specification for forma.audio

Minimal context done through modes, each mode has a different grammar.

## Home Mode
* 'help' - ask for help
* 'hi' or 'hello' - test the audio setup with a hello
* ('load' or 'read' or 'open') ('form' or 'response') (form name)' - open the loader to search for the form

## Load Mode
* in alpha, this does nothing special, just a passthrough to form or response mode.

## Form Mode
* 'about' - gives the metadata and information on the form
* 'repeat' - repeats the current question
* 'reply (response)'
* 'back' - go back a question
* 'skip' or 'next'  - go to the next question
* 'home now' - returns to the home mode

## Response Mode
* 'about' - gives the metadata and information on the response
* 'repeat'- repeats the current question and reply
* 'parent' - switches to the parent form, in form mode
* 'back' - go back a question
* 'skip' or 'next'  - go to the next question
* 'home now' - returns to the home mode
