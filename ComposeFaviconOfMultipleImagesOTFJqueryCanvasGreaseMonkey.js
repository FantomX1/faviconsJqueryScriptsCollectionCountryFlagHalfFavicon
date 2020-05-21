// ==UserScript==
// @name        vlajky
// @namespace   aaa
// @include     about:addons
// @include     *.domain.local/*
// @include     *.subdomain.otherdomain.com/url*
// @include     *.subdomain.domain.com/url*
// @include     *.domain.com/url/*

// @version     1
// @grant       none
// ==/UserScript==

document.head || (document.head = document.getElementsByTagName('head')[0]);

function changeFavicon(src) {
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}

//    var canvas = document.createElement('canvas');
//    canvas.width = 16;canvas.height = 16;
//    var ctx = canvas.getContext('2d');
//    var img = new Image();
//    img.src = '/assets/images/favicon/private.png';
//    img.onload = function() {
//        ctx.drawImage(img, 0, 0);
//        ctx.fillStyle = "#F00";
//        ctx.fillRect(10, 7, 6, 8);
//        ctx.fillStyle = '#FFFFFF';
//        ctx.font = 'bold 10px sans-serif';
//        ctx.fillText('2', 10, 14);
//
//        //changeFavicon('http://www.google.com/favicon.io');
//        //changeFavicon('https://assets-cdn.github.com/favicon.ico');
//        changeFavicon(canvas.toDataURL("image/x-icon"));
//
//
////        var link = document.createElement('link');
////        link.type = 'image/x-icon';
////        link.rel = 'shortcut icon';
////        link.href = canvas.toDataURL("image/x-icon");
////
////        document.getElementsByTagName('head')[0].appendChild(link);
//    }


//

$(document).ready(function() {
    //var c = document.getElementById("myCanvas");
    var c = document.createElement('canvas');
    // var c = document.createElement('canvas');
    c.width = 16;
    c.height = 16;
//
    // Get the drawing context
    //var ctx = canvas.getContext('2d');

    var ctx = c.getContext("2d");
    var imageObj1 = new Image();

    //imageObj1.src = document.getElementById('dynamic-favicon').href;
    imageObj1.src = $('link[rel="shortcut icon"]')[0].href;
    imageObj1.onload = function () {


        ctx.drawImage(imageObj1, 0, 0, 8, 16);
        var imageObj2 = new Image();
        if (typeof $('#userDetails').find('img:first').attr('src') == 'undefined') {
            return;
        }
        imageObj2.src = $('#userDetails').find('img:first').attr('src');
        imageObj2.onload = function () {
            ctx.drawImage(imageObj2, 8, 0, 8, 16);
            //var img = c.toDataURL("image/png");

            var img = c.toDataURL("image/x-icon");
            changeFavicon(img);
//            var link = document.createElement('link');
//            link.type = 'image/x-icon';
//            link.rel = 'shortcut icon';
//            link.href = c.toDataURL("image/x-icon");
//            document.getElementsByTagName('head')[0].appendChild(link);

        }
    };
});
