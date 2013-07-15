Ext.define('DS.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar','DS.view.about.Card'],
    config: {
        tabBarPosition: 'bottom',

        items: [
        {
				xtype: 'homepanel'
		},
		{
				xclass: 'DS.view.about.Card'		
		},            
		{
				xtype: 'aboutus'
		}
		
        ]
    }
});
