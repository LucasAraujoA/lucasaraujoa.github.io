document.addEventListener("DOMContentLoaded", function () {
  
  // Função auxiliar para evitar repetição de código (DRY - Don't Repeat Yourself)
  function loadComponent(elementId, path) {
    const element = document.getElementById(elementId);
    if (element) {
      // USANDO CAMINHO RELATIVO: Removida a "/" inicial
      fetch(path)
        .then(response => {
          if (!response.ok) throw new Error(`Erro ao carregar: ${path}`);
          return response.text();
        })
        .then(html => {
          element.innerHTML = html;
        })
        .catch(error => console.error(error));
    }
  }

  // 1. CARREGAR HEADER (Caminho corrigido para relativo)
  loadComponent("header", "components/header.html");

  // 2. CARREGAR FOOTER (Caminho corrigido para relativo)
  loadComponent("footer-placeholder", "components/footer.html");

  // 3. CARREGAR CARDS
  const container = document.getElementById("cards-container");
  if (container) {
    const cardNames = [
      'games-hub', 'decontos-library', 'gamezilla', 'cuca-catch', 
      'einsteroids', 'dodging-for-treasure', 'dinnie-app', 'plexo-arte', 
      'harry-potter', 'strawberry-popsicles', 'milejao', 'riccch-ladies', 'pikachu'
    ];
    
    // Usamos um Loop para carregar os cards
    cardNames.forEach(name => {
      // Caminho relativo garantindo que o GitHub ache a pasta de componentes
      fetch(`components/card-${name}.html`)
        .then(response => {
          if (!response.ok) throw new Error(`Card não encontrado: ${name}`);
          return response.text();
        })
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