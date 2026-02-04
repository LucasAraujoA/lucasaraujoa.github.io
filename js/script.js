document.addEventListener("DOMContentLoaded", function () {
  
  // Função para carregar componentes simples (Header/Footer)
  function loadComponent(elementId, path) {
    const element = document.getElementById(elementId);
    if (element) {
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

  // 1. Carregar Header e Footer (Caminhos relativos sem a barra inicial)
  // 1. Carregar Header e Footer (ajusta caminho para páginas em /projects)
  const basePath = window.location.pathname.includes('/projects/') ? '../' : '';
  loadComponent("header", `${basePath}components/header.html`);
  loadComponent("footer-placeholder", `${basePath}components/footer.html`);

  // 2. Carregar Cards
  const container = document.getElementById("cards-container");
  if (container) {
    // Nomes conforme aparecem nos seus arquivos após o "card_"
    const cardNames = [
      'games-hub', 'decontos-library', 'gamezilla', 'cuca-catch', 
      'einsteroids', 'dodging-for-treasure', 'dinnie-app', 'plexo-arte', 
      'harry-potter', 'strawberry-popsicles', 'milejao', 'riccch-ladies', 'pikachu'
    ];
    
    cardNames.forEach(name => {
      // AJUSTE AQUI: Usando o padrão "card_" + nome + ".html"
      const filePath = `components/card_${name}.html`;
      
      fetch(filePath)
        .then(response => {
          if (!response.ok) throw new Error(`Não encontrado: ${filePath}`);
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