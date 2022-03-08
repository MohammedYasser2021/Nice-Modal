let modalOpen = document.querySelector('.modal-btn')
let modalClose = document.querySelector('.close')
let modal = document.querySelector('.modal-overlay')

modalOpen.addEventListener('click', function () {
  modal.style.transform = 'scale(1)'
})

modalClose.addEventListener('click', function () {
  modal.style.transform = 'scale(0)'
})
