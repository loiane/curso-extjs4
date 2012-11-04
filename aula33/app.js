Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 400,
	width: 500,

	title: 'Aula 33 - Anchor Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'anchor',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			//anchor: '100%, 25%'
			anchor: '-50, -150'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			anchor: '90%, 50%'
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			anchor: '50%, 20%'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	