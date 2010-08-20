jquery-flickr-plugin
===============
This jQuery plugin allows you to display your Flickr's photosets.

demo
-----------------
*   [example 1](http://blat.github.com/jquery-flickr-plugin/demo1.html)
*   [example 2](http://blat.github.com/jquery-flickr-plugin/demo2.html)
*   [example 3](http://blat.github.com/jquery-flickr-plugin/demo3.html)

setup
------------------
depends on: [jQuery](http://jquery.com/), [FancyBox](http://fancybox.net/).

1.  in header, include js and css files
        <script type="text/javascript" src="js/jquery.flickr.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.flickr.css" />
2.  in body
        <div id="my_flickr"></div>
3.  then apply plugin
        <script type="text/javascript">
            $(function() {
                $('#my_gallery').flickr({
                    user_id: '##USER_ID##',
                    api_key: '##API_KEY##',
                });
            });
        </script>

settings
----------------------
*   **user_id**: Flickr photoset's owner ID (required)
*   **api_key**: Your [Flickr API key](http://www.flickr.com/services/api/keys/) (required)
*   **size**: Size of thumbnails, *small*, *normal* or *large* (optional, default is *normal*)
*   **count**: Number of photosets to display, set *false* to *no limit* (optional, default is *false*)
*   **speed**: (optional, default is 100)

mit licence
------------------
Copyright (c) 2010 Mickael BLATIERE

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

