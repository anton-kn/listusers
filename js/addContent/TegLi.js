// добавляем новый тег для упорядоченного списка
// принимает путь к фото
class TegLi {
  constructor(nameClass, pathPicture, objName) {
    // класс тега html
    this.nameClass = nameClass;
    //расположение фото
    this.pathPicture = pathPicture;
    // информация о пользователе в виде объекта
    this.objName = objName;
  }

  // закрытый метод метод, возвращает информацию
  // о пользователе
  _parsingObj(part){
    // возвращаем первую букву в слове большой - Иванов
    if(part == 0){
      // Состояние
      return this.objName.title[0].toUpperCase()+this.objName.title.slice(1);
    } else if (part == 1){
      //имя
      return this.objName.first[0].toUpperCase()+this.objName.first.slice(1);
    }else {
      // фамилия
      return this.objName.last[0].toUpperCase()+this.objName.last.slice(1);
    }
  }
  // метод для добавления структуры, в которую будем записывать
  // информацию о пользователе начиная со второго
  addTegLi(){
    // html код, который надо добавить на страницу
    const li = `
    <li><div class="avatar">
        <img src="${this.pathPicture}">
        </div>
        <div class="desc">
          <ol class="list-about-users">
            <li>Имя: ${this._parsingObj(1)}</li>
            <li>Фамилия: ${this._parsingObj()}</li>
            <li>Состояние: ${this._parsingObj(0)}</li>
          </ol>
        </div>
    </li>`;

    const block = document.querySelector(this.nameClass);
    block.insertAdjacentHTML('beforeEnd', li);
  }
  // первый в списке
  addFirstLi(){
    const firstLi = document.querySelector()
  }
}
