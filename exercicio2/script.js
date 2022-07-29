const numeros = [1,5,49,58,33,-40]

const nomes = ["Sanderson", "Melanie", "Heitor", "Cecilia"]

const aleatorio = ["Sanderson", 34, true]

console.log("- Imprima a quantidade de itens de cada array: ", numeros.length, nomes.length, aleatorio.length);

console.log("- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array: ", numeros[0], nomes[1], aleatorio[2]);

console.log("- Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array: ", numeros.includes(5), aleatorio.includes("Melanie"));
