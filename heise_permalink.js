// ==UserScript==
// @name         heise permalink 
// @namespace    http://your.homepage/
// @version      0.1
// @description  Moves the permalink on heise news from the bottom of the article to the top
// @author       @saschalalala
// @match        http://www.heise.de/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js
// @grant        none
// ==/UserScript==

$('p.permalink').insertAfter('article h1')