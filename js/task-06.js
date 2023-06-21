const check = document.getElementById('validation-input');
check.addEventListener('blur', x => {
  if (+check.getAttribute('data-length') === x.target.value.length) {
    check.classList.add('valid');
    check.classList.remove('invalid');
  } else {
    check.classList.add('invalid');
    check.classList.remove('valid');
  }
});
