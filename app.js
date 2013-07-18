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
            url: 'data/array.html'
        },
	{
            title: 'Doubly Linked List',
            xtype: 'htmlPage',
            url: 'data/doublyll.html'
        },
        {
            title: 'Operations on Matrices',
            xtype: 'htmlPage',
            url: 'data/matrix.html'
        },
        {
            title: 'Nodes in a Tree',
            xtype: 'htmlPage',
            url: 'data/nodes.html'
        },
	{
            title: 'Insertion and Deletion in a Queue',
            xtype: 'htmlPage',
            url: 'data/queue.html'
        },
	{
            title: 'Linear and Binary Search',
            xtype: 'htmlPage',
            url: 'data/search.html'
        },
	{
            title: 'Singly Linked List',
            xtype: 'htmlPage',
            url: 'data/singlyll.html'
        },
	{
            title: 'Push and Pop Operations on Stack',
            xtype: 'htmlPage',
            url: 'data/stack.html'
        },
	{
            title: 'Activity Selector',
            xtype: 'htmlPage',
            url: 'data/act.html'
        },
	{
            title: 'Breadth First Search',
            xtype: 'htmlPage',
            url: 'data/bfs.html'
        },
	{
            title: 'Depth First Search',
            xtype: 'htmlPage',
            url: 'data/dfs.html'
        },
	{
            title: 'Dijkstra Algorithm',
            xtype: 'htmlPage',
            url: 'data/dij.html'
        },
	{
            title: 'Insertion Sort Complexity',
            xtype: 'htmlPage',
            url: 'data/insert.html'
        },
	{
            title: 'Kruskal Algorithm',
            xtype: 'htmlPage',
            url: 'data/kruskal.html'
        },
	{
            title: 'Longest Common Subsequence',
            xtype: 'htmlPage',
            url: 'data/lcs.html'
        },
	{
            title: 'Merge Sort Comlexity',
            xtype: 'htmlPage',
            url: 'data/merge.html'
        },
	{
            title: 'Paranthesization Of Matrices',
            xtype: 'htmlPage',
            url: 'data/paran.html'
        },
	{
            title: 'Prims Algorithm',
            xtype: 'htmlPage',
            url: 'data/prims.html'
        },
	{
            title: 'Bubble Sort',
            xtype: 'htmlPage',
            url: 'data/bubble.html'
        },
	{
            title: 'Circular Linked List',
            xtype: 'htmlPage',
            url: 'data/circularll.html'
        },
	{
            title: 'Circular Queue Using Array',
            xtype: 'htmlPage',
            url: 'data/cirquarr.html'
        },
	{
            title: 'Binary Tree',
            xtype: 'htmlPage',
            url: 'data/binarytree.html'
        },
	{
            title: 'Insertion Sort',
            xtype: 'htmlPage',
            url: 'data/insertionsort.html'
        },
	{
            title: 'Merge Sort Using Array',
            xtype: 'htmlPage',
            url: 'data/mergearray.html'
        },
	{
            title: 'Queue Using Linked List',
            xtype: 'htmlPage',
            url: 'data/qullist.html'
        },
	{
            title: 'Quick Sort',
            xtype: 'htmlPage',
            url: 'data/quicksort.html'
        },
	{
            title: 'Reverse a Linked List',
            xtype: 'htmlPage',
            url: 'data/revll.html'
        },
	{
            title: 'Reverse Elements in Queue',
            xtype: 'htmlPage',
            url: 'data/revqueue.html'
        },
	{
            title: 'Selection Sort',
            xtype: 'htmlPage',
            url: 'data/selection.html'
        },
	{
            title: 'Stack Using Linked List',
            xtype: 'htmlPage',
            url: 'data/stackull.html'
        },
	{
            title: 'Adjacency List Representation of Graph',
            xtype: 'htmlPage',
            url: 'data/adjlistrep.html'
        },
	{
            title: 'Adjacency Matrix Representation of Graph',
            xtype: 'htmlPage',
            url: 'data/adjmatrixrep.html'
        },
	{
            title: 'AVL',
            xtype: 'htmlPage',
            url: 'data/avl.html'
        },
	{
            title: 'Dequeue',
            xtype: 'htmlPage',
            url: 'data/deque.html'
        },
	{
            title: 'Heap Sort',
            xtype: 'htmlPage',
            url: 'data/heapsort.html'
        },
	{
            title: 'Value of Polynomial',
            xtype: 'htmlPage',
            url: 'data/polynomial.html'
        },
	{
            title: 'Radix Sort',
            xtype: 'htmlPage',
            url: 'data/radixsort.html'
        },
	{
            title: 'Shell Sort',
            xtype: 'htmlPage',
            url: 'data/shellsort.html'
        },
	{
            title: 'Sparse Matrix',
            xtype: 'htmlPage',
            url: 'data/sparse.html'
        },
	{
            title: 'Warshall Algorithm',
            xtype: 'htmlPage',
            url: 'data/warshall.html'
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
