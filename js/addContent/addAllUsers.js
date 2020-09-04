// Этот метод добавляет всех пользователей на страницу
function addAllUsers(array, nameClass) {
  array.forEach((itemObj, i) => {
    // пользователь
    let user = new User(itemObj);
    // Фото пользователя
    let picture = user.pictureLarge();
    // информация о пользователе
    let nameInfo = user.name();
    // добавляем данны о первом пользователе
    let li = new TegLi(nameClass, picture, nameInfo);
    li.addTegLi();
  });

}
