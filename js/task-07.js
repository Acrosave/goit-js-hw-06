const range = document.getElementById('font-size-control');
const change = document.getElementById('text');

function font() {
  change.style.fontSize = `${range.value}px`;
}

range.addEventListener('input', font);
