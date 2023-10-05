const itemsWrapper = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');
const ThubsWrapper = document.querySelector('.thubs-wrapper');

const images = [
  './img/01.webp',
  './img/02.webp',
  './img/03.webp',
  './img/04.webp',
  './img/05.webp',
  './img/06.webp',
  './img/07.webp',
  './img/08.webp',
  './img/09.webp',
  './img/10.webp',
  './img/11.webp',
  './img/12.webp',
];

let counterImg=0

for (let i=0; i<images.length; i++){
  const image = images[i];
  itemsWrapper.innerHTML += `<img src="${image}" class="item hide">`;

  // creo un nuovo elem img
  const thub = new Image();
  thub.src = image;
  thub.classList.add('thub');
  ThubsWrapper.append(thub);
}

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counterImg].classList.remove('hide');

const thubCollection = document.getElementsByClassName('thub');

thubCollection[counterImg].classList.add('active');

btnNext.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');
  thubCollection[counterImg].classList.remove('active');

  counterImg++;
  if(counterImg === images.length) counterImg= 0;

  itemsCollection[counterImg].classList.remove('hide');
  thubCollection[counterImg].classList.add('active');
});

btnPrev.addEventListener('click', function() {
  itemsCollection[counterImg].classList.add('hide');
  thubCollection[counterImg].classList.remove('active');

  counterImg--;
  if (counterImg < 0) counterImg= images.length - 1;

  itemsCollection[counterImg].classList.remove('hide');
  thubCollection[counterImg].classList.add('active');
});