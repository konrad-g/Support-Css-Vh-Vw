Support Css Vh Vw
=================
<br/>
Library that uses jQuery to support CSS units: vh and vw. 
---------------------------------------------------------
<br/>

Simple usage example:
---------------------

```html
<html>
    <head>
        
        <title>Example</title>
        
        <!-- Import all libraries -->
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.js" type="text/javascript"></script>
        <script type="text/javascript" src="js/libs/SupportVhVw.js"></script>

    </head>
    <body>
        <style>
        	div {
        		display: block;
        	}
        	#widthOne {
        		background:red;
        	}
        	#widthTwo {
        		background:blue;
        	}
        	.textOne {
        		color:blue;
        	}
        	#heightOne {
        		background:yellow;
        		width:10%;
        	}
        </style>
    	<div id="widthOne">Example width 50vw width &amp; padding top, bottom 10vh</div>
		<div id="widthTwo">Example max-width 20vw</div>
		<div class="textOne" class="textMain"><p>Example text (vh4)</p></div>
		<div id="heightOne" class="textMain">Example height 20vh</div>

		<script type="text/javascript">
	
			$(window).load(function(){
				// Init object
				var VhVwFixer = new VhVwFix();
			
				//if you want to do this for browsers that do not have vh & vw support uncomment below
				//var vw = $(".test").css("width", "15vw");
				//if (vw.width() == 0) {
					// Scale slide
					VhVwFixer.setVh("#widthOne", 10, "padding-bottom");					
					VhVwFixer.setVh("#widthOne", 10, "padding-top");					
					VhVwFixer.setVw("#widthOne", 50, "width");
					VhVwFixer.setVw("#widthTwo", 20, "max-width");
					VhVwFixer.setVh(".textOne p", 4, "font-size");
					VhVwFixer.setVh("#heightOne", 20, "height");
		
				//} 
			});
		</script>

            
        
    </body>
</html>
```
 
Contributor: Konrad Gadzinowski, Konur Alp