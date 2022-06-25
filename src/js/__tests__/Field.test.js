import Field from '../Field';

const fieldSize = 2;

test('should return a new object Field', () => {
  // Создаем объект
  const expected = {
    fieldSize,
  };

  // Создаем экземпляр класса, который тестируем
  const result = new Field(fieldSize);

  // Ожидаем, что экземпляр тестируемого класса будет такой же, как мы создали
  expect(result).toEqual(expected);
});

test('should create new section', () => {
  // Создаем экземпляр класса
  const field = new Field(fieldSize);

  /// /Создаем секцию в body
  document.body.innerHTML = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';

  // Находим секцию, которую создали во второй строчке этого теста
  const expected = document.querySelector('body .game_field');

  // Создаем секцию через тестируемый метод класса
  field.createSection();
  const result = document.querySelector('.game_field');

  // Ожидаем, что секция, созданная через метод класса будет
  // такой же, как и секция созданная в тесте
  expect(result).toEqual(expected);
});

/* test("should return img", () => {
  //Создаем экземпляр поля
  const field = new Field(fieldSize);

  //Создаем элемент img в body
  document.body.innerHTML = '<img src="goblin.png" class="img_goblin">';

  //Находим элемент картинки, который создали во второй строчке этого теста
  const expected = document.querySelector("body .img_goblin");

  //Создаем картинку, используя тестируемый метод
  const result = field.createImg();

  //Ожидаем, что созданная тестируемым методом картинка,
  //будет такой же, как картинка, созданная в тесте
  expect(result).toEqual(expected);
}); */

test('should return img', () => {
  // Создаем экземпляр поля
  const field = new Field(fieldSize);

  // Создаем элемент img в body
  document.body.innerHTML = '<div class="field_container" id="fieldGame"><div class="cell" data-cell="0"></div><div class="cell" data-cell="1"></div><div class="cell" data-cell="2"></div><div class="cell" data-cell="3"></div></div>';

  // Находим поле, которое создали во второй строчке этого теста
  const expected = document.querySelector('body #fieldGame');

  // Создаем секцию, чтобы можно было вызвать метод генерации поля
  field.createSection();

  // Генерируем поле, используя тестируемый метод
  const result = field.generateField(fieldSize);

  // Ожидаем, что созданное тестируемым методом поле, будет таким же, как поле, созданное в тесте
  expect(result).toEqual(expected);
});
