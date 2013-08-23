Ext.define('Curso.Janela',{
	extend: 'Ext.window.Window',

	height: 500,
	width: 700,

	title: 'Aula 38 - Card Layout',

	autoShow: true,

	//autoScroll: true,

	layout: 'card',

	activeItem: 0,

	items: [
		{
			xtype: 'panel',
			title: 'Painel 1',
			html: 'card layout - tela 01',
			dockedItems: [{
		        xtype: 'toolbar',
		        dock: 'bottom',
		        items: [{
		            text: 'Next',
		            handler: function(btn, e, eOpts) {
				        var win = btn.up('window');
				        win.getLayout().setActiveItem(1);
				    }
		        }]
		    }]
		},
		{
			xtype: 'panel',
			title: 'Painel 2',
			html: 'card layout - tela 02',
			dockedItems: [{
		        xtype: 'toolbar',
		        dock: 'bottom',
		        items: [{
		            text: 'Voltar',
		            handler: function(btn, e, eOpts) {
				        var win = btn.up('window');
				        win.getLayout().setActiveItem(0);
				    }
		        }]
		    }]
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Janela');
});	