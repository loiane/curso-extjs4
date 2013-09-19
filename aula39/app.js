Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 39 - Column Layout',

	autoShow: true,

	//autoScroll: true,

	layout: 'column',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'column layout - tela 50%',
			width: 200
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'column layout - - tela 50%',
			columnWidth: 0.8
		},
		{
			xtype: 'panel',
			title: 'Painel 3',
			html: 'column layout - - tela 50%',
			columnWidth: 0.2
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	