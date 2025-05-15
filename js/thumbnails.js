import {PHOTOS_COUNT} from './constants';

const template = document.querySelector('#picture').constant.querySelector('.picture');
const container = document.querySelector('.pictures');

PHOTOS_COUNT.forEach((PHOTOS_COUNT) => {

  // const photo = photos[0];
  const thumbnail = template.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');

  image.src = PHOTOS_COUNT.url;
  image.alt = PHOTOS_COUNT.description;

  template.querySelector('.picture__comments').textContent = photo.comments.length;
  template.querySelector('.picture__likes').textContent = photo.likes;


  container.appendChild(template);
});

/* <a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a> */

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.
