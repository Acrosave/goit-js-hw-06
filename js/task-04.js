let counterValue = 0;
const botonIncrementar = document.getElementById('increment');
const botonDecrementar = document.getElementById('decrement');
const pantalla = document.getElementById('value');

botonIncrementar.addEventListener('click', () => {
  counterValue += 1;
  pantalla.textContent = counterValue;
});

botonDecrementar.addEventListener('click', () => {
  counterValue -= 1;
  pantalla.textContent = counterValue;
});
