Ext.onReady(function(){

	Ext.tip.QuickTipManager.init();

	Ext.create('Ext.Button', {
	    text: 'Botão pequeno',
	    renderTo: 'btn1',
	    tooltip: 'exemplo de tooltip',
	    listeners: {
        click: function(btn) {
            btn.setText('cliquei no botão');
        },
        mouseover: function(btn) {
            btn.setText('mouseover');
        },
        mouseout: function(btn) {
            btn.setText('mouseout');
        }
    }

	});
	
	Ext.create('Ext.Button', {
	    text: 'Botão médio',
	    renderTo: 'btn2',
	    scale: 'medium',
	    handler: function() {
	        console.log('Botão médio');
	    }
	});

	Ext.create('Ext.Button', {
	    text: 'Botão grande',
	    renderTo: 'btn3',
	    scale: 'large',
	    handler: function() {
	        console.log('Botão grande');
	    }
	});

	var btn = Ext.create('Ext.Button', {
	    text: 'Botão disabled',
	    renderTo: 'btn4',
	    disabled: true,
	    handler: function() {
	        console.log('Botão disabled');
	    }
	});
	btn.setDisabled(true);

	Ext.create('Ext.Button', {
	    renderTo: 'btn5',
	    iconCls: 'add',
	    handler: function() {
	        console.log('só icone - pequeno');
	    }
	});

	Ext.create('Ext.Button', {
	    renderTo: 'btn6',
	    iconCls: 'add',
	    scale: 'medium',
	    handler: function() {
	        console.log('só icone - medio');
	    }
	});

	Ext.create('Ext.Button', {
	    renderTo: 'btn7',
	    iconCls: 'add',
	    scale: 'large',
	    handler: function() {
	        console.log('só icone - grande');
	    }
	});

	//--
	Ext.create('Ext.Button', {
		text: 'pequeno',
	    renderTo: 'btn8',
	    iconCls: 'add',
	    iconAlign: 'top', //left right bottom top
	    enableToggle: true,
	    toggleHandler: function(btn, state) {
	        console.log(state);
	    }
	});

	Ext.create('Ext.Button', {
		text: 'médio',
	    renderTo: 'btn9',
	    iconCls: 'add',
	    scale: 'medium',
	    iconAlign: 'top', //left right bottom top
	    enableToggle: true
	});

	Ext.create('Ext.Button', {
		text: 'grande',
	    renderTo: 'btn10',
	    iconCls: 'add',
	    scale: 'large',
	    iconAlign: 'top', //left right bottom top
	    enableToggle: true
	});

	//---
	Ext.create('Ext.Button', {
		text: 'link',
	    renderTo: 'btn11',
	    iconCls: 'add',
	    href: 'http://loiane.com'
	    
	});

	Ext.create('Ext.Button', {
		text: 'link',
	    renderTo: 'btn12',
	    iconCls: 'add',
	    scale: 'medium',
	    href: 'http://loiane.com'
	});

	Ext.create('Ext.Button', {
		text: 'link',
	    renderTo: 'btn13',
	    iconCls: 'add',
	    scale: 'large',
	    href: 'http://loiane.com'
	});

	// display a dropdown menu:
	Ext.create('Ext.button.Split', {
	    renderTo: 'btn14',
	    text: 'Options',
	    tooltip: 'tooltip do botão',
	    // handle a click on the button itself
	    handler: function() {
	        console.log("The button was clicked");
	    },
	    menu: Ext.create('Ext.menu.Menu',{
	        items: [
	            // these will render as dropdown menu items when the arrow is clicked:
	            {text: 'Item 1', handler: function(){ console.log("Item 1 clicked"); }},
	            {text: 'Item 2', handler: function(){ console.log("Item 2 clicked"); }}
	        ]
	    })
	});


	Ext.create('Ext.button.Cycle', {
	    showText: true,
	    prependText: 'View as ',
	    renderTo: 'btn15',
	    menu: {
	        id: 'view-type-menu',
	        items: [{
	            text: 'text only',
	            iconCls: 'view-text',
	            checked: true
	        },{
	            text: 'HTML',
	            iconCls: 'view-html'
	        }]
	    },
	    changeHandler: function(cycleBtn, activeItem) {
	        Ext.Msg.alert('Change View', activeItem.text);
	    }
	});

});	