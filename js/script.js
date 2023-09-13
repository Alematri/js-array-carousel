const itemsWrapper = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

btnPrev.classList.add('hide');

const images = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jgp',
  'img/06.jgp',
  'img/07.jgp',
  'img/08.jgp',
  'img/09.jgp',
  'img/10.jgp',
  'img/11.jgp',
  'img/12.jgp',
];

let counterImg=0

for (let i=0; i< images.length; i++){
  const image = images[i];
  itemsWrapper.innerHTML += `<img src="${image}" class="item hide">`;
}

const itemsCollection = document.getElementsByClassName('item');

itemsCollection[counterImg].classList.remove('hide');

btnNext.addEventListener('click', function(){
  itemsCollection[counterImg].classList.add('hide');

  counterImg++;

  itemsCollection[counterImg].classList.remove('hide');

  btnPrev.classList.remove('hide');

  if(counterImg === itemsCollection.length -1){
  btnNext.classList.add('hide');
  }
});

btnPrev.addEventListener('click', function() {
  itemsCollection[counterImg].classList.add('hide');

  counterImg--;

  itemsCollection[counterImg].classList.remove('hide');

  btnNext.classList.remove('hide');


  if (counterImg === 0) btnPrev.classList.add('hide');
  });
