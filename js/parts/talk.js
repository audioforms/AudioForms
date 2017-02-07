/**
 *  @fileoverview Driver for the forms audio talk (text to speech) engine.
 *  @author birm@rbirm.us (Ryan Birmingham)
 *  @license Copyright 2017 Ryan Birmingham.
 */
/** Need to add these to any document
<script type="text/javascript" src="https://rawgithub.com/hiddentao/google-tts/master/google-tts.min.js"></script>
*/
/**
 *A FormsAudio Talker
 * @constructor
 * @param {String} [language] - language to use
 */
class Talker {
    constructor(language = "en") {
        this.language = language;
        this.tts = new GoogleTTS(language)
    }

    /**
     *Intialize the talker
     */
    init() {
        Empty
    }

    /**
     * Say text given.
     * @param {String} [tosay] - something to say
     */
    say(tosay = "Nothing") {
        this.tts.play(tosay)
    }
