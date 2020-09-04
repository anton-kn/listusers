// загружаем данные с сервера при нажатии кнопки submit
form.onsubmit = function(e){
  e.preventDefault();
  // ссылка от куда берем данные
  let link = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
  // возвращает объект о всех пользователях
  let promise = createRequest(link);
  promise.then(
    data => {
      console.log(data);
      
      // чистим старый список
      deleteUsers('.user-list');
      // длина объекта, в котором информация о пользователях
      let length = data.results.length;
      // массив данных, в котором все пользователи;
      let arrUsers = data.results;
      // добаляем всех на страницу
      addAllUsers(arrUsers, '.user-list');
    },
    error => console.log(error),
  )
};
