// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==



window.onload = function() {


    var   getFavicon=function(){
        var favicon = undefined;
        var nodeList = document.getElementsByTagName("link");
        for (var i = 0; i < nodeList.length; i++)
        {
            if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
            {
                favicon = nodeList[i].getAttribute("href");
            }
        }
        return favicon;
    };




    setInterval(
        function(){


            if (document.hasFocus()) {

                // document.getElementById('helperElement').style.zIndex=-100;
// document.getElementById('helperElement').style.display="none";

                el=document.getElementById('helperElement');
                if (el!=null) {
                    el.parentNode.removeChild(el)
                }

                console.log('bbb '+document.getElementById('helperElement').style.zIndex + ' aaa');
            }
            else {
                el=document.getElementById('helperElement');
                if (el==null) {
                    document.body.innerHTML = document.body.innerHTML+'<div id="helperElement" style="z-index:100;text-align: center; vertical-align: middle;opacity: 0.5; position: fixed; background-size: 100% 100%; background-repeat: no-repeat; left:0px; top:0px;height: 100%;width:100%; border:1px solid black;">'+
                        '<div style="position:relative; top:20%; font-size: 300px;">'+document.title+'</span>'+'</div>';


                    favicon = getFavicon();
                    if (!favicon) {
                        favicon='https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico?v=4f32ecc8f43d';
                    }
                    document.getElementById('helperElement').style.backgroundImage='url('+favicon+')';
                }
            }
        }



        ,3000);
};
