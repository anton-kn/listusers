// удаляем пользователей
function deleteUsers(classTeg) {
  const list = document.querySelectorAll(classTeg);
  list.forEach((item, i) => {
    item.innerHTML = '';
  });

}
