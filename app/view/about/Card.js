Ext.define('DS.view.about.Card', {

	extend: 'Ext.NavigationView',
	xtype: 'aboutContainer',

	config: {

		title: 'Programs',
        iconCls: 'download',
	scrollable: 'true',
	//styleHtmlContent: true,
        autoDestroy: false,

	items: [
		{
			xtype: 'aboutList'
		}
	]
	}
});
