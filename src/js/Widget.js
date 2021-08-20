export default class Widget {
  constructor() {
    this.widgetCont = document.querySelector('.widget');
    this.widgetCont.innerHTML = '<div class="widget__box">'
    + '<button class="close">x</button>'
    + '<h5 class="widget__title">напишите нам</h5>'
    + '<textarea name="" id="" cols="30" rows="10" class="widget__field"></textarea>'
    + '<button class="widget__submit">отправить</button>'
    + '</div>'
    + '<button class="widget__btn"></button>';
    this.widget = document.querySelector('.widget__box');
    this.widgetBtn = document.querySelector('.widget__btn');
    this.closeBtn = this.widget.querySelector('.close');
  }

  closeWidget() {
    this.closeBtn.addEventListener('click', () => {
      this.widget.classList.toggle('widget_active');
      this.widgetBtn.classList.toggle('btn_hidden');
    });
  }

  openWidget() {
    this.widgetBtn.addEventListener('click', () => {
      this.widget.classList.toggle('widget_active');
      this.widgetBtn.classList.toggle('btn_hidden');
    });
  }
}
