import Field from './Field';

export default class Action {
  constructor(img) {
    this.counter = 0; // Счетчик для ведения счета
    this.img = img; // адрес изображения
  }

  // Метод возвращает рандомное число до размера поля в квадрате
  getRandom(max) {
    this.name = 'getRandom';
    return Math.floor(Math.random() * max);
  }

  // Метод сбрасывает класс ячейки до стандартного
  resetClass() {
    this.name = 'resetClass';
    const cell = Array.from(document.querySelectorAll('div[data-cell]'));
    cell.forEach((item) => {
      const el = item;
      el.className = 'cell';
    });
  }

  // Метод изменяет выводит на экран счет игрока
  changeCheck() {
    const span = document.querySelector('.header_check span');
    span.textContent = this.counter;
    return span.textContent;
  }

  /* Метод добавляет слушателя на клик по ячейке поля
  При клике по ячейке с картинкой изменяет счетчик
  и запускает метод по выведению текущего счета на экран */
  addEvent() {
    const cell = Array.from(document.querySelectorAll('div[data-cell]'));
    cell.forEach((el) => {
      el.addEventListener('click', () => {
        if (el.classList.contains('active')) {
          this.counter += 1;
          this.changeCheck();
        }
      });
    });
  }

  // Метод вставляет в рандомную ячейку картинку
  insertImg(fieldSize, img) {
    const max = fieldSize ** 2;
    const i = this.getRandom(max);
    const cell = document.querySelector(`div[data-cell='${i}']`);
    this.resetClass();
    cell.classList.add('active');
    cell.append(img);
  }

  /* Метод запускает работу класса. Т.е. создает поле, создает картинку,
  добавляет обработчик клика и с помощью таймера, раз в секунду вставляет
  картинку в рандомную ячейку поля */
  start() {
    const fieldSize = 4;
    const field = new Field(fieldSize);
    const img = field.start(this.img);
    this.addEvent();

    setInterval(() => {
      this.insertImg(fieldSize, img);
    }, 1000);
  }
}
