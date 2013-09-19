Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 42 - Table Layout',

	autoShow: true,

	//autoScroll: true,

	layout: {
		type: 'table', // vertical
		columns: 3
	},
		
	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'Painel 1',
			rowspan: 2
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'Painel 2',
			colspan: 2
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			html: 'Painel 3',
			colspan: 1,
			rowspan: 1
		},
		{
			xtype: 'panel',
			title: 'Painel 4',
			html: 'Painel 4',
			colspan: 1,
			rowspan: 1
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	