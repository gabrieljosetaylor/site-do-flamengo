const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        botaoTema.textContent = "☀️ Modo Claro";
    } else {
        botaoTema.textContent = "🌙 Modo Escuro";

    }
});
alert("Tema alterado com sucesso!");

const ano = new Date().getFullYear();

document.getElementById("rodape").innerHTML =
"© " + ano + " - Site do Flamengo | Desenvolvido por Gabriel José";
