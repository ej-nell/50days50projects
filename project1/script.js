"use strict";

const panel = document.querySelectorAll(".panel");
panel.forEach((panelActive) => {
  panelActive.addEventListener("click", () => {
    removeActive();
    panelActive.classList.add("active");
  });
});

const removeActive = () => {
  panel.forEach((panelActive) => {
    panelActive.classList.remove("active");
  });
};
