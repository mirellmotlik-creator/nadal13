const fNameSpan = document.querySelector('.fNameSpan');
const lNameSpan = document.querySelector('.lNameSpan');
const ageSpan = document.querySelector('.ageSpan');
const emailSpan = document.querySelector('.emailSpan');

window.onload = () => {


    fetch('person.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

        fNameSpan.textContent = data.fName;
        lNameSpan.textContent = data.lName;
        ageSpan.textContent = data.age;
        emailSpan.textContent = data.email

    })

    .catch(error => console.error('Viga andmete laadimisel:', error));
}
