const prompt = require("prompt-sync")();

/* 
//EX1
let qtdCigarros = parseInt(prompt("Quantos cigarros voce fuma por dia ? "));
let anosFumados = parseInt(prompt("Quantos anos você tem fumado? "));

let qtdCigDay = qtdCigarros * 10;
let totalFumados = 0;

if (anosFumados > 0) {
  totalFumados = (anosFumados * 365 * qtdCigDay) / 1440;
}

console.log("Dias perdidos: " + totalFumados.toFixed(2));
*/

/*
//EX2
let velocity = parseInt(prompt("Digite a velocidade em que está dirigindo: "));
if (velocity > 80) {
  velocity = velocity - 80;
  console.log(
    "Voce foi multado por excesso de velocidade! Valor: R$: " +
      (velocity * 5).toFixed(2)
  );
}
*/
/*
//EX3
let dis = parseFloat(prompt("Digite a distancia a ser percorrida(Km): "));
if (dis > 0 && dis <= 200.0) {
  console.log("Preco da passagem: R$ " + (dis * 0.5).toFixed(2));
} else if (dis > 200.0) {
  console.log("Preco da passagem: R$ " + (dis * 0.45).toFixed(2));
} else {
  console.log("Distancia invalida.");
}
*/
/*
//EX4
let seg1 = parseFloat(prompt("Digite o valor da primeira reta: "));
let seg2 = parseFloat(prompt("Digite o valor da segunda reta: "));
let seg3 = parseFloat(prompt("Digite o valor da terceira reta: "));

if (seg1 < seg2 + seg3) {
  if (seg2 < seg1 + seg3) {
    if (seg3 < seg1 + seg2) {
      console.log("Forma triangulo.");
    } else {
      console.log("Nao forma triangulo.");
    }
  } else {
    console.log("Nao forma triangulo.");
  }
} else {
  console.log("Nao forma triangulo.");
}*/

//EX5

/*
//EX6
let rand = Math.random() * (5 - 1 + 1) + 1;
rand = Math.floor(rand);

console.log("-Descubra o valor-");

while (true) {
  let guess = parseInt(prompt("Palpite: "));
  if (guess === rand) {
    console.log("Parabens! Voce acertou o numero.");
    break;
  }
}*/

/*
//EX7
let alPop = 90;
let alLux = 150;
let total = 0;

while (true) {
  let typeCar = parseInt(
    prompt("Escolha o carro: 1-Carro Popular 2-Carro de Luxo 3-Sair ")
  );
  if (typeCar === 1) {
    let km = parseFloat(prompt("Digite a qtd km a serem rodados: "));
    let days = parseInt(prompt("Digite a qtd de dias alugados: "));
    if (km>0 && km <= 100) {
      total = days * alPop + km * 0.2;
      console.log("Total a ser pago: " + total);
    } else if (km > 0 && km > 100) {
      total = days * alPop + km * 0.1;
      console.log("Total a ser pago: " + total);
    }
  } else if (typeCar === 2) {
    let km = parseFloat(prompt("Digite a qtd km a serem rodados: "));
    let days = parseInt(prompt("Digite a qtd de dias alugados: "));
    if (km> 0 && km <= 200) {
      total = days * alLux + km * 0.3;
      console.log("Total a ser pago: R$ " + total);
    } else if (km > 0 && km > 200) {
      total = days * alLux + km * 0.25;
      console.log("Total a ser pago: R$ " + total);
    }
  } else if (typeCar === 3) {
    break;
  } else {
    console.log("Valor invalido.");
  }
}
*/
/*
//EX8
let atv = parseFloat(
  prompt("Digite a qtd de horas de atividade fisica realizadas neste mes: ")
);
let total = 0;
if (atv > 0) {
  if (atv <= 10) {
    total = atv * 2;
    console.log("Total ganho: R$ " + total * 0.05);
  } else if (atv > 10 && atv <= 20) {
    total = atv * 5;
    console.log("Total ganho: R$ " + total * 0.05);
  } else if (atv > 20) {
    total = atv * 10;
    console.log("Total ganho: R$ " + total * 0.05);
  }
} else {
  console.log("Valor invalido.");
}*/

