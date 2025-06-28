// Carousel

new Swiper('.intro-carousel', {
    speed: 1500,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  // Navbar Mobile
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");

      document.querySelector(".navbar-brand").style.color = "#333";
    } else {
      navbar.classList.remove("scrolled");

      document.querySelector(".navbar-brand").style.color = "white";
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });

        const navbarCollapse = document.querySelector(".navbar-collapse");
        if (navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  });



  window.onscroll = function () {
    var navbar = document.querySelector(".navbar-custom");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.remove("transparent");
      navbar.classList.add("solid");
    } else {
      navbar.classList.remove("solid");
      navbar.classList.add("transparent");
    }
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar-custom");
    navbar.classList.add("transparent");
  });
  
  const toggler = document.querySelector(".custom-toggler");
  const navbarCollapse = document.getElementById("navbarNav");

  toggler.addEventListener("click", function () {
    this.classList.toggle("collapsed");
  });
  navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    toggler.classList.remove("collapsed");
  });
