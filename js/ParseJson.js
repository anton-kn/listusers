// Этот класс парсит объект, который мы получили с сервера
// и будет возвращать необходимые данные
class ParseJson {
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
  //краткая информация одного пользователя в виде объекта
  name(item){
    let arr = this.results();
    return arr[item].name;
  }
  // путь к фото размером 128х128
  pictureBig(item){
    let picture = this.results();
    return picture[item].picture.large;
  }

}
