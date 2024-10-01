//let nome = prompt('insira seu nome: ');
//let idade = parseInt(prompt('insira sua idade: '));
//let ano_atual = 2024;

let ano_nascimento = ano_atual - idade;

let resposta = 'olá ' + nome + ', o seu ano de nascimento é ' + ano_nascimento;

document.getElementById('r1').innerHTML =  resposta;

function exibeMensagem(){
    alert('minha mensagem');
}

//exibeMensagem();

function mult(a,b){
    return a * b;
}

function soma(a,b){
    return a + b;
}

//let c = soma(4,8);
//console.log(c);

function ex2(){
    let numero = document.getElementById('num1').value;
    let resposta = mult(numero, 3);
    document.getElementById('r2').innerHTML = resposta;
}

function ex3(){
    let numero = parseInt(document.getElementById('num2').value);
    let numero2 = parseInt(document.getElementById('num3').value);
    let resposta = soma(numero, numero2);
    document.getElementById('r3').innerHTML = resposta;
}

function ex4(){
    let numero = parseInt(document.getElementById('num4').value);
    let numero2 = parseInt(document.getElementById('num5').value);

    if(numero<0 || numero2<0){
        document.getElementById('r4').innerHTML = soma(numero, numero2);
    } else{
        document.getElementById('r4').innerHTML = mult(numero, numero2);
    }
}