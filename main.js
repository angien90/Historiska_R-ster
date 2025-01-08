//FUNKTIION FÖR FEEDBACK
  // Hämta element för feedback
  const feedbackIcon = document.getElementById("feedback-icon");
  const feedbackPopup = document.getElementById("feedback-popup");
  const closeBtn = document.getElementById("close-btn");

  // Öppna pop-up när man klickar på ikonen
  feedbackIcon.onclick = function() {
    feedbackPopup.style.display = "flex";
  };

  // Stäng pop-up när man klickar på "×"
  closeBtn.onclick = function() {
    feedbackPopup.style.display = "none";
  };

  // Stäng pop-up om man klickar utanför pop-up innehållet
  window.onclick = function(event) {
    if (event.target === feedbackPopup) {
      feedbackPopup.style.display = "none";
    }
  };

// FUNKTION FÖR YOUTUBE FILM SOM INTE VILL VISAS
  function replaceWithIframe() {
    const container = document.querySelector('.custom-thumbnail');
    container.innerHTML = `
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube-nocookie.com/embed/ASPz8teIqCA?autoplay=1" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
        </iframe>
    `;
  }


/*
// FUNTKION FÖR DARK/LIGHT MODE
  window.addEventListener("load", function () {
    const toggleButton = document.getElementById("toggleMode");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            document.body.classList.toggle("light-mode");
        });
    }
  });