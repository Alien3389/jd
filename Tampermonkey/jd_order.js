// ==UserScript==
// @name         隐藏京东订单信息
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://order.jd.com/*
// @icon         https://www.jd.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function getFormatDate(){
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        var date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        var hour = nowDate.getHours() < 10 ? "0" + nowDate.getHours() : nowDate.getHours();
        var minute = nowDate.getMinutes() < 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();
        var second = nowDate.getSeconds() < 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
        return year + "-" + month + "-" + date +" "+ hour +":"+ minute +":"+ second;
    }

    $('head').append($(`
        <style>
        .dama-btn{
            position: fixed;
            top: 100px;
            right: 100px;
            z-index: 999999;
            background:#f67a47;
            color: #FFF;
            border-radius: 5px;
            padding: 8px 20px;
            border:none;
            font-size: 14px;
        }
    </style>`));
    $('body').append($('<button class="dama-btn">打码</button>'))
    $('.dama-btn').click(function (){
        $('.order-tb .consignee .txt').html("打码")
        $('.tr-th .number a').html("000000000000")
        $('.order-tb .tr-th span.dealtime').html(getFormatDate())
    })

    // Your code here...
})();