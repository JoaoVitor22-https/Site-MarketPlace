// Obtém os itens do carrinho do localStorage
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
const carrinhoItens = document.getElementById("carrinho-itens");

// Exibe os itens no carrinho
if (carrinhoItens) {
    if (carrinho.length > 0) {
        carrinho.forEach((item, index) => {
            const produtoDiv = document.createElement("div");
            produtoDiv.textContent = `${index + 1}. ${item}`; // Exibe o produto com numeração
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

// Botão para limpar o carrinho
const botaoLimpar = document.getElementById("limpar-carrinho");
botaoLimpar.addEventListener("click", () => {
    localStorage.removeItem("carrinho"); // Remove o carrinho do localStorage
    window.location.reload(); // Recarrega a página para atualizar a exibição
});
