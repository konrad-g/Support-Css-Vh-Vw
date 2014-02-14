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
        <script type="text/javascript" src="js/libs/jquery-1.10.2.min.js"></script>
        <script type="text/javascript" src="js/libs/SupportVhVw.js"></script>

    </head>
    <body>
        
    		<div id="textOne">Example text one (vh5)</div>
			<div id="textTwo">Example text two (vw3)</div>
			<div id="textThree" class="textMain">Example text three (vh4)</div>
			<div id="textFour" class="textMain">Example text four (vh4)</div>

		<script type="text/javascript">
			
			// Init object
			var supportVhVw = new SupportVhVw();

			// Scale all texts
			supportVhVw.setVh("#textOne", 5);
			supportVhVw.setVw("#textTwo", 3);
			supportVhVw.setVh(".textMain", 4);
			
		</script>

            
        
    </body>
</html>
```
 
Contributor: Konrad Gadzinowski.