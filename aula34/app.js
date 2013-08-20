Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 400,
	width: 500,

	title: 'Aula 34 - Accordion Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'accordion',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'conteúdo do painel 1'
		},
		{
			xtype: 'panel',
			title: 'Painel 2'
		},
		{
			xtype: 'panel',
			title: 'Painel 3'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	