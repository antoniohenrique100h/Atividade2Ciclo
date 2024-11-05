// Função para exibir produtos no index.html
function mostrarProdutos() {
    const vitrine = document.getElementById('produtos-vitrine');
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    if (vitrine) {
        vitrine.innerHTML = '';
        produtos.forEach(produto => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: R$${produto.valor}</p>
            `;
            vitrine.appendChild(productDiv);
        });
    }
}

// Chama a função ao carregar a página
window.onload = mostrarProdutos;