/*
//EX9
let arr = [];
let asw;
let totalMale = 0;
let totalFemale = 0;
do {
  let sex = prompt("Digite seu sexo(M/F): ").toUpperCase();
  let sal = parseFloat(prompt("Digite seu salario: "));
  let obj = { sexo: sex, sal: sal };
  arr.push(obj);
  asw = prompt("Deseja continuar inserindo?(S/N)").toUpperCase();
} while (asw != "N");

arr.forEach((x) => {
  if (x.sexo == "M") {
    totalMale += x.sal;
  } else if (x.sexo == "F") {
    totalFemale += x.sal;
  }
});

console.log("Total Pago aos homens: " + totalMale);
console.log("Total Pago as mulheres: " + totalFemale);

*/

/*
//EX10
let ask;
let arr = [];
let i = 0,
  soma = 0,
  par = 0,
  menor = 0;
do {
  let num = parseInt(prompt("Digite um numero: "));
  arr.push(num);
  soma += num;
  i++;
  if (num % 2 == 0) {
    par++;
  }
  ask = prompt("Deseja continuar?(S/N) ").toUpperCase();
} while (ask != "N");

for (let x = 0; x < arr.length; x++) {
  if (arr[x] < menor) menor = arr[x];
}
console.log("Somatorio entre os numero: " + soma);
console.log("Menor valor digitado: " + menor);
console.log("Media entre os valores: " + soma / i);
console.log("Qd valores pares: " + par);
*/

//Ex11

/*
//EX12
let fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
for (let i = 0; i < fib.length; i++) {
  console.log(fib[i]);
}
*/

/*
//EX13
let fib = [0, 1];
let vet = [];
for (let i = 2; i < 15; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
for (let i = 0; i < fib.length; i++) {
  vet.push(fib[i]);
}

console.log(vet);
*/

/*
//EX14
let arrName = [];
for (let i = 0; i < 6; i++) {
  let nome = prompt("Digite um nome: ");
  arrName.push(nome);
}
for (let i = 5; i >= 0; i--) {
  console.log(arrName[i]);
}*/

/*
//EX15
let vet = [];
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt("Digite um numero: "));
  vet.push(num);
}
for (let i = 0; i < 10; i++) {
  if (vet[i] % 2 == 0) {
    console.log(`Numero: ${vet[i]} Posicao: ${i}`);
  }
}
*/
/*
//EX16
let vet = [];
for (let i = 0; i < 20; i++) {
  let num = Math.floor(Math.random() * 100);
  vet.push(num);
}
console.log(vet.sort(compararNumeros));

//Funcao de ordernar numeros ordem crescente
function compararNumeros(a, b) {
  return a - b;
}*/

/*
//EX17
let vet1 = [];
let vet2 = [];
for (let i = 0; i < 5; i++) {
  let name = prompt("Digite um nome: ");
  vet1.push(name);
  let age = parseInt(prompt("Digite a idade: "));
  vet2.push(age);
}

for (let i = 0; i < vet1.length; i++) {
  if (vet2[i] < 18) {
    console.log(`Nome: ${vet1[i]} Idade: ${vet2[i]}`);
  }
}
*/

