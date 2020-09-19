// добавляем новый тег для упорядоченного списка
// принимает путь к фото
class TegLi {
  constructor(nameClass, pathPicture, arrayTitle) {
    // класс тега html
    this.nameClass = nameClass;
    //расположение фото
    this.pathPicture = pathPicture;
    // информация о пользователе в виде объекта
    this.arrayTitle = arrayTitle;
  }
  // метод для добавления структуры, в которую будем записывать
  // информацию о пользователе
  addTegLi(avatar, desc, listUsers){
    // html код, который надо добавить на страницу
    const li = `
    <li><div class="${avatar}">
        <img src="${this.pathPicture}">
        </div>
        <div class="${desc}">
          <ol class="${listUsers}">
            <li>Имя: ${this.arrayTitle[1]}</li>
            <li>Фамилия: ${this.arrayTitle[2]}</li>
            <li>Статус: ${this.arrayTitle[0]}</li>
          </ol>
        </div>
    </li>`;

    const block = document.querySelector(this.nameClass);
    // добавляем html li на страницу
    block.insertAdjacentHTML('beforeEnd', li);
  }

}
