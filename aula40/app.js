Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 40 - HBox Layout',

	autoShow: true,

	//autoScroll: true,

	layout: {
		type: 'hbox', // horizontal
		align: 'stretch'
	},
		
	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'column layout - tela 50%',
			flex: 1 // 1/6
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'column layout - - tela 50%',
			flex: 2 // 2/6
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			html: 'column layout - - tela 50%',
			dockedItems: [{
		        xtype: 'toolbar',
		        dock: 'bottom',
		        items: [{
		            text: 'Next'
		        }]
		    }],
		    height: 300,
			flex: 3 // 3/6
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	