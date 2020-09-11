// class покзывающий всю информацию
class AllInformation {
  constructor(picture, email, gender, location, phone) {
    // путь к фото
    this.picture = picture;
    this.email = email;
    this.gender = gender;
    //массив
    this.location = location;
    this.phone = phone;
  }

  // метод показывающий всю информацию по пользователе
  addAllInformationAboutUser(idTeg){
    let ol = `
    <div class="avatar-modal">
      <img src="${this.picture}" alt="">
    </div>
    <div class="all-user-information">
      <ol>
        <li>Род: ${this.gender}</li>
        <li>Город: ${this.location[1]} </li>
        <li>Штат: ${this.location[2]}</li>
        <li>Улица: ${this.location[0]}</li>
        <li>Почтовый индекс: ${this.location[3]}</li>
        <li>Эл.почта: ${this.email}</li>
        <li>Телефон: ${this.phone}</li>
      </ol>
    </div>
    `;
    let allInformation = document.querySelector(idTeg);
    allInformation.innerHTML = ol;

  }
}
