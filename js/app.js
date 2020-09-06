//В этом файле происходит вся работа

// загружаем данные с сервера при нажатии кнопки submit
form.onsubmit = function(e){
  e.preventDefault();
  // сюда записываем значение select тдля сортировки
  let state = null;
  // обрабатываем select
  let select = document.querySelector('#select');
  // значение для сортировки
  if (select.selectedIndex == 1){
    // console.log('select - 1');
    state = 1;
  }else if (select.selectedIndex == 2) {
    // console.log('select - 2');
    state = 2;
  }

  // ссылка от куда берем данные
  let link = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';
  // возвращает объект о всех пользователях
  let promise = createRequest(link);
  promise.then(
    data => {
      // console.log(data);
      // чистим старый список
      deleteUsers('.user-list');
      // объект с данными о пользователях
      let users = new Users(data);

      // сортируем массив
      // name.first - это ключ, где записаны имена пользователей
      sortArray(users.results(), 'name', 'first', state);
      // перебираем всех пользователей
      users.results().forEach((item, i) => {
        let li = new TegLi('.user-list', users.pictureLarge(i), users.name(i));
        li.addTegLi();
      });

      modalWindow();

    },
    error => console.log(error),
  )
};
