const formulario = document.getElementById("cadastroForm");

const modal = document.getElementById("modal");

const botaoOK = document.getElementById("ok");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    // Pegar os dados digitados
    const titulo = document.getElementById("titulo").value;
    const episodios = document.getElementById("episodios").value;
    const descricao = document.getElementById("descricao").value;
    const autor = document.getElementById("autor").value;


    // Mostrar os dados no resumo
    document.getElementById("rTitulo").textContent = titulo;

    document.getElementById("rEpisodios").textContent = episodios;

    document.getElementById("rDescricao").textContent = descricao;

    document.getElementById("rAutor").textContent = autor;


    // Abrir a janela
    modal.style.display = "flex";
});


botaoOK.addEventListener("click", function() {

    // Fechar a janela
    modal.style.display = "none";

    // Limpar os campos
    formulario.reset();

});