/*
//EX18
let funcObj = {
  nome: null,
  cargo: null,
  salario: null,
};

let nome = prompt("Nome Funcionario: ");
let cargo = prompt("Cargo: ");
let salario = parseFloat(prompt("Salario: "));
funcObj = { nome: nome, cargo: cargo, salario: salario };

console.log("\n\tFuncionario\n");
console.log(
  `Nome: ${funcObj.nome} \nCargo:${funcObj.cargo}\nSalario:${funcObj.salario}`
);
*/
/*
//EX19
let vetHorari = [];
let formart;
for (let i = 0; i < 5; i++) {
  let horario = prompt("Digite um horario(HH:MM:SS):");
  let splt = horario.split(":");
  if (splt[0] > 0 && splt[0] <= 23) {
    if (splt[1] > 0 && splt[1] <= 60) {
      if (splt[2] > 0 && splt[2] <= 60) {
        formart = splt.join(".");
      } else {
        console.log("Segundo invalido");
        break;
      }
    } else {
      console.log("Minuto invalido");
      break;
    }
  } else {
    console.log("Hora invalido");
    break;
  }

  vetHorari.push(formart);
}
console.log(vetHorari);
*/

/*
//EX20
class Funcionario {
  constructor(matricula, nome, salarioBruto) {
    this.matricula = matricula;
    this.nome = nome;
    this.salarioBruto = salarioBruto.toFixed(2);
    this.deducaoInss = (this.salarioBruto * 0.12).toFixed(2);
    this.salarioLiquido = (this.salarioBruto - this.deducaoInss).toFixed(2);
  }
  toString() {
    return `Matricula: ${this.matricula}\nNome: ${this.nome}\nSalario Bruto: ${this.salarioBruto}\nDeducao INSS: ${this.deducaoInss}\nSalario Liquido:${this.salarioLiquido}\n`;
  }
}

let listObjFunc = [
  new Funcionario(1, "Jose Carlos", 1200.0),
  new Funcionario(2, "Maria Claudia", 2000.0),
  new Funcionario(3, "Joao Guilherme", 3000.0),
  new Funcionario(4, "Percival Gomes", 5000.0),
  new Funcionario(5, "Joao Paulo de Araujo", 1350.0),
  new Funcionario(6, "Nathan de Oliveira", 1500.0),
  new Funcionario(7, "Marco Aurelio", 5000.0),
  new Funcionario(8, "Bolivar Carvalho", 10000.0),
];

listObjFunc.forEach((func) => {
  console.log(func.toString());
});
*/

/*
//EX21
let height = parseFloat(prompt("Digite sua altura: "));
let sex = prompt("Digite seu sexo(M/F): ").toUpperCase();
if (height > 0) {
  if (sex === "M") {
    let pesoIdeal = 72.7 * height - 58;
    console.log("Seu peso ideal é: " + pesoIdeal.toFixed(2));
  } else if (sex === "F") {
    let pesoIdeal = 62.1 * height - 44.7;
    console.log("Seu peso ideal é: " + pesoIdeal.toFixed(2));
  }
}
*/
/*
//EX22
class Habitante {
  constructor(salario, numFilhos) {
    this.salario = salario;
    this.numFilhos = numFilhos;
  }
}
let vetHabitante = [
  new Habitante(1200.0, 0),
  new Habitante(360.0, 1),
  new Habitante(2000.0, 3),
  new Habitante(300.0, 2),
  new Habitante(550.0, 5),
  new Habitante(10000.0, 0),
];

function search(vet) {
  let totalSal = 0;
  let totalFilho = 0;
  let maior = 0;
  let count = 0;

  vet.forEach((hab) => {
    totalSal += hab.salario;
    totalFilho += hab.numFilhos;
    if (hab.salario > maior) maior = hab.salario;
    if (hab.salario <= 350) {
      count++;
    }
  });

  console.log(
    "Media salarial da população: R$ " + (totalSal / vet.length).toFixed(2)
  );
  console.log(
    "Media de filhos da população: " + Math.round(totalFilho / vet.length)
  );
  console.log("Maior salario entre a população: " + maior.toFixed(2));
  console.log(
    "Percentual de pessoas com o salario até R$ 350,0: " +
      ((count * 100) / vet.length).toFixed(2) +
      "%"
  );
}

search(vetHabitante);
*/

