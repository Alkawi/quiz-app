const buttonAnswer = document.querySelector('.js-card__button')
const cardAnswer = document.querySelector('.js-card__answer')

buttonAnswer.addEventListener('click', () => {
  cardAnswer.classList.toggle('hidden')
})