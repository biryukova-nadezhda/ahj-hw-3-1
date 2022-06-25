import Action from '../Action';
import imgSrc from '../../img/goblin.png';
// Задаем размер поля
const fieldSize = 2;

test('should return a new object Action', () => {
  // Создаем объект
  const expected = {
    counter: 0,
    img: imgSrc,
  };

  // Создаем экземпляр класса, который тестируем
  const result = new Action(imgSrc);

  // Ожидаем, что экземпляр тестируемого класса будет такой же, как мы создали
  expect(result).toEqual(expected);
});

test('should return a number less than fieldSize**2 ', () => {
  // Создаем экземпляр класса
  const action = new Action(imgSrc);

  // Задаем входное значение для тестируемого метода
  const max = fieldSize ** 2;

  // Получаем рандомное число меньше заданного через тестируемый метод
  const result = action.getRandom(max);

  // Ожидаем, что число выдаваемое через тестируемый метод меньше, чем заданный минимум
  expect(result).toBeLessThan(max);
});

/* test("should reset class element", () => {
  ////Создаем поле с классами, какие должны быть
  document.body.innerHTML = `<div class="field_container" id="fieldGame">
  <div class="cell" data-cell="0"></div><div class="cell" data-cell="1">
  </div><div class="cell" data-cell="2"></div><div class="cell" data-cell="3"></div></div>`;

  //Находим поле на странице
  //const expeted = document.querySelector("body .field_container");
  const expected = document.getElementById("fieldGame");

  //Создаем экземпляр класса
  const action = new Action(imgSrc);

  //Вызываем метод сброса класса
  action.resetClass();

  //Находим поле в секции
  const result = document.querySelector(".game_field #fieldGame");

  //Ожидаем, что поле, после применения тестируемого метода,
  //будет таким же, как мы его здесь создали
  expect(result).toEqual(expected);
}); */

/* test("should return a textContent check", () => {
  //Задаем ожидаемое значения счетчика на странице
  const expected = "0";

  //Создаем экземпляр класса
  const action = new Action(imgSrc);
  action.start();

  //Вызываем метод
  let result = action.changeCheck();

  //Ожидаем, счет в обоих случаях будет 0
  expect(result).toEqual(expected);
}); */
