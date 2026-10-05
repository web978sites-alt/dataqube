(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (event) {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  var links = document.querySelectorAll(".primary-nav__link");
  var path = window.location.pathname;
  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path || (href !== "/" && path.indexOf(href) === 0)) {
      link.setAttribute("aria-current", "page");
    }
  });

  // Scroll-reveal for cards/testimonials/CTA bands. Only hides content
  // (via .js-ready in CSS) once we know we can actually reveal it again —
  // if IntersectionObserver isn't supported, skip entirely and stay visible.
  if ("IntersectionObserver" in window) {
    var revealTargets = document.querySelectorAll(".card, .testimonial-card, .cta-band");
    if (revealTargets.length) {
      document.documentElement.classList.add("js-ready");
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
      );
      revealTargets.forEach(function (el) {
        observer.observe(el);
      });
    }
  }

  // Mouse-parallax tilt on the homepage hero chart graphic. Purely a
  // progressive enhancement — the graphic already looks correct without
  // it — and skipped entirely under prefers-reduced-motion.
  var heroGraphicWrap = document.querySelector(".hero-graphic-wrap");
  var heroGraphic = heroGraphicWrap && heroGraphicWrap.querySelector(".hero-graphic");
  var reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroGraphic && !reducedMotion) {
    heroGraphicWrap.addEventListener("mousemove", function (event) {
      var rect = heroGraphicWrap.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width - 0.5;
      var py = (event.clientY - rect.top) / rect.height - 0.5;
      var rotateY = px * 10;
      var rotateX = py * -10;
      heroGraphic.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });

    heroGraphicWrap.addEventListener("mouseleave", function () {
      heroGraphic.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  }
})();
