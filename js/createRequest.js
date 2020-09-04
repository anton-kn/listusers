// формируем запрос на сервер
// Получаем данные ввиде json-файла
async function createRequest(url){ // await работает только с async
  let response = await fetch(url);
  // json файл о пользователях
  let commits = await response.json();
  return commits; // возвращает Promise
}
