$(window).on("load", function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").addClass("ios");
  } else {
    $("body").addClass("web");
  }
  document.body.dataset.preloader = false;
});

/* viewport width */
$(function () {
  const menu = document.querySelector(".js-menu");
  const menuBtnOpen = document.querySelector(".js-menu-btn-open");
  const menuOverlay = document.querySelector(".js-menu-overlay");

  if (menu && menuBtnOpen && menuOverlay) {
    menuBtnOpen.addEventListener("click", () => {
      menu.classList.add("m-active");
      menuOverlay.classList.add("m-active");
      document.body.classList.add("menu-open");
    });

    menuOverlay.addEventListener("click", () => {
      menu.classList.remove("m-active");
      menuOverlay.classList.remove("m-active");
      document.body.classList.remove("menu-open");
    });
  }

  const formModal = document.querySelector(".js-form-modal");
  const formModalBtnClose = document.querySelector(".js-form-btn-close");
  const formModalBtnOpen = document.querySelectorAll(".js-form-btn-open");
  const formModalOverlay = document.querySelector(".js-form-overlay");

  const openModal = () => {
    formModal.classList.add("m-active");
    document.body.classList.add("menu-open");
  };

  const closeModal = () => {
    formModal.classList.remove("m-active");
    document.body.classList.remove("menu-open");
  };

  if (
    formModal &&
    formModalBtnClose &&
    formModalBtnOpen &&
    formModalBtnOpen.length &&
    formModalOverlay
  ) {
    formModalBtnOpen.forEach((el) => {
      el.addEventListener("click", () => {
        openModal();
      });
    });

    formModalBtnClose.addEventListener("click", () => {
      closeModal();
    });
    formModalOverlay.addEventListener("click", () => {
      closeModal();
    });
  }

  const openSentConfirmModal = () => {
    sentConfirmModal.classList.add("m-active");
    document.body.classList.add("menu-open");
  };

  const closeSentConfirmModal = () => {
    sentConfirmModal.classList.remove("m-active");
    document.body.classList.remove("menu-open");
  };

  const sentConfirmModal = document.querySelector(".js-sent-confirm-modal");
  const sentConfirmBtnClose = document.querySelector(
    ".js-sent-confirm-btn-close"
  );
  const sentConfirmOverlay = document.querySelector(".js-sent-confirm-overlay");

  if (sentConfirmModal && sentConfirmBtnClose && sentConfirmOverlay) {
    sentConfirmBtnClose.addEventListener("click", () => {
      closeSentConfirmModal();
    });
    sentConfirmOverlay.addEventListener("click", () => {
      closeSentConfirmModal();
    });
  }

  /* components */
  if ($(".js-our-clients-slider").length) {
    $(".js-our-clients-slider").slick({
      dots: false,
      autoplay: false,
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807614 24.9792 0.807614 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM-1.31134e-07 13.5L35 13.5L35 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#8E8E8E"/></svg></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807614 12.0208 0.807614 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM37 13.5L2 13.5L2 10.5L37 10.5L37 13.5Z" fill="#8E8E8E"/></svg></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 476,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  if ($(".js-news-slider").length) {
    $(".js-news-slider").slick({
      dots: false,
      autoplay: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow:
        '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M36.0607 13.0607C36.6464 12.4749 36.6464 11.5251 36.0607 10.9393L26.5147 1.3934C25.9289 0.807614 24.9792 0.807614 24.3934 1.3934C23.8076 1.97919 23.8076 2.92893 24.3934 3.51472L32.8787 12L24.3934 20.4853C23.8076 21.0711 23.8076 22.0208 24.3934 22.6066C24.9792 23.1924 25.9289 23.1924 26.5147 22.6066L36.0607 13.0607ZM-1.31134e-07 13.5L35 13.5L35 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z" fill="#8E8E8E"/></svg></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="37" height="24" viewBox="0 0 37 24" fill="none"><path d="M0.93934 13.0607C0.353553 12.4749 0.353553 11.5251 0.93934 10.9393L10.4853 1.3934C11.0711 0.807614 12.0208 0.807614 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.93934 13.0607ZM37 13.5L2 13.5L2 10.5L37 10.5L37 13.5Z" fill="#8E8E8E"/></svg></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 476,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});
