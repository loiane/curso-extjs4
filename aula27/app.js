Ext.onReady(function(){

	Ext.create('Ext.window.Window', {
	    title: 'Oi',
	    height: 200,
	    width: 400,
	    layout: 'fit',
	    items: {  // Let's put an empty grid in just to illustrate fit layout
	        xtype: 'grid',
	        border: false,
	        columns: [{header: 'World'}],                 // One header just for show. There's no data,
	        store: Ext.create('Ext.data.ArrayStore', {}) // A dummy empty data store
	    },
	    autoShow: true,
	    closeAction: 'hide'
	});

	Ext.create('Ext.window.Window',{
	    width:500,
	    height:300,
	    maximizable:false,
	    modal:true,
	    loader : {
	        url : "content.html",
	        loadMask : false,
	        autoLoad : true, // important
	        renderer : 'html' // this is also the default option, other options are data | component
	    },
	    title:"My First Extjs 4 window"//,
	    //autoShow: true
	});

});	