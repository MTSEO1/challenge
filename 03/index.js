const rangeNb = document.getElementById('range-nb');
const guessNb = document.getElementById('guess-nb');
const playBtn = document.getElementById('play-btn');
const match = document.getElementById('match');
const result = document.getElementById('result');

function onClickBtn(event) {
  event.preventDefault();
  const rangeValue = parseInt(rangeNb.value);
  const guestNb = parseInt(guessNb.value);
  const machineValue = Math.round(Math.random() * rangeValue);
  if (rangeNb.value === '' || guessNb.value === '') {
    alert('Please, write a number at the blink');
  } else if (guestNb > rangeValue) {
    alert("Oops, You can't chose the value less than the Range value.");
  } else if (guestNb < 0 || rangeValue < 0) {
    alert("You can't chose the minus value.");
  } else if (guestNb === machineValue) {
    match.innerText = `Your number is ${guestNb}, the Machine number is ${machineValue}. `;
    result.innerText = 'You Won!';
  } else if (guestNb !== machineValue) {
    match.innerText = `Your number is ${guestNb}, the Machine number is ${machineValue}. `;
    result.innerText = 'You lost...';
  }
}

playBtn.addEventListener('click', onClickBtn);
