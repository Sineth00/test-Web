function toggleSidebar() {
      document.getElementById("sidebar").classList.toggle("active");
    }

    document.querySelectorAll('a[href="#top"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        document.getElementById("sidebar").classList.remove("active");
      });
    });

    // Lazy Load + Fade-in Script for gallery only
    document.addEventListener("DOMContentLoaded", () => {
      const lazyImages = document.querySelectorAll(".gallery img[data-src]");

      const loadImage = (img) => {
        img.src = img.getAttribute("data-src");
        img.onload = () => {
          img.classList.add("loaded");
        };
        img.removeAttribute("data-src");
      };

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadImage(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { root: null, threshold: 0.1 });

      lazyImages.forEach(img => {
        observer.observe(img);
      });
    });