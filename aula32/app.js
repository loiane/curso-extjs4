Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 400,
	width: 500,

	title: 'Aula 32 - Auto Layout',

	autoShow: true,

	autoScroll: true,

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			height: 100
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			height: 150,
			width: 400
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			height: 120,
			width: 450
		},
		{
			xtype: 'panel',
			title: 'Painel 4',
			height: 50
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	