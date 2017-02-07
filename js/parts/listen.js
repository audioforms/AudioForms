/**
 *  @fileoverview Driver for the forms audio listen (speech to text) engine.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */

/** Need to add these to any document
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/speechkitt.min.js"></script>
*/


/**
 *A FormsAudio Listener
 */
class Listener{
    constructor(){
        Empty
    }

    function greeting(){
        /**
        * a basic greeting for testing
        */
        alert('Hello!');
    }

    function intialize_listen(){
        /**
         * Set up annd initalize listen engine
         */
        var commands = {
        'hello': function() { greeting(); }
        };
        annyang.addCommands(commands);
        // start than pause listener
        annyang.start();
        annyang.pause();
    }

    function listen(timeout=10000){
        /**
         * keep listening on a button or key press
         * @param {int} [timeout] - the amount of time to wait before pausing.
         */
        if (!(annyang.isListening())){
            // resume listening
            annyang.resume();
            // async wait for 10 seconds default (TODO tune this time)
            setTimeout(wait,timeout);
            // stop lisening
            annyang.pause();
        }
    }
}
