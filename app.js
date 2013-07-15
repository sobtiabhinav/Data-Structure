/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
//<debug>

Ext.Loader.setPath({
    'Ext': 'touch/src',
    'DS': 'app'
});
//</debug>

Ext.application({
    name: 'DS',

    aboutPages: [
        {
            title: 'Operations on Arrays',
            xtype: 'htmlPage',
            url: 'data/program1.html'
        },
	{
            title: 'Doubly Linked List',
            xtype: 'htmlPage',
            url: 'data/program2.html'
        },
        {
            title: 'Operations on Matrices',
            xtype: 'htmlPage',
            url: 'data/program3.html'
        },
        {
            title: 'Nodes in a Tree',
            xtype: 'htmlPage',
            url: 'data/program4.html'
        },
	{
            title: 'Insertion and Deletion in a Queue',
            xtype: 'htmlPage',
            url: 'data/program5.html'
        },
	{
            title: 'Linear and Binary Search',
            xtype: 'htmlPage',
            url: 'data/program6.html'
        },
	{
            title: 'Singly Linked List',
            xtype: 'htmlPage',
            url: 'data/program7.html'
        },
	{
            title: 'Sortings',
            xtype: 'htmlPage',
            url: 'data/program8.html'
        },
	{
            title: 'Push and Pop Operations on Stack',
            xtype: 'htmlPage',
            url: 'data/program9.html'
        }
    ],

    requires: [
        'Ext.MessageBox', 'Ext.data.Store'
    ],

    views: [
        'Main', 'Home', 'About','about.Card','about.List','about.HtmlPage'
    ],

    controllers: [
        'About'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('DS.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
