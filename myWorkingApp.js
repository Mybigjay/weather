let inputValue = document.querySelector('.inputValue');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
//let input = document.querySelector('.input_text');
let button = document.querySelector('.submit')

//let main = document.querySelector('.name');

button.addEventListener('click',function(name){

    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=1baf2dd1ccbb0f26afce2b27bcd76a82')
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&APPID=1baf2dd1ccbb0f26afce2b27bcd76a82')
    .then(response => response.json())
    .then(data => {

        let tempValue = data['main']['temp'];
        let nameValue = data['name'];
        let descValue = data['weather'][0]['description'];

        main.innerHTML = nameValue;
        desc.innerHTML = "Desc - "+descValue;
        temp.innerHTML = "Temp - "+tempValue;
        
        input.value ="";
       // .then(data => console.log(data))

    })
    
    .catch(err => alert("press sumbit"));
})


   

   