// ссылка от куда берем данные
let link = 'https://api.randomuser.me/1.0/?results=50&nat=gb,us&inc=gender,name,location,email,phone,picture';

// возвращает объект о всех пользователях
// getjson
let promise = getjson(link);
promise.then(
  result => {
    console.log(result);
    // длина объекта, в котором информация о пользователях
    let objLength = result.results.length;
    // пользователь
    let firstUser = new User(result, 0);
    // информация о пользователе
    let nameInfo = firstUser.name();
    // Фото пользователя
    let picture = firstUser.pictureLarge();
    // добавляем форму html
    let li1 = new TegLi('.user-list', picture, nameInfo);
    li1.addTegLi();
  },
  error => console.log(error)
)
