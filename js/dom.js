function load() {
    alert("Página carregada!");
}

function clicou() {
    document.getElementById("obg").innerHTML = ("<strong>Obrigado por clicar!</strong>");
    // alert("Obrigado por clicar");
}

function redirecionar() {
    window.open("https://github.com/rnmartins");
    // window.location.href = "https://github.com/rnmartins"; (Abre na mesma janela)
}

function trocar() {
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"
}

function funcaoChange(elemento) {
    console.log(elemento.value);
}