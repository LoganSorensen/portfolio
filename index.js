// Navigation
const mobileWidth = window.matchMedia("(max-width: 900px)")
const navBar = document.getElementsByTagName("nav")[0]
const hamburger = document.querySelector(".fa-bars")
const navItems = document.querySelectorAll(".nav-item")
const navItemsCont = document.querySelector(".nav-links")

const widthCheck = (width) => {
  if (width.matches) {
    hamburger.classList.add("visible")
    navItemsCont.classList.add("hidden")
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItemsCont.classList.toggle('hidden')
      })
    })
  } else {
    hamburger.classList.remove("visible")
  }

}

widthCheck(mobileWidth)
mobileWidth.addListener(widthCheck)

hamburger.addEventListener("click", () => {
  console.log('clicked')
  navItemsCont.classList.toggle("hidden")
})




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
