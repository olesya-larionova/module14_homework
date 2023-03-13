// Ищем див для вставки результата запроса
const result = document.querySelector('.result');
// Ищем кнопку, по нажатии на которую будет запрос
const btn = document.querySelector('.button');
//Ищем поля ввода
const input1 = document.querySelector('#number1');
const input2 = document.querySelector('#number2');

//вешаем на кнопку обработчик
btn.addEventListener('click', event => {
    
    event.preventDefault();

    let inputData1 = +input1.value;

    let inputData2 = +input2.value;

        if(inputData1 >= 100 && inputData1 <= 300 && inputData2 >= 100 && inputData2 <= 300 ) {

            fetch('https://picsum.photos/' + inputData1 +'/' +inputData2)
                .then((response) => {
                    
                    return response.blob(); // возврат двоичного объекта (изображения), который содержится в response

                  })
                  .then(function(blob) {
                    const picURL = URL.createObjectURL(blob);
                    result.innerHTML = '<img src="' + picURL + '">';                    
                })

                }
        else { 
            result.innerHTML = "одно из чисел вне диапазона от 100 до 300";
           }
            }
);