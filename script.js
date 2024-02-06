"use strict";

const boxes = document.getElementsByClassName("box");
const images = document.getElementsByClassName("image");

// Convert boxes to an array
const boxesArray = Array.from(boxes);

boxesArray.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  box.addEventListener("drop", () => {
    // Assuming you want to append the first image element found
    if (images.length > 0) {
      box.appendChild(images[0]);
    }
  });
});
