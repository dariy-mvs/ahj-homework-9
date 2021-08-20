export default class Collapse {
  constructor() {
    this.button = document.querySelector('.coll__btn');
    this.textField = document.querySelector('.coll__wrapper');
  }

  addText() {
    this.button.addEventListener('click', () => {
      this.textField.classList.toggle('active');
    });
  }
}
