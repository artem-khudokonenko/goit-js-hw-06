const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galariEl = document.querySelector("ul.gallery")
function addImg(img) {
  const list = img.map(
    (element) =>
    `<li class="img-hw-3"><img src="${element.url}" alt="${element.alt}" width=150></li>`
  ).join('')
  galariEl.insertAdjacentHTML('beforeend', list)
}
addImg(images)


console.log(galariEl)