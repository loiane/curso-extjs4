Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 300,
	width: 400,

	title: 'Live Reload',

	autoShow: true,

	//autoScroll: true,

	layout: 'border',

	items: [
		{
			xtype: 'panel',
			title: 'Painelxxxxxxxxxxxxxxxxx 1',
			html: 'regiao central- mudando com o live reload',
			region: 'center'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'regiao oeste',
			region: 'west',
			width: '250',
			collapsible: true,
			split: true
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			html: 'regiao lest',
			region: 'east',
			width: '250',
			collapsible: true,
			split: true
		},
		{
			xtype: 'panel',
			title: 'Painel 4',
			html: 'regiao norte',
			region: 'north',
			width: '150',
			collapsible: true,
			split: true
		},
		{
			xtype: 'panel',
			title: 'Painel 5',
			html: 'regiao sul',
			region: 'south',
			width: '150',
			collapsible: true,
			split: true
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	