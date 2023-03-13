// Ищем див для вставки результата запроса
const result = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btn = document.querySelector('.button');
//Ищем поля ввода
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

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

//  function checkStorage () {
    let lastData = localStorage.getItem("lastRequest");
    if (lastData != null) {
       data = JSON.parse(lastData) ;
       updateHTML(data);
    }
//  }


function updateHTML(data) {
  let cards = '';
  data.forEach(item => {
      const cardBlock = `
      <div class="card">
      <img
          src="${item.download_url}"
          class="card-image"
      /img>
      </div>`;
      cards = cards + cardBlock;
  })
  result.innerHTML = cards;                    
}

//вешаем на кнопку обработчик
btn.addEventListener('click', event => {
    
    event.preventDefault();

    let inputData1 = +input1.value;

    let inputData2 = +input2.value;

    if(!(inputData1 >= 1 && inputData1 <= 10) && !(inputData2 >= 1 && inputData2 <= 10) ) {

        result.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";

    } else {
        if (!(inputData1 >= 1 && inputData1 <= 10)) {

            result.innerHTML = "Номер страницы вне диапазона от 1 до 10";

        } else if (!(inputData2 >= 1 && inputData2 <= 10)) {

        result.innerHTML = "Лимит вне диапазона от 1 до 10";

        } else {

            fetch('https://picsum.photos/v2/list?page=' + inputData1 +'&limit=' +inputData2)
                .then((response) => {
                    return response.json();
                  })
                  .then(function(data) {
                    localStorage.setItem("lastRequest", JSON.stringify(data));
                    updateHTML(data);
                })

        }
      
    }
});