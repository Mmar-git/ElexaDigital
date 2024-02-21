function toggleFlipped(cardId) {
  document.getElementById(cardId).classList.toggle("flipped");
}

document.getElementById("card1").addEventListener("click", function () {
  toggleFlipped("card1");
});

document.getElementById("card2").addEventListener("click", function () {
  toggleFlipped("card2");
});

document.getElementById("card3").addEventListener("click", function () {
  toggleFlipped("card3");
});

document.getElementById("card4").addEventListener("click", function () {
  toggleFlipped("card4");
});

function toggleFlipped(cardId) {
  document.getElementById(cardId).classList.toggle("flipped");
}

document
  .getElementById("cardHridam")
  .addEventListener("click", function () {
    toggleFlipped("cardHridam");
  });
  document
  .getElementById("cardUmar")
  .addEventListener("click", function () {
    toggleFlipped("cardUmar");
  });
  function togglemenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

  function redirectToMultipleLinks() {
    window.location.href = './#About';

   
    window.location.href = './#Info';
  }
