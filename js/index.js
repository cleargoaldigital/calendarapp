


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
  switch(newChoice) {
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

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}