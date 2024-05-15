const products1 = [
  {
    title: 'Zone Sweatshirt',
    price: '$19.95 – $159.95',
    img: '/assets/div.product-top.png',
  },
  {
    title: 'Black Jeans',
    price: '$34.99',
    img: './assets/div.product-top (4).png',
  },
  {
    title: 'Green Jacket',
    price: '$59.95',
    img: './assets/div.product-top (2).png',
  },
  {
    title: 'White Sneakers',
    price: '$49.95',
    img: './assets/div.product-top (3).png',
  },
];
let container = document.querySelector('.container');
products1.forEach(function (element) {
  let div = document.createElement('div');

  let title = document.createElement('p');
  title.textContent = element.title;
  title.classList.add('title');

  let price = document.createElement('p');
  price.textContent = element.price;
  price.classList.add('price');

  let img = document.createElement('img');
  img.src = element.img;
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(price);
  container.appendChild(div);
});

const products2 = [
  {
    title: 'Adult Quantity Tee',
    price: '$26.00 – $29.00',
    img: './assets/Item.png',
    colors: ['black', '#D7A983'],
  },
  {
    title: 'Red Hoodie',
    price: '$24.95 - $149.95',
    img: './assets/Item (1).png',
    colors: ['black', '#D7A983'],
  },
  {
    title: 'AOP Cut & Sew Tee',
    price: '$26.00 – $29.00',
    img: './assets/Item (2).png',
    colors: ['black', '#D7A983'],
  },
  {
    title: 'Fine Jersey Tee',
    price: '$26.00 – $29.00',
    img: './assets/Item (3).png',
    colors: ['black', '#D7A983'],
  },
];
products2.forEach(function (element) {
  let div = document.createElement('div');

  let title = document.createElement('p');
  title.textContent = element.title;
  title.classList.add('title');

  let price = document.createElement('p');
  price.textContent = element.price;
  price.classList.add('price');

  let img = document.createElement('img');
  img.src = element.img;

  let div2 = document.createElement('div');
  element.colors.forEach(function (element) {
    let div3 = document.createElement('div');
    div3.style.backgroundColor = element;
    div3.classList.add('color');
    div2.appendChild(div3);
  });
  div2.classList.add('div2');
  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(price);
  div.appendChild(div2);
  container.appendChild(div);
});
