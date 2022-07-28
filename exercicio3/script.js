const numeros = [1,5,49,58,33,-40]

const nomes = ["Sanderson", "Melanie", "Heitor", "Cecilia"]

const aleatorio = ["Sanderson", 34, true]

console.log(numeros.length, nomes.length, aleatorio.length);

console.log(numeros[0], nomes[1], aleatorio[2]);

console.log(numeros.includes(5));
console.log(aleatorio.includes("Melanie"));

const numerosDoArrayOriginalCopia = numeros.slice()

const nomesDoArrayOriginalCopia = nomes.slice()

const aleatorioDoArrayOriginalCopia = aleatorio.slice()


numerosDoArrayOriginalCopia.push(13)

console.log("- Adicione um item `number` ao primeiro array", numeros, numerosDoArrayOriginalCopia);

nomesDoArrayOriginalCopia.pop()

console.log("- Remova o último item do segundo array", nomes, nomesDoArrayOriginalCopia);

aleatorioDoArrayOriginalCopia.splice(1,1)
 
console.log("- Remova o segundo item do terceiro array", aleatorio, aleatorioDoArrayOriginalCopia);


