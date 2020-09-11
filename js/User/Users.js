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

  // Получаем фото размером large
  pictureLarge(item){
    // let avatar = this.results();
    return this.results()[item].picture.large;
  }

  // поучаем первые данные о пользователе
  // это имя, фамилия, род(муж или женск)
  name(item){
    // let arrAll = this.results();
    let list = this.results()[item].name;
    let arr = [];
    for (let key in list){
      arr.push(list[key][0].toUpperCase()+ list[key].slice(1));
    }
    // возвращает массив данных: title, first, last
    return arr;
  }
  // электронная почта
  email(item){
    return this.results()[item].email;
  }
  // Пол
  gender(item){
    return this.results()[item].gender;
  }
  // телефон
  phone(item){
    return this.results()[item].phone;
  }
  // местоположение
  location(item){
    // адрес пользователя в виде объекта
    let list = this.results()[item].location;
    let arr = [];
    for (let key in list){
      // arr.push(list[key][0].toUpperCase()+ list[key].slice(1));
      arr.push(list[key]);
    }
    // возвращает массив данных: street, city, state, postcode,
    return arr;
  }
}
