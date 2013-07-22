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
			'<h1></h1>',
			"<br /><p>Contains over 40 most used Data Structure programs in C <br /></p>",
			"<p> The application finds its use mostly during your practicals (If you know what we mean :P)</p>",
			"<p>You may request programs at <a>app@inkmagik.com</a>.</p>",
			"<p>Don't forget to rate us if you like the app!</p>",
			'<br /><h2><b>Developed by <a href="http://inkmagik.com">InkMagik</a></b></h2>'
		].join("")
		
		}	
});
