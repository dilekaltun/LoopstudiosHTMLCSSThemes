
window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            document.getElementById("navbar").style.background = "#111";
            var navbar = document.getElementById("navbar");
            var navbarTop = navbar.offsetTop;
            if (window.pageYOffset == navbarTop) {
              document.getElementById("navbar").style.background = "none";
            }
        }
      const navToggle = document.querySelector('.nav-toggle')
      const navLinks = document.querySelectorAll('.nav__link')

      navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open')
      })

      navLinks.forEach((link) => {
        link.addEventListener('click', () => {
          document.body.classList.remove('nav-open')
        })
      })

