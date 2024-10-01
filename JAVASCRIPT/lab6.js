const secretNumber = Math.floor(Math.random() * 100) + 1;
const numMaiores = document.getElementById('maiores');
const numMenores = document.getElementById('menores');

function bt1(){
    const guess = document.getElementById('adivinhe').value;
    const resultElement = document.getElementById('result');

    if (guess < secretNumber) {
        resultElement.textContent = "O número é maior!";
        numMenores.innerHTML += `${guess}, `;
        document.getElementById("result").style.setProperty("background-color", "red");
    } else if (guess > secretNumber) {
        resultElement.textContent = "O número é menor!";
        document.getElementById("result").style.setProperty("background-color", "red");
        numMaiores.innerHTML += `${guess}, `;
    } else {
        resultElement.textContent = "Parabéns! Você acertou!";
        document.getElementById("result").style.setProperty("background-color", "green");
    }
}
