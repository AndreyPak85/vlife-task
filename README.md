## Vlife task

**Todo:**

- Реализовать таблицу на React. Стили на ваше усмотрение.
  Данные брать тут https://jsonplaceholder.typicode.com/users
- Первая колонка - чекбокс. Можно выделить несколько чекбоксов, нельзя убрать все
- чекбоксы, хотя бы один всегда должен остаться.
- Вторая - вывод поля id
- Третья - кнопка перехода в другой инструмент, с передачей id как параметра. По клику на “Подробнее” открывать страницу с url '/users/[id]', ее оставить пустой
- Четвертая - и далее вывод соответствующих параметров
- Последняя - удаление строки. По клику строку удалять, состояние можно не хранить. Стили в финальном результате не важны, но бонусом будет опрятный продуктовый вид.
- Использовать ES5, ES6, TS по усмотрению. За TS отдельный бонусный балл. Фреймворк - React, таблица - react-table [желательно самый свежий ], либо аналогичный модуль на выбор (выбор обосновать) , важна функциональность фильтраций и пагинаций
- Бонус уровень: Сортировка по одному полю на выбор, пагинация (в массиве 10
  элементов, сделать две страницы по 5)

**Для проверки задания выполнить команды:**

```
1. git clone https://github.com/AndreyPak85/vlife-task.git

2. yarn add package.json
    или
   npm i

3. yarn start
    или
   npm run start

4. Открыть адрес в браузере localhost:3000
```

**Альтернативная проверка задания, путем запуска Docker контейнера**

```
1. Запустить команду

docker run -it -p 3000:3000 013274418/vlife

2. Закрыть контейнер Ctrl + C

```

Все основные пункты задания выполнены.
Нуждается в дополнительной стилизации проекта и попробовать связать все со стейтом store.
Ориентировочное время выполнения задания: ~8 часов

<font style="font-size:10pt; font-family: Verdana; font-style: italic;" >Задание выполнил Андрей П.
контактный телефон: +7 701 737 0818</font>
