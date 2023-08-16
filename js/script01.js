// Lógica QUESTÃO 01
//           SELEÇÃO DE ELEMENTOS
let raizform = document.querySelector("#raiz-form");
let fnumber = document.querySelector("#fnumber");
let snumber = document.querySelector("#snumber");
let resultadoRaiz = document.querySelector("#resultado-raiz");
//           FUNÇÕES
let numeroMaior = (firstNumber, secondNumber) => {
    let menor = Math.min(firstNumber, secondNumber);
    let maior = Math.max(firstNumber, secondNumber);
    let quadradoMenor = Math.pow(menor, 2);
    let raizMaior = Math.sqrt(maior);
    document.getElementById("resultado-raiz").textContent = 
    `O número menor é ${menor} e o seu quadrado é ${quadradoMenor} | 
     O número maior é ${maior} e a sua raiz quadrada é ${raizMaior}`;
}
//           EVENTOS
raizform.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNumber = +fnumber.value;
    let secondNumber = +snumber.value;
    if (!firstNumber || !secondNumber) {
        alert("Por favor, insira um número válido.");
        return;
    } else if (firstNumber == secondNumber) {
        alert("Os dois números são iguais.");
        return;
    }
    numeroMaior(firstNumber, secondNumber);
});