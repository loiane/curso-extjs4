Ext.define('Curso.Form',{
	extend: 'Ext.form.Panel',


	height: 400,
	width: 500,

	title: 'Aula 33 - Anchor Layout',

	autoScroll: true,

	layout: 'anchor',

	items: [
		{
			xtype: 'textfield',
			allowBlank: false,
			label: 'Campo',
			msgTarget: 'side'
		}
	]
});

Ext.onReady(function(){
	Ext.create('Curso.Form');
});	