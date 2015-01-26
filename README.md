#Technical Test

### Technologies
* [Fastshell boilerplate](https://github.com/HosseinKarami/fastshell)
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/)
* [Saas](http://sass-lang.com/)

### Content

* /app

Deploy folder for "live" or "production". Open the **gallery.html** file to see the final work. 

I ncluded a css file not minified so that you can verify the syntax.

You will be scared to see so many  `!important` declarations, but this is because I did not find another way to priorize mi css file above the widget's css file.

* /src

Source code. 

### Branches

The optionalViewer is a second option to Viewer. With the current HTML structure was impossible to position the Olapic's logo outside the main container, at least without js.

### Observations

* I have not been able to implement the Masonry library  for handling images because I lack the event that triggers the Widget when it finishes executing.

* Some button's labels have a different text to design. The only way to fix it I found (without js) is declaring `font-size: 0;` and `::before{content:"text";}`, but as it is not right, I did not.

