Ext.define('DS.controller.About', {

	extend: 'Ext.app.Controller',

	config: {

		refs: {
			aboutContainer: 'aboutContainer'
		},

		control: {
			aboutList: {
				itemtap: 'onAboutItemTap',
				activate: 'onAboutListActivate'
			}
		}
	},

	onAboutListActivate: function(list) {
		list.deselectAll();
	},

	onAboutItemTap: function(list, idx) {
		this.getAboutContainer().push(DS.app.config.aboutPages[idx]);
	}
});
