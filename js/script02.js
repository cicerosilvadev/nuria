// Lógica QUESTÃO 02
//           SELEÇÃO DE ELEMENTOS 02
let anoform = document.querySelector("#ano-form");
let ano = document.querySelector("#ano");
let resultadoAno = document.querySelector("#resultado-ano");
//           FUNÇÕES 02
let verificarBissexto = (year) => {
    if (isNaN(year) || year < 1) {
        alert("Por favor, insira um ano válido.");
        return;
    }
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("resultado-ano").textContent = `${year} é um ano bissexto.`;
    } else {
        document.getElementById("resultado-ano").textContent = `${year} não é um ano bissexto.`;
    }
}
//           EVENTOS 02
anoform.addEventListener("submit", (e) => {
    e.preventDefault();
    let year = +ano.value;
    verificarBissexto(year);
});