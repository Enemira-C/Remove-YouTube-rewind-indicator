// ==UserScript==
// @name         Hide Seek Pill & Keep Controls Visible
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides YouTube's seek pill and keeps controls visible during rewinding
// @author       AI generated script
// @match        https://www.youtube.com/*
// @grant        GM_addStyle
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Enemira-C/Remove-YouTube-rewind-indicator/main/remove_yt_rewind_indicator.user.js
// @downloadURL  https://raw.githubusercontent.com/Enemira-C/Remove-YouTube-rewind-indicator/main/remove_yt_rewind_indicator.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        /* Hide the +5s/-5s seek pill */
        .ytp-unified-seek-wrapper {
            display: none !important;
        }

        /* Keep controls visible only while YouTube is in its unified-seek state */
        .html5-video-player.ytp-unified-seek-active .ytp-chrome-bottom,
        .html5-video-player.ytp-unified-seek-active .ytp-chrome-controls,
        .html5-video-player.ytp-unified-seek-active .ytp-left-controls,
        .html5-video-player.ytp-unified-seek-active .ytp-right-controls,
        .html5-video-player.ytp-unified-seek-active .ytp-time-display {
            opacity: 1 !important;
            visibility: visible !important;
        }
    `);
})();
