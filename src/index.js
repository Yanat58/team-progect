import './js/modal-windows';

// swiper
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Pagination]);
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
