Ext.define('DS.view.about.List', {

	extend: 'Ext.List',
	xtype: 'aboutList',

	config: {
		title: 'Programs',
		ui: 'round',
		itemTpl: [ '{title}' ]
	},

	initialize: function() {
		this.callParent();
		this.setData(DS.app.aboutPages);
	}
});
