document.addEventListener("DOMContentLoaded", (e) => {
  const checkboxList = document.querySelectorAll(".checkbox");
  Array.from(checkboxList).forEach((checkbox) => {
    const checkboxControl = checkbox.querySelector(".checkbox__control");

    checkboxControl.addEventListener("change", () => {
      if (checkboxControl.checked) {
        if (!checkbox.classList.contains("checkbox_checked")) {
          checkbox.classList.add("checkbox_checked");
        }
      } else {
        if (checkbox.classList.contains("checkbox_checked")) {
          checkbox.classList.remove("checkbox_checked");
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  const checkboxList = document.querySelectorAll(".checkbox-toggle");
  Array.from(checkboxList).forEach((checkbox) => {
    const checkboxControl = checkbox.querySelector(".checkbox-toggle__control");

    checkboxControl.addEventListener("change", () => {
      if (checkboxControl.checked) {
        if (!checkbox.classList.contains("checkbox-toggle_checked")) {
          checkbox.classList.add("checkbox-toggle_checked");
        }
      } else {
        if (checkbox.classList.contains("checkbox-toggle_checked")) {
          checkbox.classList.remove("checkbox-toggle_checked");
        }
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  const checkboxList = document.querySelectorAll(".checkbox-button");
  Array.from(checkboxList).forEach((checkbox) => {
    const checkboxControl = checkbox.querySelector(".checkbox-button__control");

    checkboxControl.addEventListener("change", () => {
      if (!checkbox.classList.contains("checkbox-button_checked")) {
        checkbox.classList.add("checkbox-button_checked");
      } else {
        checkbox.classList.remove("checkbox-button_checked");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", (e) => {
  const checkboxList = document.querySelectorAll(".checkbox-color");
  Array.from(checkboxList).forEach((checkbox) => {
    const checkboxControl = checkbox.querySelector(".checkbox-color__control");

    const colorbox = checkbox.querySelector(".checkbox-color__box");

    const color = colorbox.getAttribute("data-color");

    colorbox.style.backgroundColor = color;
    checkboxControl.addEventListener("change", () => {
      if (checkboxControl.checked) {
        if (!checkbox.classList.contains("checkbox-color_checked")) {
          checkbox.classList.add("checkbox-color_checked");
        }
      } else {
        if (checkbox.classList.contains("checkbox-color_checked")) {
          checkbox.classList.remove("checkbox-color_checked");
        }
      }
    });
  });
});
