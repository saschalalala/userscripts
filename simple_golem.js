// ==UserScript==
// @name       Simple Golem
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Removes a lot of stuff
// @match      http://www.golem.de/
// @match      http://www.golem.de/news/*
// @copyright  2014, You
// @require http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// ==/UserScript==

$("#screen > div:not(.g.g4.g-ie6)").remove();
$("#index-vica2").remove();
$("header nav").remove();
$("header form").remove();
$("a.icon-comments").remove();
$("#comments").remove();
$(".social-bar").remove();
$("div[id^='gvideo_']").remove();
$("div[id^='plista_widget']").remove();
$("div[class^='golem-gallery']").remove();
$("#screen > div.g.g4.g-ie6 img").width("100px");
$("#screen > div.g.g4.g-ie6 img").height("100px");
$("#screen > div.g.g4.g-ie6 li").css("min-height","100px");
$("#screen > div.g.g4.g-ie6").width("960px");
