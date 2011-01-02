/** 
 * Flickr Photosets
 *
 * @author      Mickael BLATIERE
 * @license     http://www.opensource.org/licenses/mit-license.php - Licensed under The MIT License
 * @link        http://github.com/blat/jquery-flickr-plugin
 */

(function($) {

    var api_url = 'http://api.flickr.com/services/rest/';

    var options = {};
    var default_options = {
        user_id: null,
        api_key: null,
        size: 'normal',
        speed: 100,
        count: false
    };

    var root;
    var photos = [];

    $.fn.flickr = function(user_options) {
        root = $(this);
        if (!user_options) user_options = {};
        $.each(default_options, function(key, default_value) {
            options[key] = user_options[key] || default_value;
        });
        flickr_init();
    }

    flickr_init = function() {
        flickr_request('flickr.photosets.getList', {user_id: options.user_id});
    }

    flickr_photosets = function(photosets) {
        var element = $('<ul></ul>', {id: 'flickr'});
        root.append(element);

        var size = '_m';
        switch (options.size) {
            case 'small':
                size = '_s';
                break;
            case 'large':
                size = '';
                break;
        }

        $.each(photosets.photoset, function(key, photoset) {
            if (!options.count || key < options.count) {
                var thumbnail = 'http://farm' + photoset.farm + '.static.flickr.com/' + photoset.server + '/' + photoset.primary + '_' + photoset.secret + size + '.jpg';
                var title = photoset.title._content;
                element.append($('<li></li>')
                    .append($('<a></a>', {id: photoset.id, title: title})
                        .css({background: 'url(' + thumbnail + ') no-repeat center center'})
                        .addClass(options.size)
                        .append($('<span></span>').text(title))
                        .click(function() { flickr_lightbox($(this).attr('id')); return false; })
                    ).hide()
                    .append($('<img></img>', {src: thumbnail}).hide())
                );
            }
        });
        flickr_preload();
    }

    flickr_lightbox = function(id) {
        if (photos[id]) {
            $.fancybox(photos[id], {type: 'image'});
        } else {
            flickr_request('flickr.photosets.getPhotos', {photoset_id: id});
        }
    }

    flickr_animate = function() { 
        $('#flickr li:hidden:first').fadeIn(options.speed, flickr_animate);
    }

    flickr_preload = function() {
        var images = $('#flickr li img');
        var count = images.length;
        images.one('load', function() {
            count--;
            if (count == 0) {
                flickr_animate();
            }
        }).each(function(){
            if (this.complete)  $(this).trigger("load");
        });
    }

    flickr_photoset = function(photoset) {
        photos[photoset.id] = [];
        $.each(photoset.photo, function(key, photo) {
            photos[photoset.id][key] = {
                href: 'http://farm' + photo.farm + '.static.flickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_b.jpg',
                title: $('#' + photoset.id).attr('title')
            };
        });
        flickr_lightbox(photoset.id);
    }

    flickr_request = function(method, data) {
        var url = api_url + "?format=json&method=" + method + "&api_key=" + options.api_key;
        $.each(data, function(key, value) {
            url += "&" + key + "=" + value;
        });
        $.getScript(url);
    }

})(jQuery);

function jsonFlickrApi(rsp){
    if (rsp.stat != "ok") {
        return;
    }

    if (rsp.photosets) flickr_photosets(rsp.photosets);
    else if (rsp.photoset) flickr_photoset(rsp.photoset);
}

