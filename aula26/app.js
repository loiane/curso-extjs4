Ext.onReady(function(){
	
	Ext.create('Ext.panel.Panel', {
		title: 'Meu primeiro Panel',
		width: 300,
		height: 100,
		html: '<p>Meu primeiro Panel. Isso aqui é o corpo do Panel.</p>',
		renderTo: 'panel1'
	});


	//-----Exemplo 2---------//

	Ext.create('Ext.data.Store', {
	    storeId:'simpsonsStore',
	    fields:['name', 'email', 'phone'],
	    data:{'items':[
	        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
	        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
	        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
	        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
	    ]},
	    proxy: {
	        type: 'memory',
	        reader: {
	            type: 'json',
	            root: 'items'
	        }
	    }
	});

	var grid = Ext.create('Ext.grid.Panel', {
	    title: 'Simpsons',
	    store: Ext.data.StoreManager.lookup('simpsonsStore'),
	    columns: [
	        { header: 'Name',  dataIndex: 'name' },
	        { header: 'Email', dataIndex: 'email', flex: 1 },
	        { header: 'Phone', dataIndex: 'phone' }
	    ],
	    height: 200,
	    width: 400
	});


	var panel = Ext.create('Ext.panel.Panel', {
		title: 'Meu primeiro Panel',
		width: 500,
		height: 600,
		items: [
			{
		        xtype: 'displayfield',
		        fieldLabel: 'Nome',
		        name: 'nome',
		        value: 'Loiane Groner'
		    }, 
		    grid
		],
		renderTo: 'panel2'
	});

	var store = Ext.create('Ext.data.TreeStore', {
	    root: {
	        expanded: true,
	        children: [
	            { text: "detention", leaf: true },
	            { text: "homework", expanded: true, children: [
	                { text: "book report", leaf: true },
	                { text: "alegrbra", leaf: true}
	            ] },
	            { text: "buy lottery tickets", leaf: true }
	        ]
	    }
	});

	var tree = Ext.create('Ext.tree.Panel', {
	    title: 'Simple Tree',
	    width: 200,
	    height: 150,
	    store: store,
	    rootVisible: false
	});

	panel.add(tree);

	panel.remove(grid);

});