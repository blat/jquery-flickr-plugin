jQuery Flickr Plugin
===============

This jQuery plugin allows you to display your Flickr's photosets.

Demo
-----------------

*   [example 1](http://blat.github.com/jquery-flickr-plugin/demo1.html)
*   [example 2](http://blat.github.com/jquery-flickr-plugin/demo2.html)
*   [example 3](http://blat.github.com/jquery-flickr-plugin/demo3.html)


Dependances
------------------

* [jQuery](http://jquery.com/)
* [FancyBox](http://fancybox.net/)


Usage
------------------

1.  In header, include js and css files:

        <script type="text/javascript" src="js/jquery.flickr.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.flickr.css" />
        
2.  In body:

        <div id="my_gallery"></div>

3.  Then, apply plugin:

        <script type="text/javascript">
            $(function() {
                $('#my_gallery').flickr({
                    user_id: '##USER_ID##',
                    api_key: '##API_KEY##',
                });
            });
        </script>


Settings
----------------------
*   **user_id**: Flickr photoset's owner ID (required)
*   **api_key**: Your [Flickr API key](http://www.flickr.com/services/api/keys/) (required)
*   **size**: Size of thumbnails, *small*, *normal* or *large* (optional, default is *normal*)
*   **count**: Number of photosets to display, set *false* to *no limit* (optional, default is *false*)
*   **speed**: (optional, default is 100)
