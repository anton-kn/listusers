// формируем запрос на сервер
async function getjson(url){ // await работает только с async
  let response = await fetch(url);
  // json файл о пользователях
  let commits = await response.json();
  return commits; // возвращает Promise
}
