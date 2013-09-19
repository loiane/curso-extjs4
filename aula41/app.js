Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 41 - VBox Layout',

	autoShow: true,

	//autoScroll: true,

	layout: {
		type: 'vbox'//, // vertical
		//align: 'stretch'
	},
		
	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'column layout - tela 50%',
			width: '200',
			flex: 1 // 1/6
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'column layout - - tela 50% ----------------',
			width: '400',
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
		    width: '100%',
			flex: 3 // 3/6
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	