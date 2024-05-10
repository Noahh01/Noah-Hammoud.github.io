const navLinks = document.querySelectorAll(".nav-item");

const updateNavLink = () => {
  let y = window.scrollY + window.innerHeight / 2;

  navLinks.forEach(link => {
    const id = link.getAttribute("scroll-to");
    const section = document.getElementById(id);
     
    if (section && y >= section.offsetTop && y < section.offsetTop + section.offsetHeight) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", updateNavLink);