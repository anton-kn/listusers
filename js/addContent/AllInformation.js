// class покзывающий всю информацию
class AllInformation {
  constructor(arrayTitle, email, gender, location, phone) {
    // путь к фото
    // this.picture = picture;
    this.email = email;
    this.gender = gender;
    //массив
    this.location = location;
    this.phone = phone;
    // имя, фамилия в массиве
    this.arrayTitle = arrayTitle;
  }

  // метод показывающий всю информацию по пользователе
  addAllInformationAboutUser(nameSelector){
    let ol = `
      <ol>
        <li>Имя: ${this.arrayTitle[1]}</li>
        <li>Фамилия: ${this.arrayTitle[2]}</li>
        <li>Род: ${this.gender}</li>
        <li>Город: ${this.location[1]} </li>
        <li>Штат: ${this.location[2]}</li>
        <li>Улица: ${this.location[0]}</li>
        <li>Почтовый индекс: ${this.location[3]}</li>
        <li>Эл.почта: ${this.email}</li>
        <li>Телефон: ${this.phone}</li>
      </ol>
    `;
    let allInformation = document.querySelector(nameSelector);
    allInformation.innerHTML = ol;

  }
}
