define (
    'controller',
    [
	'model',
	'view',
	'tmpl',
	'jquery'
    ],

    function (model, view) {
	function start() {
	    document.getElementsByClassName('item-add')[0].addEventListener('click', function() {
		model.addItem(document.getElementsByClassName('item-value')[0].value);
		view.renderList(model.modelData);
		document.getElementsByClassName('item-value')[0].value = '';
		start();
	    }, false);

	    var classname = document.getElementsByClassName('item-delete');

	    for (var i = 0; i < classname.length; i++) {
		document.getElementsByClassName('item-delete')[i].addEventListener('click', function() {
        model.removeItem(this.parentElement.textContent.substring(0, this.parentElement.textContent.length - 13));
		    view.renderList(model.modelData);
		    start();
		}, false);
	    }
	}

	return {
	    start: start
	};
    }
);
