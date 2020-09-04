// класс для получения информации об одном пользователе
// В данном классе парсим json-данные, полученные с сервера
class Users {
  constructor(data) {
    this.data = data;
  }
  // общая информация о данных в виде объекта
  info(){
    return this.data.info;
  }
  // все пользователи в виде массива
  results(){
    return this.data.results;
  }

  // Получаем фото размером 128х128
  pictureLarge(item){
    let avatar = this.results();
    return avatar[item].picture.large;
  }

  // поучаем первые данные о пользователе
  // это имя, фамилия, род(муж или женск)
  name(item){
    let arrAll = this.results();
    let list = arrAll[item].name;
    let arr = [];
    for (let key in list){
      arr.push(list[key][0].toUpperCase()+ list[key].slice(1));
    }
    // возвращаем массив данных: title, first, last
    return arr;
  }
}
