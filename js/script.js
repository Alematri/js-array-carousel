const itemsWrapper = document.querySelector('.items-wrapper');
const btnPrev = document.querySelector('.up');
const btnNext = document.querySelector('.down');

btnPrev.classList.add('hide');

const images = [
  '../img/01.webp',
  '../img/02.webp',
  '../img/03.webp',
  '../img/04.webp',
  '../img/05.webp',
  '../img/06.webp',
  '../img/07.webp',
  '../img/08.webp',
  '../img/09.webp',
  '../img/10.webp',
  '../img/11.webp',
  '../img/12.webp',
];

let counterImg=0

for (let i=0; i<images.length; i++){
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
