import './style.css';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const nextEl = document.querySelector('.swiper-next');
const input = document.querySelector('.search-input');
const weather = axios.create({
  baseURL: 'http://api.openweathermap.org',
});
const getCoordinates = async (city) => {
  try {
    const position = await weather.get('/data/3.0/onecall/overview', {
      params: {
        lon: '-11.8092',
        lat: '51.509865',
        appid: 'a8568d5910753dfedaad1341feffac5c',
      },
    });
    console.log(position);
  } catch (error) {
    console.log(error);
  }
};
const swiper = new Swiper('.swiper', {
  allowSlidePrev: false,
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination',
  },
});
nextEl.addEventListener('click', (event) => {
  console.log(swiper);
  swiper.slideNext();
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    const city = input.value;
    console.log(city);
    getCoordinates(city);
  }
});
