// Link Highlighting


// Project Modal Functions
const modalTriggers = document.querySelectorAll(".modal-trigger");
const modalCloseTrigger = document.querySelector(".modal-close");
const bodyBlackout = document.querySelector(".body-blackout");
const body = document.getElementsByTagName("body")[0];

modalTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(
      `[data-popup-modal="${popupTrigger}"]`
    );

    console.log(navPos)

    popupModal.classList.add("visible");
    bodyBlackout.classList.add("is-blacked-out");
    body.classList.add("no-scroll");

    popupModal.querySelector(".modal-close").addEventListener("click", () => {
      popupModal.classList.remove("visible");
      bodyBlackout.classList.remove("is-blacked-out");
      body.classList.remove("no-scroll");
    });

    bodyBlackout.addEventListener("click", () => {
      popupModal.classList.remove("visible");
      bodyBlackout.classList.remove("is-blacked-out");
      body.classList.remove("no-scroll");
    });
  });
});

// Skills Accordion

const accordionTriggers = document.querySelectorAll(".accordion-trigger");
const accordions = document.querySelectorAll(".skill-content")
let open = false;

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const { accordionTrigger } = trigger.dataset;
    const accordion = document.querySelector(
      `[data-accordion="${accordionTrigger}"]`
    );
    const arrow = document.querySelector(`[data-arrow="${accordionTrigger}"]`)

    arrow.classList.toggle('inverted')
    accordion.classList.toggle('visible')
  });
});
