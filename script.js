const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".navMenu");

const header = document.querySelector("#cabecalho");

hamburguer.addEventListener("click", () => {
      hamburguer.classList.toggle('active');
      navMenu.classList.toggle('active');
})

function activeScroll() {
      header.classList.toggle('diminuir', scrollY > 0);
      navMenu.classList.toggle('diminuir', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);