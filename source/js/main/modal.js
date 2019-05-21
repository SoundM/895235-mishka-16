if (document.querySelector(".modal-cart")) {
  var modalCart = document.querySelector(".modal-cart"),
    modalCartWrapper = modalCart.querySelector(".modal-cart__wrapper"),
    modalButtons = document.querySelectorAll(".modal-button-js");
  modalButtonArray = Array.prototype.slice.call(modalButtons);

  modalButtonArray.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      modalCart.classList.remove("visually-hidden");
      modalCart.classList.add("modal-cart--open");
      modalCartWrapper.classList.add("modal-cart__wrapper--open");
      document.body.style.overflow = "hidden";
      if (modalCartWrapper.classList.contains("modal-cart__wrapper--open")) {
        window.addEventListener("click", function (e) {
          if (e.target === modalCart) {
            document.body.style.overflow = "visible";
            modalCart.classList.remove("modal-cart--open");
            modalCartWrapper.classList.remove("modal-cart__wrapper--open");
          }
        });
      }
    });
  });
}
