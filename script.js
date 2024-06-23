// Sélectionne tous les éléments avec la classe "star" et le bouton de réinitialisation par son ID
const stars = document.querySelectorAll(".star");
const btnReset = document.getElementById("resetBtn");

// Variable pour stocker la note sélectionnée
let selectedRating = 0;

// Fonction pour gérer le survol des étoiles
function handleMouseOver(index) {
  // Change les étoiles jusqu'à celle survolée
  stars.forEach((star, i) => {
    if (i <= index) {
      star.src = "./img/star_full.png";
    }
    if (i === index) {
      star.src = "./img/star_hover.png";
    }
  });
}

// Fonction pour gérer la sortie de la souris des étoiles
function handleMouseOut() {
  // Si aucune note n'est sélectionnée, réinitialise les étoiles
  if (selectedRating === 0) {
    stars.forEach(star => {
      star.src = "./img/star_empty.png";
    });
  } else {
    // Sinon, affiche les étoiles selon la note sélectionnée
    stars.forEach((star, i) => {
      star.src = i < selectedRating ? "./img/star_pink.png" : "./img/star_empty.png";
    });
  }
}

// Fonction pour gérer le clic sur une étoile
function handleClick(index) {
  // Fixe la note sélectionnée
  selectedRating = index + 1;
  // Change les étoiles jusqu'à celle cliquée
  stars.forEach((star, i) => {
    star.src = i < selectedRating ? "./img/star_pink.png" : "./img/star_empty.png";
  });
}

// Fonction pour réinitialiser la sélection
function handleReset() {
  // Réinitialise la note sélectionnée et les étoiles
  selectedRating = 0;
  stars.forEach(star => {
    star.src = "./img/star_empty.png";
  });
}

// Ajoute des écouteurs d'événements aux étoiles et au bouton de réinitialisation
btnReset.addEventListener("click", handleReset);
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => handleMouseOver(index));
  star.addEventListener("mouseout", handleMouseOut);
  star.addEventListener("click", () => handleClick(index));
});
