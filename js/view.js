define (
    'view',
    [
	'model',
	'tmpl',
	'jquery'
    ],

    function (model) {
	function renderList(data) {
	    var wrapper = tmpl(model.wrapper);
	    var list = tmpl(model.list, { data: data });

	    $('body').html(wrapper);
		elements = {
		    input: $('.item-value'),
		    addBtn: $('.item-add'),
		    listContainer: $('.item-list')
		};

	    elements.listContainer.html(list);
	};

	return {
	    renderList: renderList
	};
    }
);
