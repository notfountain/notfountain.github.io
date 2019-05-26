const slides = [
    { id: 1, name: 'Derek Anderson1', job: 'BRITISH COMEDIAN1', video: 'some src', title: 'ENQUIRE ABOUT DEREK1' },
    { id: 2, name: 'Derek Anderson2', job: 'BRITISH COMEDIAN2', video: 'some src', title: 'ENQUIRE ABOUT DEREK2' },
    { id: 3, name: 'Derek Anderson3', job: 'BRITISH COMEDIAN3', video: 'some src', title: 'ENQUIRE ABOUT DEREK3' },
    { id: 4, name: 'Derek Anderson4', job: 'BRITISH COMEDIAN4', video: 'some src', title: 'ENQUIRE ABOUT DEREK4' }
];


let currentSlide = 1;
document.querySelector('h1').innerText = slides[currentSlide].name;
document.querySelector('.slide-title').innerText = slides[currentSlide].title;
document.querySelector('.person-job').innerText = slides[currentSlide].job;

const leftArrowElement = document.querySelector('.slider-left-arrow');
const rightArrowElement = document.querySelector('.slider-right-arrow');
const sliderPagesElements = document.querySelectorAll('.slider-page');

sliderPagesElements[currentSlide].classList.add('active');

function doSlide(direction) {
    currentSlide += direction;
    document.querySelector('h1').innerText = slides[currentSlide].name;
    document.querySelector('.slide-title').innerText = slides[currentSlide].title;
    document.querySelector('.person-job').innerText = slides[currentSlide].job;

   for (let i = 0; i<sliderPagesElements.length; i++) {
       if(i === currentSlide) {
        sliderPagesElements[i].classList.add('active');
       }
       else {
       sliderPagesElements[i].classList.remove('active');
       }
   }

    if (currentSlide === 0) {
        leftArrowElement.classList.add('disabled');
    } else {
        leftArrowElement.classList.remove('disabled');
    }
    if (currentSlide === 3) {
        rightArrowElement.classList.add('disabled');
    } else {
        rightArrowElement.classList.remove('disabled');
    }
}
leftArrowElement.addEventListener( 'click', function() {doSlide(-1)});
rightArrowElement.addEventListener( 'click', function() {doSlide(1)});


let photoForSlider = [
    {id: 1, src: 'http://placecorgi.com/649/948?no-track=1'},
    {id: 2, src: 'http://placecorgi.com/649/948?no-track=2'},
    {id: 3, src: 'http://placecorgi.com/649/948?no-track=3'},
    {id: 4, src: 'http://placecorgi.com/649/948?no-track=4'}
];

let sliderDots = document.querySelectorAll('.slider-dot');
let sliderImg = document.querySelector('.slider-photo img');


function changePhoto(id) {
    for (let i=0; i<photoForSlider.length; i++) {
        if (i===id) {
            sliderDots[i].classList.add('active');
            sliderImg.src = photoForSlider[i].src;
        }
        else {
            sliderDots[i].classList.remove('active');
        }
    }
    console.log('success');
}

for (let i=0; i<sliderDots.length; i++) {
    sliderDots[i].addEventListener('click', function() {changePhoto(i)})
}