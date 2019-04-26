'use strict';

function sumTwoNumbers() {
	var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

	return x + y;
}

//const sayHello = () => alert('Hello world!');
//sayHello();

// let name = 'Main-header';
// // console.log(name.includes('Main'));
// // console.log(sumTwoNumbers());
// //
// // const arr = [1,2,10,12,23];
// // console.log(arr.includes(1));


var giftCard = {
	sku: 'sk001',
	name: 'kartka podarunkowa',
	price: 50,
	class: 'gift'
};

function createMarkup(product) {
	return '\n\t<div class="product ' + product.class + '">\n\t\t<h2>' + product.name + '</h2>\n\t\t<span class="sku">' + product.sku + '</span>\n\t\t<span class="price">' + product.price + '</span>\n\t</div>\n\t';
}

window.onload = function () {
	var content = document.querySelector('.content');
	content.innerHTML = createMarkup(giftCard);
};
