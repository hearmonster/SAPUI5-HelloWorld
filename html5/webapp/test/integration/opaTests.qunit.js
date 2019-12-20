/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SAPUI5/Tutorials/HelloWorld/html5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});