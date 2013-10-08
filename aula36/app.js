Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 36 - Border Layout',

	autoShow: true,

	//autoScroll: true,

	layout: 'border',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'regiao central',
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
			height: '150',
			collapsible: true,
			split: true
		},
		{
			xtype: 'panel',
			title: 'Painel 5',
			html: 'regiao sul',
			region: 'south',
			height: '150',
			collapsible: true,
			split: true
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	
