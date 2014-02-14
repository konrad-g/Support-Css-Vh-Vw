/**@author Konrad Gadzinowski <kgadzinowski@gmail.com>
 * 
 */
function SupportVhVw() {

    this.setVh = function(name, vh) {

        if (window.addEventListener) {  // W3C DOM
            window.addEventListener('resize', function(event) {
                scaleVh(name, vh);
            });
        } else if (window.attachEvent) { // IE DOM
            window.attachEvent('onresize', function(event) {
                scaleVh(name, vh);
            });
        } else {
            // Events not supported
        }


        scaleVh(name, vh);
    }

    this.setVw = function(name, vw) {

        if (window.addEventListener) {  // W3C DOM
            window.addEventListener('resize', function(event) {
                scaleVw(name, vw);
            });
        } else if (window.attachEvent) { // IE DOM
            window.attachEvent('onresize', function(event) {
                scaleVw(name, vw);
            });
        } else {
            // Events not supported
        }

        scaleVw(name, vw);
    }

    var scaleVw = function(name, vw) {

        var scrWidth = jQuery(document).width();
        console.log("width: " + scrWidth);
        var px = (scrWidth * vw) / 100;
        var fontSize = jQuery(name).css('font-size', px + "px");
    }


    var scaleVh = function(name, vh) {

        var scrHeight = jQuery(document).height();

        var px = (scrHeight * vh) / 100;
        var fontSize = jQuery(name).css('font-size', px + "px");
    }
}
;


