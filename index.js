// Navigation
const mobileWidth = window.matchMedia("(max-width: 900px)");
const navBar = document.getElementsByTagName("nav")[0];
const hamburger = document.querySelector(".fa-bars");
const navItems = document.querySelectorAll(".nav-item");
const navItemsCont = document.querySelector(".nav-links");

const widthCheck = (width) => {
  if (width.matches) {
    hamburger.classList.add("visible");
    navItemsCont.classList.add("hidden");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        navItemsCont.classList.toggle("hidden");
      });
    });
    hamburger.addEventListener("click", () => {
      navItemsCont.classList.toggle("hidden");
    });
  } else {
    hamburger.classList.remove("visible");
    navItemsCont.classList.remove("hidden");
  }
};

widthCheck(mobileWidth);
mobileWidth.addListener(widthCheck);

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
const accordions = document.querySelectorAll(".skill-content");
let open = false;

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const { accordionTrigger } = trigger.dataset;
    const accordion = document.querySelector(
      `[data-accordion="${accordionTrigger}"]`
    );
    const arrow = document.querySelector(`[data-arrow="${accordionTrigger}"]`);

    arrow.classList.toggle("inverted");
    accordion.classList.toggle("visible");
  });
});

// Form Submission

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var button = document.getElementById("form-button");
  var status = document.getElementById("form-status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Message sent!";
    status.classList.remove("form-status-error");
    status.classList.add("form-status-success");
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
    status.classList.remove("form-status-success");
    status.classList.add("form-status-error");
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
