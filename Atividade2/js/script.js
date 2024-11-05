// Inicialização de produtos
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

// Função para listar produtos em 3 colunas
function listarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    if (listaProdutos) {
        listaProdutos.innerHTML = '';
        produtos.forEach((produto, index) => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h2>${produto.nome}</h2>
                <p>${produto.descricao}</p>
                <p>Valor: R$${produto.valor}</p>
                <button onclick="editarProduto(${index})">Editar</button>
                <button onclick="deletarProduto(${index})">Deletar</button>
            `;
            listaProdutos.appendChild(productDiv);
        });
    }
}

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

//funcao para cadastrar um novo produto
const formCadastro = document.getElementById('form-cadastro');
if(formCadastro){
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const valor = document.getElementById('valor').value;
        const novoProduto = {nome,descricao,valor};
        produtos.push(novoProduto);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        alert('Produto cadastrado com sucesso!');
        formCadastro.reset();
        window.location.href = 'index.html';

    });
}

// Função de edição
function editarProduto(index) {
    const produto = produtos[index];
    const nome = prompt('Nome:', produto.nome);
    const descricao = prompt('Descrição:', produto.descricao);
    const valor = prompt('Valor:', produto.valor);
    produtos[index] = { nome, descricao, valor };
    localStorage.setItem('produtos', JSON.stringify(produtos));
    listarProdutos();
}

// Função de exclusão
function deletarProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    listarProdutos();
}

// Inicialização
window.onload = () => listarProdutos();

