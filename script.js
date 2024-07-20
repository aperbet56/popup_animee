// Récupération des différents éléments
const openBtn = document.querySelector("#popup--open__btn");
const closeBtn = document.querySelector(".popup--close__btn");
const popup = document.querySelector(".popup");

// Ecoute de l'événement "click" sur le bouton ouvrir la popup
openBtn.addEventListener("click", () => {
  popup.classList.add("active");
});

// Ecoute de l'événement "click" sur le bouton X (pour fermer la popup)
closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});
