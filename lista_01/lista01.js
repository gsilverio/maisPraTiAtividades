const prompt = require("prompt-sync")();

/*
//EX 1
let temp = parseFloat(prompt("Digite a temperatura em celsius: "));
temp = (temp*9)/5+32;
console.log(`${temp}F (temperatura em Fahrenheit.)`);
*/


/*
//EX 2
let eleitoresValidos = parseInt(prompt("Digite a quantidade de eleitores validos do municipio: "));
let vBrancos = parseInt(prompt("Digite a quantidade de votos brancos: "));
let vNulos = parseInt(prompt("Digite a quantidade de votos nulos: "));
let vValidos = parseInt(prompt("Digite a quantidade de votos validos: "));
let total = vBrancos+vNulos+vValidos;
if(total>eleitoresValidos){
    console.log("Quantidade de votos diferente entre quantidade de eleitores validos do municipio.");
} else{
    vBrancos = (vBrancos*100)/200;
    console.log(`${vBrancos}% (percentual de votos brancos)`);
    vNulos = (vNulos*100)/200;
    console.log(`${vNulos}% (percentual de votos nulos)`);
    vValidos = (vValidos*100)/200;
    console.log(`${vValidos}% (percentual de votos validos)`);
    
}
*/


/*
//EX3
let intOne = parseInt(prompt("Digite o primeiro inteiro: "));
let intTwo = parseInt(prompt("Digite o segundo inteiro: "));
let intThree = parseInt(prompt("Digite o terceiro inteiro: "));
let intFour = parseInt(prompt("Digite o quarto inteiro: "));

intFour = intOne+intTwo+intThree;
intOne += 25;
intTwo *= 3;
intThree *= 1.12;

console.log(intOne, intTwo, intThree.toFixed(2), intFour);
/*


/*
//EX 4 e EX 5
let gradeOne = parseFloat(prompt("Digite a primeira nota: "));
let gradeTwo = parseFloat(prompt("Digite a segunda nota: "));

gradeOne = (gradeOne + gradeTwo)/2;

if(gradeOne>=6.0){
    console.log("PARABENS!Você foi aprovado.");
}else {
    console.log("Você foi REPROVADO! Estude mais.");
}
*/


/*
//EX 06
let sizeA = parseFloat(prompt("Digite o primeiro lado do triangulo: "));
let sizeB = parseFloat(prompt("Digite o segundo lado do triangulo: "));
let sizeC = parseFloat(prompt("Digite o terceiro lado do triangulo: "));

if(sizeA < sizeB + sizeC && sizeB < sizeA+sizeC && sizeC<sizeA+sizeB){
    if(sizeA===sizeB || sizeA===sizeC || sizeB===sizeC ){
        console.log("Triangulo Isosceles");
    }else if(sizeA<sizeB && sizeB<sizeC){
        console.log("Triangulo escaleno");
    }else if(sizeA===sizeB && sizeA===sizeC){
        console.log("Triangulo equilatero");
    }
} else {
    console.log("Nao forma triangulo");
}
*/


/*
//EX 7
const MENOR_DUZIA = 0.30;
const MAIOR_DUZIA = 0.25;

let qtdMaca = parseInt(prompt("Digite a quantidade de maça a ser comprada: "));
if(qtdMaca>=12){
    let total = qtdMaca*MAIOR_DUZIA;
    console.log(typeof(total));
    console.log("Total: R$ " + total.toFixed(2));
}else{
    let total = qtdMaca*MENOR_DUZIA;
    console.log("Total: R$ "+total.toFixed(2));
}
*/


/*
//EX 8
let valOne = parseFloat(prompt("Digite o primeiro valor: "));
let valTwo = parseFloat(prompt("Digite o segundo valor: "));

if(valOne>valTwo){
    console.log(`${valTwo}, ${valOne}`);
} else if(valTwo>valOne){
    console.log(`${valOne}, ${valTwo}`);
} else{
    console.log("Valores são iguais.");
}
*/


/*
//EX 9
let codigo = parseInt(prompt("Digite o codigo de origem do produto: "));
if(codigo===5 || codigo ===6){
    console.log("Nordeste.");
}else if(codigo>=7 && codigo<=9){
    console.log("Sudeste.");
}else if(codigo>=10 && codigo<=20){
    console.log("Centro-Oeste");
}else if(codigo>=25 && codigo<=50){
    console.log("Nordeste.");
}else{
    console.log("Produto Importado.");
}
*/


/*
//EX 10
let num = parseInt(prompt("Digite um numero: "));
for(let i=0; i<10; i++)
    console.log(num);
*/


/*
//EX 11
while(true){
    let num = parseInt(prompt("Digite um valor: "));
    if(num<=0)
        break;
    else{
        if(num%2==0)
            console.log("PAR.");
        else
            console.log("IMPAR.");
    }
}
*/


/*
//EX 12
for(let i=1000; i<=1999; i++){
    if(i%11===5)
        console.log(i);
}
*/


/*
//EXX 13
for(let i=0; i<5; i++){
    let num = parseInt(prompt("Digite um valor: "));
    for(let x = 1; x<=num; x++){
        console.log(`${x} x ${num} = ${x*num}`);
    }
}
*/


/*
//EX 14
let count = 0;
let total = 0;
while(true){
    let num = parseFloat(prompt("Digite um numero: "));
    if(num===0)
        break;
    total+=num;
    count++;
}
console.log(`Media: ${total/count}`)
*/


/*
//EX 15
let total = 0;
let totalPesos = 0;
while(true){
    let num = parseFloat(prompt("Digite um numero: "));
    if(num===0)
    break;
    let peso = parseFloat(prompt("Digite o peso do numero: "));

    num = num*peso;
    total+=num;
    totalPesos+=peso;
}
if(totalPesos>0)
    console.log(`Media ponderada: ${(total/totalPesos).toFixed(2)}`);
else
    console.log("Media ponderada: " + total.toFixed(2));

*/



//EX 16
let num = 100;
let count = 0;
let countPrimo = 0;
let i=1;
while(count<50){
    while(i<=num){
        if(num % i === 0)
        {
            countPrimo++;
        }
        i++;
    }
    if(countPrimo==2){
        console.log("PRIMO: " + num);
        count++;
    }
    i=0;
    countPrimo=0;
    num++;
}
