
Ext.define('DS.view.Programs', {
    extend: 'Ext.NestedList',
    xtype: 'programs',
    
    requires: [
        'Ext.data.TreeStore',
        'DS.model.Stream'
    ],

    config: {
		title: 'Programs',
		iconCls: 'download',
		
		items: {
			xtype:'list',
			itemTpl: '{title}',
			title: 'Programs',
			
			store: {
            type: 'tree',
            field: ['title', 'content'],
            id: 'NestedListStore',
            model: 'DS.model.Stream',
            root: {},
            proxy: {
                type: 'ajax',
                url: 'programs.json'
					}
				}	
			
			}    
		}
});

var data = {
     text: 'Groceries',
     items: [{
    title: 'Program 1',
	leaf: true,
	 detailCard: {
        html: 'You are viewing the detail card!'
    }
			 
		},{
			text: 'Program 2',
			leaf: true,
			},{
			text: 'Program 3',
			leaf: true 
		},{
			text: 'Program 4',
			leaf: true 
		},{
			text: 'Program 5',
			leaf: true 
		},{
			text: 'Program 6',
			leaf: true 
		},{
			text: 'Program 7',
			leaf: true 
		},{
			text: 'Program 8',
			leaf: true 
		},{
			text: 'Program 9',
			leaf: true 
		},{
			text: 'Program 10',
			leaf: true 
		}]
};

var store = Ext.create('Ext.data.TreeStore', {
     model: 'ListItem',
     defaultRootProperty: 'items',
     root: data
 });

var nestedList = Ext.create('Ext.NestedList', {
     fullscreen: true,
     title: 'Groceries',
     displayField: 'text',
     store: store,
     detailCard:{
        xtype:'panel',
        styleHtmlContent: true,
        scrollable: true,
        html: 'Hey buddy'
      }
});
