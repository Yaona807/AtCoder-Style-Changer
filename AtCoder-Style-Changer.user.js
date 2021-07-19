// ==UserScript==
// @name         AtCoder-Style-Changer
// @namespace    http://github.com/i-708
// @version      0.1
// @description  AtCoderのテーマをダークテーマに変更します
// @author       i-708
// @license      MIT
// @match        https://atcoder.jp/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function () {

	// 順位表などの設定
	function rankingTableUpdate() {
		$("#btn-reset").css({
			color: "#c3c3c3",
			background: "black",
		});

		$("#input-affiliation").css({
			color: "#c3c3c3",
			background: "black",
		});

		$("#input-user").css("cssText", "color: #c3c3c3; background: black");

		$("#select2-standings-select-country-container").css({
			color: "#c3c3c3",
			background: "black",
			border: "white 1px solid"
		});

		$("#refresh, #auto-refresh").css({
			color: "#c3c3c3",
			background: "black",
		});

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

		$("td.standings-result.standings-perf").css({
			color: "#c3c3c3",
			background: "black",
		});

		$("td.standings-result.standings-rate").css({
			color: "#c3c3c3",
			background: "black",
		});

		$(".standings-ac").css({
			color: "#00e152",
		});

		$(".standings-result p").css({
			color: "#d8d8d8",
		});

		$(".standings-statistics td p,.standings-fa td p").css({
			color: "#d8d8d8",
		});

		$(".sort-th.no-break a").css({
			color: "#d6d6d6",
		});

	}

	// userのカラー設定
	function userColor() {
		$("head").append(
			"<style type='text/css'> .user-blue {color: #0095ff; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-unrated {color: white; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-brown {color: #b16c28; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-green {color: #00ce00; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-gray {color: #a9a9a9; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-yellow {color: #dede01; } </style>"
		);

		$("head").append(
			"<style type='text/css'> .user-cyan {color: #00f1f1; } </style>"
		);
	}

	function loadObservation() {
		const loadElem = document.getElementById("vue-standings").getElementsByClassName("loading-show")[0];
		const loadOptions = { attributes: true };
		const loadObserver = new MutationObserver(() => {
			if (!!document.getElementById("standings-tbody")) {
				rankingTableUpdate();
				standObservation();
				refreshObservation()
			};
		});
		loadObserver.observe(loadElem, loadOptions);
	}

	function standObservation() {
		const standElem = document.getElementById("standings-tbody");
		const standElemOption = {
			childList: true,
			attributes: true,
		};
		if (standElem) {
			const standObserver = new MutationObserver(rankingTableUpdate);
			standObserver.observe(standElem, standElemOption);
		}
	}

	function refreshObservation() {
		const refreshElem = document.getElementById("refresh");
		const refreshElemOptions = {
			attributes: true,
			attributeFilter: ["class"],
		};
		if (refreshElem) {
			const refreshObserver = new MutationObserver((mutationRecord) => {
				const isDisabled = mutationRecord[0].target.classList.contains("disabled");
				if (isDisabled) {
					rankingTableUpdate();
				}
			}).observe(refreshElem, refreshElemOptions);
		};
	}
	function resultObservation() {
		const resultElem = document.getElementsByClassName("pagination pagination-sm mt-0 mb-1")[0]
		const resultOptions = {
			childList: true,
			attributes: true
		};
		const resultObserver = new MutationObserver(rankingTableUpdate).observe(resultElem, resultOptions);
	}
	//全体共通
	$("li.active a").css({
		"border-color": "#d10000",
		"border": " #d10000 solid 1px"
	});

	$(".btn-primary").css({
		"border-color": "#d10000",
	});

	// タイマー
	$("#fixed-server-timer").css({
		color: "black",
	});

	$("head").append(
		"<style type='text/css'> #header .header-page li.is-active a {color: #c3c3c3 !important; } </style>"
	);

	$("head").append(
		"<style type='text/css'> #header .header-lang li a:hover {color: #c3c3c3 !important; } </style>"
	);

	//ユーザーカラー
	userColor();

	// ユーザページ
	$("body").css({
		"background-color": "black",
		color: "#c3c3c3",
	});

	$("#main-container").css({
		"background-color": "black",
	});

	$("button").css({
		color: "#c3c3c3",
		"background-color": "black",
	});

	$(".btn.btn-default.active").css({
		"border-color": "#d10000",
	});

	$("ul").css({
		color: "#c3c3c3",
		"background-color": "black",
	});

	$("head").append(
		"<style type='text/css'> .new-is-active {color: '#c3c3c3'; } </style>"
	);

	$(".glyphicon.glyphicon-resize-full, .glyphicon.glyphicon-search.black").css({
		color: "#c3c3c3",
	});

	$(".form-control.input-sm").css({
		color: "#c3c3c3",
		"background-color": "black",
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

	$("#ratingStatus").css({
		"background-color": "rgb(209 209 209)",
		"margin-left": "2%",
	});

	$("#rankStatus").css({
		"background-color": "rgb(209 209 209)",
		"margin-left": "2%",
	});

	$("a").css({
		color: "#c3c3c3",
		"background-color": "transparent",
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

	$("small.contest-duration, span.mr-2").css({
		color: "#c3c3c3",
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

	$("code:not([class])").css({
		color: "#ffaa2a",
		"background-color": "transparent",
		border: "white solid 1px",
	});
	$(".alert.alert-warning.alert-dismissible.fade.in").css({
		color: "#ffbe2b",
		"background-color": "black",
		border: "#ffdd38 solid 1px",
	});

	/**
	 * コード画面
	 */
	$(".CodeMirror-scroll").css({
		"background-color": "black",
	});

	// カーソル
	$("head").append(
		"<style type='text/css'>.CodeMirror-cursor{border-left: 1px solid white;border-right: none;width: 0;}</style>"
	);

	// 文字色
	$("head").append("<style type='text/css'>.cm-s-default .cm-builtin{color: #bb98ff}</style>");

	$("head").append("<style type='text/css'>.cm-s-default .cm-keyword{color: #ed72ff}</style>");

	$("head").append("<style type='text/css'>.cm-s-default .cm-def{color: #23c2ff}</style>");

	$("head").append("<style type='text/css'>.cm-s-default .cm-string{color: #ff9a5f}</style>");

	$("head").append("<style type='text/css'>.cm-s-default .cm-number{color: #11cb81}</style>");

	$("head").append("<style type='text/css'>.cm-s-default .cm-comment{color: #9e9e9e}</style>");

	$(".CodeMirror-gutter").css({
		color: "white",
		"background-color": "black",
	});

	$("head").append("<style type='text/css'>div.CodeMirror-linenumber.CodeMirror-gutter-elt{color: white}</style>");

	$(".CodeMirror").css("color", "white");

	//提出結果
	$(".panel-heading").css({
		color: "#c3c3c3",
		background: "black",
	});

	$(".label-warning").css({
		background: "#d58617",
	});

	$(".btn.btn-link.btn-xs").css({
		color: "#c3c3c3",
		background: "black",
		border: "solid 1px",
	});

	//コードテスト
	$("head").append(
		"<style type='text/css'>.table>thead>tr>td.danger, .table>tbody>tr>td.danger, .table>tfoot>tr>td.danger, .table>thead>tr>th.danger, .table>tbody>tr>th.danger, .table>tfoot>tr>th.danger, .table>thead>tr.danger>td, .table>tbody>tr.danger>td, .table>tfoot>tr.danger>td, .table>thead>tr.danger>th, .table>tbody>tr.danger>th, .table>tfoot>tr.danger>th{background-color: #a31010;　color: #c3c3c3;}</style>"
	);

	$("head").append(
		"<style type='text/css'>table.table.table-bordered tbody{color:#c3c3c3; background-color: black;}</style>"
	);

	$("head").append(
		"<style type='text/css'>table>thead>tr>td.success, .table>tbody>tr>td.success, .table>tfoot>tr>td.success, .table>thead>tr>th.success, .table>tbody>tr>th.success, .table>tfoot>tr>th.success, .table>thead>tr.success>td, .table>tbody>tr.success>td, .table>tfoot>tr.success>td, .table>thead>tr.success>th, .table>tbody>tr.success>th, .table>tfoot>tr.success>th{color:#c3c3c3; background-color: #379d0d;}</style>"
	);

	$("head").append(
		"<style type='text/css'>.btn-primary{color:#c3c3c3 !important; background-color: black !important; border-color: #d10000 !important;}</style>"
	);

	$("textarea#input.form-control.customtest-textarea").css({
		color: "white",
		background: "black",
	});

	$("textarea#stdout.form-control.customtest-textarea").css({
		color: "white",
		background: "black",
	});

	$("textarea#stderr.form-control.customtest-textarea").css({
		color: "white",
		background: "black",
	});

	// Home
	$("div.f-flex.f-flex_mg5.f-flex_mg0_s.f-flex_mb5_s div.f-flex4.f-flex12_s").css({
		border: "solid 1px",
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
		"background-color": "black",
	});

	$("a.a-btn_bg.small").css({
		color: "#c3c3c3",
		"background-color": "black",
	});

	$(".panel.panel-primary").css({
		color: "#c3c3c3",
		"background-color": "black",
	});

	$("#keyvisual").css({
		color: "#c3c3c3",
		"background-color": "black",
		"background-blend-mode": "darken",
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

	$(".status.status-green").css({
		"background-color": "#317f01",
	});

	$(".a-btn_bg").css({
		border: "solid 1px",
	});

	$(".a-btn_arrow").css({
		color: "#c3c3c3",
		"background-color": "black",
	});

	$(".a-btn_arrow").css({
		"cssText": $(".a-btn_arrow").attr("style") + "color: #c3c3c3 !important;"
	});

	//PAST
	$(".center-block").css({
		"background-color": "#d6d6d6",
	});

	//Jobs
	$(".f-flex3").css({
		border: "solid 1px",
	});

	$(".m-list-job_company").css({
		color: "#c3c3c3",
	});

	//順位表
	$("head").append(
		"<style type='text/css'>tr.info td{background-color: black !important;color: #c3c3c3 !important;}</style>"
	);

	// 監視
	if (document.URL.match("/standings")) {
		loadObservation();
	}

	if (document.URL.match("/results")) {
		resultObservation();
	}
})();


