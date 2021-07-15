// ==UserScript==
// @name         AtCoder-Style-Changer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  AtCoderのスタイルを切り替えるスクリプト
// @author       i-708
// @license      MIT
// @match        https://atcoder.jp/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function () {
  // ユーザページ
  // https://atcoder.jp/users/{user_name}
  // if (document.URL.match("/users")) {
  $("body").css({
    "background-color": "black",
    color: "#c3c3c3",
  });

  $("#main-container").css({
    "background-color": "black",
  });

  $("a").css({
    color: "#c3c3c3",
    "background-color": "transparent",
  });

  $("button").css({
    color: "#c3c3c3",
    "background-color": "black",
  });

  $("ul").css({
    color: "#c3c3c3",
    "background-color": "black",
  });

  $("head").append(
    "<style type='text/css'> .new-is-active {color: '#c3c3c3'; } </style>"
  );
  $("li.is-active").addClass("new-is-active");
  $("li.is-active").removeClass("is-active");

  $(".glyphicon.glyphicon-resize-full").css({
    color: "#c3c3c3",
  });

  $(".header-inner").css({
    "background-color": "black",
    "border-bottom-color": "#c3c3c3",
  });

  $(".header-sub_page").css({
    "background-color": "black",
  });
  $("#footer").css({
    background: "black",
  });

  $(".t-inner").css({
    "background-color": "black",
  });

  $(".text-center.even").css({
    "background-color": "black",
  });

  $(".text-center.odd").css({
    "background-color": "black",
  });
  // }

  //コンテストページ
  $("tr").css({
    "background-color": "black",
  });

  $("#contest-nav-tabs").css({
    "background-color": "black",
  });

  $("li.active a").css({
    "background-color": "black",
  });

  $(".insert-participant-box").css({
    "background-color": "black",
  });

  $(".container-fluid").css({
    "background-color": "black",
  });

  $("#main-div").css({
    "background": "black",
  });

})();
