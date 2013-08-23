Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 37 - Fit Layout',

	autoShow: true,

	//autoScroll: true,

	layout: 'fit',

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'fit layout'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	