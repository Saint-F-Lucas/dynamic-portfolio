document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    const content = button.nextElementSibling
    const section = button.closest('section')

    button.addEventListener('click', () => {
      content.classList.toggle('active')
      section.classList.toggle('active')
    })
  })
})
