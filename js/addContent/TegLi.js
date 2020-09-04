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
  addTegLi(){
    // html код, который надо добавить на страницу
    const li = `
    <li><div class="avatar">
        <img src="${this.pathPicture}">
        </div>
        <div class="desc">
          <ol class="list-about-users">
            <li>Имя: ${this.arrayTitle[0]}</li>
            <li>Фамилия: ${this.arrayTitle[1]}</li>
            <li>Состояние: ${this.arrayTitle[2]}</li>
          </ol>
        </div>
    </li>`;

    const block = document.querySelector(this.nameClass);
    block.insertAdjacentHTML('beforeEnd', li);
  }
}
