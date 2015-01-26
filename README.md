#Technical Test

### Technologies
* [Fastshell boilerplate](https://github.com/HosseinKarami/fastshell)
* [Gulp](http://gulpjs.com/)
* [Bower](http://bower.io/)
* [Saas](http://sass-lang.com/)

### Content

* /app

Deploy folder for "live" or "production". Open the **gallery.html** file to see the final work. 

I included a css file not minified so that you can verify the syntax.

You will be scared to see so many  `!important` declarations, but this is because I did not find another way to priorize my css file above the widget's css file.

* /src

Source code. 

### Branches

The optionalViewer is a second option to Photo Viewer. With the current HTML structure was impossible to position the Olapic's logo outside the main container, at least without js.

### Observations

* I was not able to implement the Masonry library to handle images because I didn't know the event that triggers the Widget when it finishes executing.

* Some button's labels have a different text from design. The only way to fix it that I found (without js) is declaring `font-size: 0;` and `::before{content:"text";}`, but since I think it is not the proper solution, I did not apply it.

