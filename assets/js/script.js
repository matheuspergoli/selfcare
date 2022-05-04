const form = document.querySelector('.newsletter')

form.addEventListener('submit', e => {
  e.preventDefault()

  form.email.value = ''
})