/*
//EX23
let val = [];
for (let i = 0; i < 7; i++) {
  let row = [];
  for (let y = 0; y < 7; y++) {
    if (i == y) {
      row.push(1);
    } else {
      row.push(0);
    }
  }
  val.push(row);
}

val.forEach((x) => {
  console.log(x.join(" "));
});
*/

/*
//EX24
let M = [];
let c = [];
let qtd = 0;
for (let i = 0; i < 6; i++) {
  let row = [];
  for (let y = 0; y < 8; y++) {
    if (i > y) {
      row.push(-1);
    } else {
      row.push(0);
    }
  }
  M.push(row);
}
for (let i = 0; i < 6; i++) {
  for (let y = 0; y < 8; y++) {
    if (M[i][y] < 0) {
      qtd++;
    }
  }
  c.push(qtd);
  qtd = 0;
}
console.log(c);
*/

/*
//EX25
let M = [];
let somVet = [];
let total = 0;
let row;
for (let i = 0; i < 15; i++) {
  row = [];
  for (let y = 0; y < 20; y++) {
    let rand = parseFloat((Math.random() * 10).toFixed(2));
    row.push(rand);
  }
  M.push(row);
}

M.forEach((x) => {
  console.log(x.join(" "));
});

for (let i = 0; i < M.length; i++) {
  for (let j = 0; j < 15; j++) {
    total += M[j][i];
  }
  somVet.push(total.toFixed(2));
  total = 0;
}

let i = 0;
somVet.forEach((x) => {
  console.log(`Coluna:${i} Soma:${x}`);
  i++;
});
*/

//EX26

/*
//EX38
let vet = [];
let asw = 0;
while (asw == 0) {
  for (let i = 0; i < 6; i++) {
    let val = parseInt(prompt("Digite o valor da posicao " + i + ": "));
    vet.push(val);
  }
  console.log(`
  \t1- soma dos elementos\n
  \t2- produto dos elementos\n
  \t3- média dos elementos\n
  \t4- ordene os elementos em ordem crescente\n
  \t5- mostre o vetor`);
  asw = parseInt(prompt("\tOpcao: "));
  if (asw == 1) {
    let total = 0;
    vet.forEach((x) => {
      total += x;
    });
    console.log("Soma: " + total);
  } else if (asw == 2) {
    let total = 1;
    vet.forEach((x) => {
      total *= x;
    });
    console.log("Produto: " + total);
  } else if (asw == 3) {
    let total = 0;
    vet.forEach((x) => {
      total += x;
    });
    console.log("Produto: " + (total / vet.length).toFixed(2));
  } else if (asw == 4) {
    console.log("" + vet.sort(orderCres));
  } else if (asw == 5) {
    console.log(vet);
  } else {
    console.log("Valor invalido.");
  }
}

function orderCres(a, b) {
  return a - b;
}
*/

/*
//EX39
let vet = [];
let vetN = [];
for (let i = 0; i < 10; i++) {
  let rand = parseInt(Math.floor(Math.random() * (10 - -10 + 1) + -10));
  vet.push(rand);
}

vet.filter((x) => {
  if (x > 0 && x !== 0) {
    vetN.push(x);
  }
});

console.log(vet);
console.log(vetN);
*/

/*
//EX40
let result = [];
let lotery = [];
let vet = [];
let seqWinner = [];
let count = 0;
for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Digite um numero: "));
  result.push(num);
}
result.sort(crescente);
for (let i = 0; i < 50; i++) {
  vet = [];
  for (let y = 0; y < 5; y++) {
    let rand = Math.floor(Math.random() * 80 + 1);
    vet.push(rand);
  }
  vet.sort(crescente);
  lotery.push(vet);
}
console.log(lotery.sort(crescente));

for (let i = 0; i < lotery.length; i++) {
  for (let y = 0; y < lotery[i].length; y++) {
    if (result[y] === lotery[i][y]) {
      seqWinner.push(lotery[i][y]);
      count++;
      if (count === 5) {
        seqWinner.push(i);
      }
    }
  }
  if (count === 5) {
    console.log(
      `Ganhador. Sequencia: ${seqWinner} Posicao no vetor: ${seqWinner[5]}`
    );
  }
  count = 0;
  seqWinner = [];
}

function crescente(a, b) {
  return a - b;
}*/

