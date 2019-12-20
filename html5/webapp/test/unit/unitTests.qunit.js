/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5/Tutorials/HelloWorld/html5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});