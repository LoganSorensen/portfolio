document.getElementById("test").addEventListener("click", function() {
  alert("Hello World!");
});


// project modal functions
const modalTriggers = document.querySelectorAll('.modal-trigger')
const modalCloseTrigger = document.querySelector('.modal-close')
const bodyBlackout = document.querySelector('.body-blackout')

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const {popupTrigger} = trigger.dataset
    const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

    popupModal.classList.add('visible')
    bodyBlackout.classList.add('is-blacked-out')

    popupModal.querySelector('.modal-close').addEventListener('click', () => {
      popupModal.classList.remove('visible')
      bodyBlackout.classList.remove('is-blacked-out')
    })

    // bodyBlackout.addEventListener('click', () => {
    //   popupModal.classList.remove('visible')
    //   bodyBlackout.classList.remove('is-blacked-out')
    // })
  })
})