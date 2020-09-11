//В этом файле происходит вся работа программы

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
      console.log(users.results());
      // сортируем массив
      // name.first - это ключ, где записаны имена пользователей
      sortArray(users.results(), 'name', 'first', state);
      console.log(users.location(0));

      // перебираем всех пользователей
      users.results().forEach((item, i) => {
        let li = new TegLi('.user-list', users.pictureLarge(i), users.name(i));
        // выодим на страницу
        li.addTegLi();
      });

      // ===управляем модальным окном===
      // открываем модальное окно
      let avatar = document.querySelectorAll('.avatar');
      let modal = document.querySelector('#modal');
      let wrapper = document.querySelector('.wrapper');
      let windows = document.querySelector('#windows');
      // переменная, куда записываем порядковый номер click
      avatar.forEach((item, i) => {
        // показываем i пользователя
        // modalWindowsCreate(users.pictureLarge(i), i);
        avatar[i].onclick = ()=>{
          modal.style.display = 'block';
          // добавляем всю информацию
          // email, gender, location = [null], phone, classTeg
          let AddAllInformation = new AllInformation(users.pictureLarge(i), users.email(i), users.gender(i), users.location(i), users.phone(i));
          AddAllInformation.addAllInformationAboutUser('#windows');
      };

      });

      // ===закрываем модальное окно===
      windows.onclick = () => {
        modal.style.display = 'none';
        wrapper.style.position = '';
      };
      // modalWindowsClose();
    },
    error => console.log(error),
  )
};
