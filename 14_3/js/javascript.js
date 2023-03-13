function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};


// Ищем ноду для вставки результата запроса
const resultNode = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btnNode = document.querySelector('.button');
//Ищем поле ввода
const inputNode = document.querySelector('#number');

function displayResult(apiData) {
  let cards = '';
    apiData.forEach(item => {
      const cardBlock = `
      <div class="card">
      <img
          src="${item.download_url}"
          class="card-image"
        /img>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
      
  resultNode.innerHTML = cards;
}

  
// Вешаем обработчик на кнопку для запроса
btnNode.addEventListener('click', event => {
  
  event.preventDefault();
  
  let inputData = +inputNode.value;

  if (inputData >= 1 && inputData <= 10){ 
    /*resultNode.innerHTML = "Ок, число в диапазоне от 1 до 10";*/
    let url = 'https://picsum.photos/v2/list?limit=';

   useRequest(url + inputData, displayResult);
   
  }
   else{ 
    resultNode.innerHTML = "число вне диапазона от 1 до 10";
   }
  
})

