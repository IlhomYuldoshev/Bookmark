(function () {
  const $elSlider = document.querySelector(".features-items-inner");
  const controller = document.querySelector(".features-controller-list");
  const featureControllerItems = document.querySelectorAll(
    ".features-controller-item"
  );

  let activeSlide = 1;

  controller.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.dataset.slide) {
      featureControllerItems.forEach(
        (i) => (i.className = "features-controller-item")
      );

      activeSlide = e.target.dataset.slide;
      const activeEl = e.target.closest(".features-controller-item");
      activeEl.classList.add("active");

      switch (activeSlide) {
        case "1":
          $elSlider.style.transform = "translateX(0)";
          break;
        case "2":
          $elSlider.style.transform = "translateX(-100%)";
          break;
        case "3":
          $elSlider.style.transform = "translateX(-200%)";
          break;
        default:
          $elSlider.style.transform = "translateX(0)";
      }
    }
  });
})();

(function () {
  const openBtn = document.querySelectorAll("[data-openBtn]");

  openBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      btn.classList.toggle("opened");

      const parentEl = btn.closest(".faq-question-item");
      // link ham btn ham opened holatni to'g'ri ko'rsatishi uchun kerak
      const elBtnAndLink = parentEl.querySelectorAll("[data-openBtn]");
      elBtnAndLink.forEach((i) => {
        if (btn.classList.contains("opened")) {
          i.classList.add("opened");
        } else {
          i.classList.remove("opened");
        }
      });

      if (btn.classList.contains("opened")) {
        parentEl.style.maxHeight = "1000px";
      } else {
        parentEl.style.maxHeight = "72px";
      }
    });
  });
})();

(function () {
  const input = document.querySelector(".contact-input");
  const form = document.querySelector(".contact-form");
  const errMsg = document.querySelector(".error-msg");
  const inputWrapper = document.querySelector(".input-wrapper");

  const regExp =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const isValid = regExp.test(input.value);

    if (isValid) {
      inputWrapper.classList.remove("invalid");
      inputWrapper.classList.add("valid");
      errMsg.textContent = "Success!";
    } else {
      inputWrapper.classList.remove("valid");
      inputWrapper.classList.add("invalid");
      errMsg.textContent = "Whoops, make sure it's an email";
    }
  });
})();
