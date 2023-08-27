const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startButton.addEventListener('click', () => {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
});

function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}
stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  stopButton.disabled = true;
  startButton.disabled = false;
});
