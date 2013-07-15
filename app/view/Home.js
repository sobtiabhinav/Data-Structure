Ext.define('DS.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		cls: 'home',
		
		html: [
			'<br /><img height=200 src="resources/icons/logo.png" />',
			'<h1>DS Programs</h1>',
			"<br /><p>Contains a few of the most widely used Data Structure programs in C</p>",
			"<p>You may request programs at <a>app@inkmagik.com</a>.</p>",
			"<p>Please rate us if you like the app!</p>",
			'<br /><h2>Developed by <a href="http://inkmagik.com" target="_blank">InkMagik</a></h2>'
		].join("")
		
		}	
});
