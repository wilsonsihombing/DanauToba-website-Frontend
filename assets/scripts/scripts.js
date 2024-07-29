document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
});
  