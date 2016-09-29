/*
Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
For licensing, see license.txt or http://cksource.com/ckfinder/license
*/

CKFinder.customConfig = function( config )
{
	// Define changes to default configuration here.
	// For the list of available options, check:
	// http://docs.cksource.com/ckfinder_2.x_api/symbols/CKFinder.config.html

	// Sample configuration options:
	// config.uiColor = '#BDE31E';
	// config.language = 'fr';
	// config.removePlugins = 'basket';
	config.filebrowserImageBrowseUrl = '../editor/ckfinder/ckfinder.html?Type=Images';
	config.filebrowserFlashBrowseUrl = '../editor/ckfinder/ckfinder.html?Type=Flash';
	config.filebrowserUploadUrl = '../editor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Files';
	config.filebrowserImageUploadUrl = '../editor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Images';
	config.filebrowserFlashUploadUrl = '../editor/ckfinder/core/connector/aspx/connector.aspx?command=QuickUpload&type=Flash';
	config.filebrowserWindowWidth = '800';  //“浏览服务器”弹出框的size设置
	config.filebrowserWindowHeight = '500';

};
