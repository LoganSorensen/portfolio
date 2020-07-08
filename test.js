// project modal functions
const modalTriggers = document.querySelectorAll('.modal-trigger')
const modalCloseTrigger = document.querySelector('.modal-close')
const bodyBlackout = document.querySelector('.body-blackout')
const body = document.getElementsByTagName('body')[0]

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const {popupTrigger} = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

    popupModal.classList.add('visible')
    bodyBlackout.classList.add('is-blacked-out')
    body.classList.add('no-scroll')

    popupModal.querySelector('.modal-close').addEventListener('click', () => {
      popupModal.classList.remove('visible')
      bodyBlackout.classList.remove('is-blacked-out')
      body.classList.remove('no-scroll')
    })

    bodyBlackout.addEventListener('click', () => {
      popupModal.classList.remove('visible')
      bodyBlackout.classList.remove('is-blacked-out')
      body.classList.remove('no-scroll')
    })
  })
})