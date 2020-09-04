// класс для получения информации об одном пользователе
class User {
  constructor(obj) {
    this.obj = obj;
  }
  // Получаем картинку большую
  pictureLarge(){
    let avatar = this.obj.picture.large;
    return avatar;
  }

  // поучаем первые данные о пользователе
  // это имя, фамилия, род(муж или женск)
  name(){
    let listName = this.obj.name;
    // Переводим имя, фамилию, описание с большой буквы
    let first = listName.first[0].toUpperCase()+ listName.first.slice(1);
    let last = listName.last[0].toUpperCase()+ listName.last.slice(1);
    let title = listName.title[0].toUpperCase()+ listName.title.slice(1);

    let arr = [first, last, title];
    // возвращаем массив данных: Имя, Фамилия, Статус
    return arr;
  }
}
