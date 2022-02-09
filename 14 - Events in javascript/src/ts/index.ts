import '../scss/style.scss';
import { addListener } from './utils';

document.addEventListener('DOMContentLoaded', function () {

  const content = document.querySelector('.slideshow-view .slideshow-view__content') as HTMLSelectElement;
  const slides = document.querySelectorAll('#slides .slide');
  let currentSlide = 0;
  const pause = document.getElementById('pause');

  addListener('pause', 'click', () => {
    pause.classList.toggle('paused');
  })

  addListener('start', 'click', () => {
    const  y = document.getElementById('slides');
    y.classList.remove('slideshow-view__content');
    y.classList.add('slides');
    content.style.transform = `translateX(0)`;
    const current = document.querySelector('.selected') as HTMLElement;
    current.classList.remove('selected');
    const bar = document.querySelector('.bar') as HTMLElement;
    bar.style.display = 'none';

    setInterval(nextSlide,2000);
    function nextSlide(){
      if (pause.classList.contains('paused')) {
        currentSlide %= slides.length;
      } else {
        currentSlide = (currentSlide+1)%slides.length;
      }
      slides[currentSlide].className = 'slide';
      //currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';
    }
  });

  addListener('stop', 'click', () => {
    document.location.reload();
  });

})

const navigation = document.querySelector('.navigation') as HTMLSelectElement;
const view = document.querySelector('.slideshow-view') as HTMLSelectElement;
const content = document.querySelector('.slideshow-view .slideshow-view__content') as HTMLSelectElement;
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

navigation.addEventListener('click', (event)=> {
  event.target.classList.add('selected') as HTMLImageElement;
  event.target.scrollIntoView({inline: "center", behavior: "smooth"});
})

const thumbnails = Array.from(document.querySelectorAll('.num'));

next.addEventListener('click', () => {

  const current = document.querySelector('.selected') as HTMLElement;
  if (thumbnails.indexOf(current) + 1 < thumbnails.length) {
    thumbnails.forEach((e) => {
      e.classList.remove('selected');
    });

    current.nextElementSibling.classList.add('selected');
    current.nextElementSibling.scrollIntoView({inline: "center", behavior: "smooth"});
    content.style.transform = `translateX(${current.dataset.index * -view.offsetWidth}px)`;
  }
});
previous.addEventListener('click', () => {
  const current = document.querySelector('.selected');
  if (thumbnails.indexOf(current) > 0) {
    thumbnails.forEach((e) => {
      e.classList.remove('selected');
    });
    content.style.transform = `translateX(${(current.dataset.index - 2) * -view.offsetWidth}px)`;
    current.previousElementSibling.classList.add('selected');
    current.previousElementSibling.scrollIntoView({inline: "center", behavior: "smooth"});
  }
});
thumbnails.forEach((e) => {
  e.addEventListener('click', () => {
    thumbnails.forEach((e) => {
      e.classList.remove('selected');
    });
    e.classList.add('selected');
    e.scrollIntoView({inline: "center", behavior: "smooth"});
    content.style.transform = `translateX(${thumbnails.indexOf(e) * -view.offsetWidth}px)`;
  });
});
