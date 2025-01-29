// ============================
// Carrossel Automático
// ============================
let index = 0;
const carrossel = document.querySelector('.carrossel');
const carrosselItems = document.querySelectorAll('.carrossel-item');
const totalItems = carrosselItems.length;

function moveCarrossel(direction) {
    index += direction;
    if (index >= totalItems) {
        index = 0;
    } else if (index < 0) {
        index = totalItems - 1;
    }

    carrossel.style.transform = `translateX(-${index * 100}%)`;
}

// Mover o carrossel a cada 3 segundos
setInterval(() => moveCarrossel(1), 3000);

// ============================
// Função: Adicionar Produto ao Carrinho
// ============================
const botaoComprar = document.querySelectorAll(".comprar-btn");

botaoComprar.forEach((botao) => {
    botao.addEventListener("click", () => {
        const produto = botao.dataset.produto; // Obtém o nome do produto a partir do atributo data
        let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

        // Adiciona o produto ao carrinho
        carrinho.push(produto);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        alert("Item adicionado ao carrinho");
    });
});

// ============================
// Página do Carrinho: Exibir Itens
// ============================
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const carrinhoItens = document.getElementById("carrinho-itens");

// Exibe os itens no carrinho, se existirem
if (carrinhoItens) {
    if (carrinho.length > 0) {
        carrinho.forEach((item) => {
            const produtoDiv = document.createElement("div");
            produtoDiv.textContent = item;
            produtoDiv.style.margin = "10px 0";
            produtoDiv.style.fontSize = "18px";
            carrinhoItens.appendChild(produtoDiv);
        });
    } else {
        carrinhoItens.textContent = "Seu carrinho está vazio.";
        carrinhoItens.style.fontSize = "18px";
        carrinhoItens.style.marginTop = "20px";
    }
}
