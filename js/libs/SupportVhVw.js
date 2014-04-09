/**@author Konrad Gadzinowski <kgadzinowski@gmail.com> & Konur Kent <konur.kent@gmail.com>
 * 
 */
    function VhVwFix() {

	    this.setVh = function(name, vh, cssItem) {
	
	        $(window).resize( function(event) {
	            scaleVh(name, vh, cssItem);
	        });
	
	        scaleVh(name, vh, cssItem);
	    }
	
	    this.setVw = function(name, vw, cssItem) {
	
	        $(window).resize( function(event) {
	            scaleVw(name, vw, cssItem);
	        });
	
	        scaleVw(name, vw, cssItem);
	    }
	
	    var scaleVw = function(name, vw, cssItem) {
	
	        var scrWidth = jQuery(window).width();
	        var px = (scrWidth * vw) / 100;
	        var fontSize = jQuery(name).css(cssItem, px + "px");
	    }
	
	
	    var scaleVh = function(name, vh, cssItem) {
	
	        var scrHeight = jQuery(window).height();
	
	        var px = (scrHeight * vh) / 100;
	        var fontSize = jQuery(name).css(cssItem, px + "px");
	    }
	    
	};

