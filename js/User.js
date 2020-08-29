// класс для получения информации об одном пользователе

class User {
  constructor(obj, item) {
    this.obj = obj;
    this.item = item;
  }
  // Получаем картинку большую
  pictureLarge(){
    let avatar = this.obj.results[this.item].picture.large;
    return avatar;
  }
  // поучаем первые данные о пользователе
  // это имя, фамилия, род(муж или женск)
  name(){
    let listName = this.obj.results[this.item].name;
    return listName;
  }
}
