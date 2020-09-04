// функция для сортировки массива
// change принимает значение value от select
// key принимает ключ объекта, значения которых нужно сортировать
// ключ объекта передается в функцию в кавычках - 'key'
function sortArray(array, key1, key2, change) {
    function sortByKey(a,b) {
      if(change == 1){
        return a[key1][key2] > b[key1][key2] ? 1 : -1;
      }else {
        return a[key1][key2] < b[key1][key2] ? 1 : -1;
      }
    }
  return array.sort(sortByKey);
}
