// Seleciona todos os links que têm a classe 'menu-link'
const links = document.querySelectorAll('.menu-link');

// Adiciona um evento de clique para cada link
links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Impede o link de recarregar a página (comportamento padrão)
        event.preventDefault();
        
        alert('Você clicou em: ' + this.innerText);
    });
});