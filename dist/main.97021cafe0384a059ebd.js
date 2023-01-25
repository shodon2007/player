/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/style.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _script_script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/script.js */ \"./script/script.js\");\n/* harmony import */ var _script_script_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_script_script_js__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ (() => {

eval("const play = document.querySelector('.player__play');\r\nconst prew = document.querySelector('.player__prew');\r\nconst next = document.querySelector('.player__next');\r\nconst audio = document.querySelector('.player__audio');\r\nconst progress = document.querySelector('.player__progress');\r\nconst domSongList = document.querySelector('.player__items')\r\nconst volume = document.querySelector('.volume__input');\r\n\r\nconst songList = [\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n    'random test music',\r\n];\r\n\r\nlet thisSong = 0;\r\n\r\nsongList.forEach((el, index) => {\r\n    const testAudio = new Audio();\r\n    testAudio.src = `audio/${el}.mp3`;\r\n    testAudio.onloadeddata = () => {\r\n        let min = Math.floor(testAudio.duration / 60);\r\n        let sec = Math.floor(testAudio.duration % 60);\r\n        if (min < 10) {\r\n            min = `0${min}`;\r\n        }\r\n        if (sec < 10) {\r\n            sec = `0${sec}`;\r\n        }\r\n        document.querySelector(`.music${index}`).querySelector('.item__time').innerHTML = min + \":\" + sec;\r\n    }\r\n    domSongList.innerHTML += ` \r\n    <div onclick=\"itemClick(${index})\" class=\"player__item music${index} ${index == thisSong ? 'played' : false}\">\r\n        <div class=\"item__left\">\r\n            <div class=\"play__name\">\r\n                <div class=\"item__plays\">\r\n                    <svg class=\"item__play\" width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                        <path\r\n                            d=\"M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z\"\r\n                        />\r\n                    </svg>\r\n                </div>\r\n                <div class=\"item__name\">${el}</div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"item__right\">\r\n            <div class=\"item__time\"></div>\r\n        </div >\r\n    </div > `;\r\n});\r\n\r\nwindow.loadSong = (song) => {\r\n    console.log(`audio/${song}.mp3`);\r\n    audio.src = `audio/${song}.mp3`;\r\n}\r\n\r\nloadSong(songList[thisSong]);\r\n\r\nwindow.playSong = () => {\r\n    play.innerHTML = '<img src=\"img/pause.svg\">';\r\n    document.querySelectorAll('.player__item').forEach((el, index) => {\r\n        el.querySelector('.item__plays').innerHTML = `\r\n            <svg class=\"item__play\" width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                    d=\"M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z\" \r\n                />\r\n            </svg>\r\n        `;\r\n    })\r\n    document.querySelector(`.music${thisSong}`).querySelector('.item__plays').innerHTML = '<img class=\"item__play played\" src=\"img/pause_music.svg\">';\r\n    document.querySelector('.player__image img').classList.add('played');\r\n\r\n    audio.play();\r\n    play.classList.remove('pause');\r\n}\r\nwindow.pauseSong = () => {\r\n    play.innerHTML = '<img src=\"img/play.svg\">';\r\n    document.querySelectorAll('.player__item').forEach((el) => {\r\n        el.querySelector('.item__plays').innerHTML = `\r\n            <svg class=\"item__play\" width=\"37\" height=\"37\" viewBox=\"0 0 37 37\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n                <path\r\n                    d=\"M37 18.5C37 23.4065 35.0509 28.1121 31.5815 31.5815C28.1121 35.0509 23.4065 37 18.5 37C13.5935 37 8.88795 35.0509 5.41852 31.5815C1.9491 28.1121 0 23.4065 0 18.5C0 13.5935 1.9491 8.88795 5.41852 5.41852C8.88795 1.9491 13.5935 0 18.5 0C23.4065 0 28.1121 1.9491 31.5815 5.41852C35.0509 8.88795 37 13.5935 37 18.5ZM15.7019 11.7776C15.529 11.6545 15.3255 11.5813 15.1139 11.5662C14.9022 11.551 14.6904 11.5944 14.5017 11.6916C14.313 11.7888 14.1548 11.9361 14.0442 12.1172C13.9337 12.2984 13.8751 12.5065 13.875 12.7188V24.2812C13.8751 24.4935 13.9337 24.7016 14.0442 24.8828C14.1548 25.0639 14.313 25.2112 14.5017 25.3084C14.6904 25.4056 14.9022 25.449 15.1139 25.4338C15.3255 25.4187 15.529 25.3455 15.7019 25.2224L23.7956 19.4412C23.9455 19.3342 24.0677 19.193 24.152 19.0293C24.2363 18.8656 24.2803 18.6841 24.2803 18.5C24.2803 18.3159 24.2363 18.1344 24.152 17.9707C24.0677 17.807 23.9455 17.6658 23.7956 17.5588L15.7019 11.7776Z\" \r\n                />\r\n            </svg>\r\n        `;\r\n    })\r\n\r\n    document.querySelector('.player__image img').classList.remove('played');\r\n    audio.pause();\r\n    play.classList.add('pause');\r\n}\r\n\r\ndocument.querySelector('.player__name').innerHTML = songList[thisSong];\r\n\r\nwindow.showThisSong = () => {\r\n    document.querySelectorAll('.player__item').forEach((el) => {\r\n        el.classList.remove('played');\r\n    })\r\n    document.querySelector(`.music${thisSong}`).classList.add('played');\r\n    document.querySelector('.player__name').innerHTML = songList[thisSong];\r\n}\r\n\r\n\r\nwindow.nextSong = () => {\r\n\r\n    if (thisSong < songList.length - 1) {\r\n        thisSong++;\r\n    } else {\r\n        thisSong = 0;\r\n    }\r\n    loadSong(songList[thisSong]);\r\n    if (play.classList.contains('pause')) {\r\n        pauseSong();\r\n    } else {\r\n        playSong();\r\n    }\r\n\r\n    showThisSong();\r\n}\r\n\r\nwindow.prevSong = () => {\r\n    if (thisSong != 0) {\r\n        thisSong--;\r\n    } else {\r\n        thisSong = songList.length - 1;\r\n    }\r\n    loadSong(songList[thisSong]);\r\n    if (play.classList.contains('pause')) {\r\n        pauseSong();\r\n    } else {\r\n        playSong();\r\n    }\r\n\r\n    showThisSong();\r\n}\r\n\r\nnext.addEventListener('click', () => {\r\n    nextSong();\r\n})\r\n\r\nprew.addEventListener('click', () => {\r\n    prevSong();\r\n})\r\n\r\nplay.addEventListener('click', () => {\r\n    if (!play.classList.contains('pause')) {\r\n        pauseSong();\r\n    } else {\r\n        playSong();\r\n    }\r\n})\r\n\r\n\r\nwindow.updateProgress = (e) => {\r\n    const { duration, currentTime } = e.srcElement;\r\n    const percent = (currentTime / duration * 100);\r\n    progress.style.width = percent + '%';\r\n}\r\n\r\naudio.addEventListener('timeupdate', updateProgress);\r\n\r\n\r\nwindow.setProgress = (e) => {\r\n    const width = document.querySelector('.player__top').clientWidth;\r\n    const clickX = e.offsetX;\r\n    const duration = audio.duration;\r\n\r\n    audio.currentTime = (clickX / width) * duration;\r\n}\r\n\r\ndocument.querySelector('.player__top').addEventListener('click', setProgress);\r\n\r\n\r\naudio.addEventListener('ended', nextSong)\r\n\r\n\r\nwindow.itemClick = (index) => {\r\n    thisSong = index;\r\n    loadSong(songList[thisSong]);\r\n    playSong();\r\n    showThisSong();\r\n}\r\n\r\nvolume.addEventListener('input', (e) => {\r\n    audio.volume = e.target.value;\r\n    if (e.target.value == 0) {\r\n        document.querySelector('.volume__img').src = 'img/volume-off.png';\r\n    } else {\r\n        document.querySelector('.volume__img').src = 'img/volume-on.png';\r\n    }\r\n})\r\n\r\nwindow.volumeOff = () => {\r\n    if (audio.volume == 0) {\r\n        audio.volume = 1;\r\n        document.querySelector('.volume__img').src = 'img/volume-on.png';\r\n        volume.value = 1;\r\n    } else {\r\n        audio.volume = 0;\r\n        document.querySelector('.volume__img').src = 'img/volume-off.png';\r\n        volume.value = 0;\r\n    }\r\n}\r\n\r\nwindow.fullClick = () => {\r\n    const fullBody = document.querySelector('.player__music');\r\n    fullBody.classList.contains('active') ? removeFullBody() : showFullBody();\r\n\r\n    function removeFullBody() {\r\n        fullBody.classList.remove('active');\r\n        document.querySelector('.player__items').style.display = 'flex';\r\n    }\r\n\r\n    function showFullBody() {\r\n        fullBody.classList.add('active')\r\n        document.querySelector('.player__items').style.display = 'none';\r\n    }\r\n}\r\n\r\n\r\n\r\nlet vh = window.innerHeight * 0.01;\r\ndocument.documentElement.style.setProperty('--vh', `${vh}px`);\n\n//# sourceURL=webpack:///./script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;