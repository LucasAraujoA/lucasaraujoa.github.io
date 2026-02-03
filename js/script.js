document.addEventListener("DOMContentLoaded", function () {
   
  // 1. CARREGAR HEADER
  const headerElement = document.getElementById("header");
  if (headerElement) {
    // Caminho absoluto para a pasta de componentes
    fetch('/components/header.html')
      .then(response => response.text())
      .then(html => {
        headerElement.innerHTML = html;
      })
      .catch(error => console.error('Erro ao carregar header:', error));
  }

  // 2. CARREGAR FOOTER
  const footerElement = document.getElementById("footer-placeholder");
  if (footerElement) {
    // Caminho absoluto para a pasta de componentes
    fetch('/components/footer.html')
      .then(response => response.text())
      .then(html => {
        footerElement.innerHTML = html;
      })
      .catch(error => console.error('Erro ao carregar footer:', error));
  }
  
  // 3. CARREGAR CARDS
  const container = document.getElementById("cards-container");
  if (container) {
    const cardNames = ['gamesHub', 'decontosLibrary', 'gamezilla', 'cucaCatch', 'einsteroids', 'dodgingForTreasure', 'dinnieApp', 'plexoArte', 'harryPotter', 'strawberryPopsicles', 'milejao', 'riccchLadies', 'pikachu'];
    
    cardNames.forEach(name => {
      // Caminho absoluto para os cards
      fetch(`/components/card-${name}.html`)
        .then(response => response.text())
        .then(html => {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = html.trim();
          const cardElement = tempDiv.firstElementChild;
          if (cardElement) container.appendChild(cardElement);
        })
        .catch(error => console.error(`Erro no card ${name}:`, error));
    });
  }
});