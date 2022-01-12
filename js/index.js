// const select = document.querySelector('select');
// const list = document.querySelector('ul');
// const selectedMonth = document.querySelector('h3');

// select.onchange = function() {
//   const choice = select.value;
//   let days = 31;
//   if (choice === 'February') {
//     days = 28;
//   } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
//     days = 30;
//   }

//   createCalendar(days, choice);
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   selectedMonth.textContent = choice;
//   for (let i = 1; i <= days; i++) {
//     const listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//   }
// }

// createCalendar(30, 'September');



const select = document.getElementById('background');
const html = document.querySelector('.output');

select.onchange = function() {
  const newChoice = select.value;
  switch (newChoice) {
    case 'white':
      update('white', 'black');
      break;
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('purple', 'white');
      break;
    case 'yellow':
      update('yellow', 'darkgray');
      break;
    case 'psychedelic':
      update('lime', 'purple');
      break;

  }
}

function update(x, y) {
  html.style.backgroundColor = x;
  html.style.color = y;
}




const select = document.querySelector('select');
const list = document.querySelector('ul');
const selectedMonth = document.querySelector('h3');

select.onchange = function() {
  const choice = select.value;
  let days = 31;
  if (choice === 'February') {
    days = 28;
  } else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November') {
    days = 30;
  }



  // image changer

  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h3');

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  selectedMonth.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(30, 'September');



const select = document.getElementById('background');
const html = document.querySelector('.output');

select.onchange = function() {
  const newChoice = select.value;
  switch (newChoice) {
    case 'white':
      update('white', 'black');
      break;
    case 'black':
      update('black', 'white');
      break;
    case 'purple':
      update('purple', 'white');
      break;
    case 'yellow':
      update('yellow', 'darkgray');
      break;
    case 'psychedelic':
      update('lime', 'purple');
      break;

  }
}

function update(x, y) {
  html.style.backgroundColor = x;
  html.style.color = y;
}

// Change background

let myImages = document.querySelector('img');

myImages.addEventListener('click', () => {
  let imageSrc = myImages.getAttribute('src');
  if (imageSrc === "images/kaduna2018.jpg") {
    myImages.setAttribute('src', 'images/selfkaduna.jpg');
  } else if (imageSrc === 'images/selfkaduna.jpg') {
    myImages.setAttribute('src', 'images/student.jpg');
  } else {
    myImages.setAttribute('src', 'images/student.jpg');
  }
});
// Set user login

let myButton = document.querySelector('button');
let welcomeMessage = document.querySelector('h4');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('user',
    myName);
  welcomeMessage.textContent = 'We are glad to see you, ' + myName;
}
// Checking if the user is an existing user. Otherwise, take the name of new user and save it in localstorage.

if (!localStorage.getItem('user')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('user');
  welcomeMessage.textContent = 'Good to see you again, ' + storedName;
}

// set copyright year.
const currentYear = document.querySelector('#year');
currentYear.textContent = new Date().getFullYear();