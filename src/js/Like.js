import img from '../img/heart.png';

export default class Like {
  static getRandomInt(min, max) {
    const funcMin = Math.ceil(min);
    const funcMax = Math.floor(max);
    return Math.floor(Math.random() * (funcMax - funcMin)) + funcMin;
    // Максимум не включается, минимум включается
  }

  constructor() {
    this.likeBtn = document.querySelector('.like');
  }

  addImage() {
    let startAnimation;
    this.likeBtn.addEventListener('mouseover', () => {
      // я понимаю, что использовать здесь интервал - костыльное решение.
      // Логичнее было бы реализовать это поведение через animation-iteration-count:infinite;
      // Но так как у нас 4 вида анимации, которая идёт от разных классов,
      // я не придумала как его прикрутить сюда. Буду рада правкам))

      startAnimation = setInterval(() => {
        if (!this.likeBtn.querySelector('img')) {
          const image = document.createElement('img');

          // добавление класса анимации
          const animationClassArr = ['heart', 'heart1', 'heart2', 'heart3'];
          const randomIndex = Like.getRandomInt(0, 4);
          image.className = animationClassArr[randomIndex];
          image.src = img;
          this.likeBtn.insertAdjacentElement('beforeend', image);
          image.addEventListener('animationend', () => {
            image.remove();
          });
          image.addEventListener('animationcancel', () => {
            image.remove();
          });
        }
      });
    }, 1000);

    this.likeBtn.addEventListener('mouseleave', () => {
      clearInterval(startAnimation);
    });
  }
}
