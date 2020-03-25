/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


jQuery(document).ready(function ($) {

	// -- General -- //
	var $GeneralScope = {

		// Constructor
		init: function init() {
			this.menuScripts();
			this.navigationSnippet();
		},

		// Menu scripts
		menuScripts: function menuScripts() {
			var ButtonTrigger = $('.navbar-header .navbar-toggle');
			var MenuWrapper = $('.navbar-header .navbar-collapse');

			if (ButtonTrigger) {
				$(document).on('click', '.navbar-toggle', function () {
					ButtonTrigger.toggleClass("collapsed");
				});
			}

			$(window).scroll(function () {

				var scroll = $(window).scrollTop();
				var header_el = $('.navbar');

				if (scroll >= 100) {
					header_el.addClass("scroll_menu");
				} else {
					header_el.removeClass("scroll_menu");
				}
			});
		},

		navigationSnippet: function navigationSnippet() {
			$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]').not('[href="#0"]').click(function (event) {
				var _this = this;

				// On-page links
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					(function () {
						// Figure out element to scroll to
						var target = $(_this.hash);

						target = target.length ? target : $('[name=' + _this.hash.slice(1) + ']');
						// Does a scroll target exist?
						if (target.length) {
							// Only prevent default if animation is actually gonna happen
							event.preventDefault();
							$('html, body').animate({
								scrollTop: target.offset().top
							}, 1000, function () {
								// Callback after animation
								// Must change focus!
								var $target = $(target);
								$target.focus();

								if ($(window).width() <= 768) {
									menu_wrapper.slideUp(300);
								}

								if ($target.is(":focus")) {
									// Checking if the target was focused
									return false;
								} else {
									$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
									$target.focus(); // Set focus again
								};
							});
						}
					})();
				}
			});
		}
	};

	// -- Agegate -- //
	var $AgegateScope = {
		// Constructor
		init: function init() {
			this.ageScripts();
		},
		// scripts for Agegate
		ageScripts: function ageScripts() {
			// Dom manipulation
			var ListCountries = $('.form-item-list-of-countries');
			var Checklist = $('.form-item-remember-me');
			var FbValidate = $('.age_checker_facebook_validate');
			var RememberMe = $('.ab-inbev-remember-me');
			var RememberLabel = Checklist.find('label');
			var RememberMeStr = RememberMe.find('strong');
			var FooterContent = $('.ab-inbev-footer');

			if (ListCountries) {
				ListCountries.insertAfter('#age_checker_error_message');
			}

			/*
   if(Checklist) {
   	Checklist.append(RememberMe);
   	RememberLabel.append(RememberMeStr);
   }
   		if(FbValidate){
     FbValidate.insertAfter('#edit-submit');
     FbValidate.append('<span class="fbTrigger">Sign in with <b>facebook</b></span>')
   }
   		if(FooterContent) {
   	$('.agegate-container-footer').append(FooterContent);
   }*/
		}
	};

	// -- Home -- //
	var $HomeScope = {

		// Constructor
		init: function init() {

			// Instance functions
			this.homeSliders();
		},

		// scripts for slider
		homeSliders: function homeSliders() {}
	};

	// ----------------------------
	// TRIGGERS
	// ----------------------------

	// Trigger
	$GeneralScope.init();

	// Agegate
	if ($('body').hasClass('page-agegate')) {
		$AgegateScope.init();
	}

	// Home Scripts
	if ($('body').hasClass('front')) {
		$HomeScope.init();
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ })
/******/ ]);