Ext.define('CursoExt4.classe.Usuario', {
			
	nome : '',
	senha : '',

	constructor : function(options) {
		
		Ext.apply(this, options || {});

		console.log('construtor foi chamado');
	}
});