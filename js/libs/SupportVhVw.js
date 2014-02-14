/**@author Konrad Gadzinowski <kgadzinowski@gmail.com>
 * 
 */
    function SupportVhVw() {

        this.setVh = function(name, vh) {

            $(window).resize( function(event) {
                scaleVh(name, vh);
            });

            scaleVh(name, vh);
        }

        this.setVw = function(name, vw) {

            $(window).resize( function(event) {
                scaleVw(name, vw);
            });

            scaleVw(name, vw);
        }

        var scaleVw = function(name, vw) {

            var scrWidth = jQuery(document).width();
            var px = (scrWidth * vw) / 100;
            var fontSize = jQuery(name).css('font-size', px + "px");
        }


        var scaleVh = function(name, vh) {

            var scrHeight = jQuery(document).height();

            var px = (scrHeight * vh) / 100;
            var fontSize = jQuery(name).css('font-size', px + "px");
        }
    };


