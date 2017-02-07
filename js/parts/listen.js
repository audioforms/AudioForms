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
 * @constructor
 * @param {Object.<string, function>} commands - commands to run when key is matched.
 * @param {Object[]} [callbacks] - functions to call backk on a match
 */
class Listener {
    constructor(commands, callbacks = []) {
        this.commands = commands;
        this.callbacks = callbacks;
        this.annyang = annyang;
    }

    greeting() {
        /**
         * a basic greeting for testing
         */
        alert('Hello!');
    }

    init() {
        /**
         * Set up annd initalize listen engine
         */
        var greeting = {
            'hello': function() {
                greeting();
            }
        };
        this.annyang.addCommands(greeting);
        this.annyang.addCommands(this.commands);
        // start than pause listener
        this.annyang.start();
        this.annyang.pause();
    }

    listen(timeout = 10000) {
        /**
         * keep listening on a button or key press
         * @param {int} [timeout] - the amount of time to wait before pausing.
         */
        if (!(this.annyang.isListening())) {
            // resume listening
            this.annyang.resume();
            // async wait until pause
            setTimeout(wait, timeout);
            // stop lisening
            this.annyang.pause();
        }
    }
}