/*
//41
let pessoaObj = {
  nome: "Carlos",
  idade: 37,
  email: "carlos@gmail.com",
};

console.log(pessoaObj.idade);
*/

/*
//EX42
let newObj = {
  arr: [],
};
let arr = [];
let i = 1;
let dados = {
  id: 1,
  desc: "Amontoado de dados",
  vet: [1, 2, 3, 4],
  arr: [3, 4],
};

function arrObj(obj) {
  for (prop in obj) {
    if (Array.isArray(obj[prop])) {
      newObj.arr.push(obj[prop]);
    }
  }
}
arrObj(dados);
console.log(newObj);
*/

/*
//EX43
let obj1 = {
  id: 1,
  nome: "Carlos",
  idade: 37,
  email: "carlos@gmail.com",
};
let obj2 = {
  id: 33,
  nomeProd: "Computador Desktop",
  preco: 2000,
};

function combObj(obj1, obj2) {
  let obj3 = { ...obj1, ...obj2 };
  return obj3;
}
console.log(combObj(obj1, obj2));
*/

/*
//EX44
let obj = {
  id: 1,
  nome: "Monitor",
  marca: "AOC",
  cor: "Preto",
  hz: 144,
  polegadas: 34,
  desc: "Monitor AOC 24 polegadas, preto, 144hz.",
};
let count = 0;

for (prop in obj) {
  if (typeof obj[prop] === "string") {
    count++;
  }
}
console.log(count);
*/

//EX45

/*
//46
let objQtdVendedor = {
  carlos: { totalVendas: null, qtdVendas: null },
  maria: { totalVendas: null, qtdVendas: null },
  jose: { totalVendas: null, qtdVendas: null },
};

let arrObj = [
  {
    id: 1,
    vendedor: "Carlos",
    prod: "Caneta",
    valor: 5.0,
  },
  {
    id: 2,
    vendedor: "Carlos",
    prod: "Lapizeira",
    valor: 15.0,
  },
  {
    id: 3,
    vendedor: "Carlos",
    prod: "Borracha",
    valor: 2.0,
  },
  {
    id: 4,
    vendedor: "Jose",
    prod: "Borracha",
    valor: 5.0,
  },
  {
    id: 5,
    vendedor: "Maria",
    prod: "Caderno",
    valor: 50.0,
  },
  {
    id: 6,
    vendedor: "Maria",
    prod: "Fichario",
    valor: 60.0,
  },
];

let totalCarlos = 0,
  totalMaria = 0,
  totalJose = 0,
  qtdCarlos = 0,
  qtdMaria = 0,
  qtdJose = 0;

arrObj.forEach((x) => {
  if (x.vendedor === "Carlos") {
    totalCarlos++;
    qtdCarlos += x.valor;
  } else if (x.vendedor === "Maria") {
    totalMaria++;
    qtdMaria += x.valor;
  } else if (x.vendedor == "Jose") {
    totalJose++;
    qtdJose += x.valor;
  }
  objQtdVendedor.carlos.qtdVendas = totalCarlos;
  objQtdVendedor.carlos.totalVendas = qtdCarlos;

  objQtdVendedor.maria.qtdVendas = totalMaria;
  objQtdVendedor.maria.totalVendas = qtdMaria;

  objQtdVendedor.jose.qtdVendas = totalJose;
  objQtdVendedor.jose.totalVendas = qtdJose;
});
console.log(objQtdVendedor);
*/
