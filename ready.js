;(function() {

	'use strict';

	window.DOMReady = {

		init: function() {

			for(var funcs in DOMReady) {

				if(funcs == 'init') continue;

				DOMReady[funcs]();

			}

		},

		ready: function() {

			console.log('ready');

		},

		example2: function(){
			
			console.log('example2');

		}

	}

	$(function() {

		DOMReady.init();

	});

})();