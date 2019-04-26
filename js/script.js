function sumTwoNumbers (x=1, y=2) {
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


let giftCard = {
	sku: 'sk001',
	name: 'kartka podarunkowa',
	price: 50,
	class: 'gift'
};

function createMarkup(product) {
	return `
	<div class="product ${product.class}">
		<h2>${product.name}</h2>
		<span class="sku">${product.sku}</span>
		<span class="price">${product.price}</span>
	</div>
	`
}

window.onload = function () {
	const content = document.querySelector('.content');
	content.innerHTML = createMarkup(giftCard);
}