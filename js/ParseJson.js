// Этот класс парсит объект, который мы получили с сервера
// и будет возвращать необходимые данные
class ParseJason {
  constructor(data) {
    this.data = data;
  }
  // общая информация о данных
  info(){
    return this.data;
  }
  // массив с пользователями
  resultsArr(){
    return this.data.results;
  }
  // общая информация по пользователей
  name(item){
    return 
  }
}
