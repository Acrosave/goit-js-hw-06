const input = document.getElementById('name-input');
const change = document.getElementById('name-output');

input.addEventListener('input', e => {
  if (e.target.value === '') {
    change.textContent = 'Anónimo';
  } else {
    change.textContent = e.target.value;
  }
});
