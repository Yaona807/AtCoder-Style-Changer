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

// function pixelDataChange(plusPixelData, canvasName) {
//   const canvas = document.getElementById(canvasName);
//   const ctx = canvas.getContext("2d");
//   const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//   const data = imageData.data;
//   for (let i = 0, len = data.length; i < len; i += 4) {
//     data[i] += plusPixelData;
//     data[i + 1] += plusPixelData;
//     data[i + 2] += plusPixelData;
//   }
//   imageData.data = data;
//   ctx.putImageData(imageData, 0, 0);
// }

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function () {
  //全体共通
  $("li.active a").css({
    "border-color": "#d10000",
  });

  $(".btn-primary").css({
    "border-color": "#d10000",
  });
  // タイマー
  $("#fixed-server-timer").css({
    color: "black",
  });

  //ユーザーカラー
  userColor();

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

  $(".btn.btn-default.active").css({
    "border-color": "#d10000"
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

  // ratingStatus or rankStatus
  $("#ratingStatus").css({
    "background-color": "rgb(209 209 209)",
    "margin-left": "2%",
  });

  $("#rankStatus").css({
    "background-color": "rgb(209 209 209)",
    "margin-left": "2%",
  });

  // コンテスト成績証
  $(".panel-body").css({
    "background-color": "black",
  });

  $(".panel-footer").css({
    "background-color": "black",
  });

  $("tr").css({
    color: "#c3c3c3",
  });

  $(".grey").css({
    color: "#f2f1f1",
  });

  $(".dark-grey").css({
    color: "#ddd",
  });

  $(".panel-primary").css({
    "border-color": "#d10000",
  });

  $(".panel-primary>.panel-heading").css({
    "border-color": "#d10000",
  });

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
    background: "black",
  });

  //  問題ページ
  $("pre").css({
    color: "#c3c3c3",
    background: "black",
  });

  $(".btn-copy").css({
    color: "#c3c3c3",
    background: "black",
  });

  $("span.select2-selection.select2-selection--single").css({
    color: "#c3c3c3",
    background: "black",
  });

  $("span.select2-selection__rendered").css({
    color: "#c3c3c3",
    background: "black",
  });

  //提出結果
  $(".panel-heading").css({
    color: "#c3c3c3",
    background: "black",
  });

    // Home
    $("div.f-flex.f-flex_mg5.f-flex_mg0_s.f-flex_mb5_s div.f-flex4.f-flex12_s").css({
      border:"solid 1px"
    });

    $("head").append(
      "<style type='text/css'>#header .header-page li a:hover{color:#c3c3c3 !important;}</style>"
    );

    $("head").append(
      "<style type='text/css'>#header .header-page li a:before{content: '';width: 0;height: 2px;position: absolute;left: 0;right: 0;bottom: 0;background-color: white !important;-webkit-transition: width .4s;transition: width .4s;}</style>"
    );

    $(".m-box_inner").css({
      "background-color": "black",
    });
  
    $(".m-box-news_post::before").css({
      "background-color": "black"
    });
  
    $("a.a-btn_bg.small").css({
      color: "#c3c3c3",
      "background-color": "black"
    });

    $("#keyvisual").css({
      color: "#c3c3c3",
      "background-color": "black",
      "background-blend-mode": "darken"
    });
    $("head").append(
      "<style type='text/css'>#keyvisual .keyvisual-inner:before{background-color:black; content: ''; display: block;position: absolute;top: 0;width: 18px;height: 400px;pointer-events: none;}</style>"
      );

      $("head").append(
      "<style type='text/css'>.m-box-news_post:before{content: '';position: absolute;left: 0;bottom: 0;width: 100%;height: 100px;background: -webkit-gradient(linear, left bottom, left top, color-stop(50%, #fff), to(rgba(255,255,255,0)));background: linear-gradient(0deg, #000 50%, rgba(255,255,255,0) 100%);}</style>"
      );
    
      $(".status").css({
        "background-color": "#037abf",
      });

      $(".status.status-gray").css({
        "background-color": "#717171",
      });

      $(".a-btn_bg").css({
        border:"solid 1px"
      });

      //PAST
      $(".center-block").css({
        "background-color": "#d6d6d6",
      });

      //Jobs
      $(".f-flex3").css({
        border:"solid 1px"
      });

      $(".m-list-job_company").css({
        color: "#c3c3c3",
      });

  //順位表
  await sleep(1 * 4000);

  new MutationObserver(rankingTableUpdate).observe(
    document.getElementById("standings-tbody"),
    {
      childList: true,
      attributes: true,
    }
  );

  new MutationObserver(async (mutationRecord) => {
    const isDisabled = mutationRecord[0].target.classList.contains("disabled");
    if (isDisabled) {
      rankingTableUpdate();
    }
  }).observe(document.getElementById("refresh"), {
    attributes: true,
    attributeFilter: ["class"],
  });
})();

function rankingTableUpdate() {
  $("#standings-panel-heading.panel-heading").css({
    color: "#c3c3c3",
    background: "black",
  });

  $(".btn-text").css({
    color: "#c3c3c3",
  });

  $("tr").css({
    color: "#c3c3c3",
    background: "black",
  });

  $("tr.info td").css({
    color: "#c3c3c3",
    background: "black",
  });

  $(".standings-score").css({
    color: "#4aabff",
  });

  $(".pagination.pagination-sm.mt-0.mb-1 a").css({
    color: "#c3c3c3",
    background: "black",
    "border-color": "",
  });

  $("li.active a").css({
    "border-color": "#d10000",
  });

  userColor();
}

function userColor() {
  $(".user-blue").css({
    color: "#0095ff",
  });

  $(".user-unrated").css({
    color: "white",
  });

  $(".user-brown").css({
    color: " #b16c28",
  });

  $(".user-green").css({
    color: " #00ce00",
  });

  $(".user-gray").css({
    color: "#a9a9a9",
  });
}
