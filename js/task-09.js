document.querySelector('.color').textContent = getRandomHexColor();
const bodyChange = document.querySelector('.change-color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
bodyChange.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});
