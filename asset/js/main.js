// Carousel

new Swiper('.intro-carousel', {
    speed: 600,
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



  // navbar desktop
  window.onscroll = function () {
    var navbar = document.querySelector(".nav");
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

  // Set initial class
  document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".nav");
    navbar.classList.add("transparent");
  });

  // var styleElement = document.createElement("style");
  // styleElement.innerHTML =
  //   "@font-face {font-family: 'popin'; src: url('asset/text/popin.ttf')}";
  // document.head.appendChild(styleElement);
  // document.body.style.fontFamily = "popin";
  // Typed JS
  new Typed("#typed", {
    strings: [
      "Project Manager",
      "Backend developer",
      "frontend developer",
      "Ui/ux designer",
      "Full Stack Developer",
    ],
    typeSpeed: 100,
    delaySpeed: 100,
    loop: true,
  });


  document.addEventListener("DOMContentLoaded", function () {
    VANTA.FOG({
      el: "#vanta-canvas",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0x80cbc4,
      midtoneColor: 0xb4ebe6,
      lowlightColor: 0xffffff,
      baseColor: 0xffffff,
      blurFactor: 0.77,
      speed: 1.8,
      zoom: 0.5,
    });
  });