
const firstStorage = 10;
const white = 30;
localStorage.setItem('ten', firstStorage)
// localStorage.removeItem('ten')
localStorage.setItem('twelve', white)
// localStorage.removeItem("tweive")
// localStorage.clear()
//local storage хранит в строке

localStorage.removeItem('twelve')


// получение данных из локал сторэдж

const data = localStorage.getItem('ten')
console.log(data);


// отправляем обьект с данными в local storage

const dataUser = {
    name: "Ion",
    surname: "Frumos",
    age: 30,
    city: "Chisinau"
}

// localStorage.setItem('user', dataUser)
// JSON - method
// JSON.parse - из строки делает обьект
// JSON.stringify - из обьекта строку
const newUser = JSON.stringify(dataUser)
console.log(newUser);

localStorage.setItem("completData", newUser)
const testdata = localStorage.getItem("completData")
const getData = JSON.parse(testdata)
console.log(getData);
console.log(getData.name);

const name = document.querySelector('.className').value
const email = document.querySelector('.classEmail')
const passw = document.querySelector('.classPassw')
const button = document.querySelector('.classButton')

button.addEventListener('click', register)

function register() {
   console.log(name); 
}
