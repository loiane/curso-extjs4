Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 400,
	width: 500,

	title: 'Aula 35 - Absolute Layout',

	autoShow: true,

	autoScroll: true,

	layout: 'absolute',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			x: 20,
			y: 30,
			html: 'conteúdo do painel 1'
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			x: 50,
			y: 90,
			html: 'conteúdo do painel 2'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	