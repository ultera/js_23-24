requirejs.config ({
    paths: {
	jquery: 'https://code.jquery.com/jquery-1.4.4.min',
	tmpl: 'tmpl'
    },
    shim: {
	jquery: {
	    exports: 'jQuery'
	},
	tmpl: {
	    exports: 'tmpl'
	}
    }
});

require (
    [
	'controller',
	'view',
	'model',
	'tmpl',
	'jquery'
    ],
    function (controller, view, model, tmpl, $) {
	view.renderList(model.modelData);
	controller.start();
    }
);
