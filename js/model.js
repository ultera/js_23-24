define (
    'model',
    [

    ],

    function () {
	var data = ['learn javascript', 'learn html', 'make coffee'];
	var wrapper = document.getElementById('wrapper-template').innerHTML;
	var list = document.getElementById('list-template').innerHTML;

	function addItem(item) {
	    if (item.length === 0) {
		return;
	    }

	    data.push(item);

	    return data;
	}

	function removeItem(item) {
	    var index = data.indexOf(item);

	    if (index === -1) {
		return;
	    }

	    data.splice(index, 1);

	    return data;
	}

	return {
	    modelData: data,
	    wrapper: wrapper,
	    list: list,
	    addItem: addItem,
	    removeItem: removeItem
	};
    }
);
