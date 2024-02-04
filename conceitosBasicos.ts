//Exemplos TIPOS BÁSICOS:
const x: number = 10;
const nome: string = "Andressa";
const isAdmin: boolean = true;

/**************************************************/
//não posso reatribuir valores quando o tipo do valor for diferente do declarado

let z: number = 10;

//  z = "teste";
//se eu descomentar a linha acima o erro da linha seguinte irá aparecer
//type string is not assingnable to type 'number'
//  z = 16     seria uma reatribuição válida

/**************************************************/
//ANNOTATION x INFERÊNCIA

//let y: number = 12; //annotation

let y = 12; //inferencia

//  y = "teste";
//se eu descomentar a linha acima o erro da linha seguinte irá aparecer
//type string is not assingnable to type 'number'
//Porque a tipagem já é automática mesmo que eu não escreva o tipo
//  z = 16     seria uma reatribuição válida

/**************************************************/
//OBJECT:

const myNumbers: number[] = [1, 2, 3];

/**************************************************/
//TUPLES = um tipo de array/objeto

let myTuple: [number, string, string[]];

myTuple = [4, "texto", ["a", "B", "c"]];

// myTuple = [false, true, false] NÃO IRÁ FUNCIONAR

/**************************************************/
//OBJECT LITERALS
const user: { name: string; age: number } = {
  name: "Pedro",
  age: 20,
};

/* se eu mandasse um objeto faltando o name ou o age  apresentaria erros porque tem que seguir o modelo que foi declarado

    const user: {name: string, age: number} = {
    name: "Pedro" };
    
   E também não consigo adicionar propriedades neste objeto, 
   Ex:
   user.job = programador;

*/

/**************************************************/
//ANY

/*Somente quando não depender mesmo dos tipos de dado, ou seja, em raros casos se utiliza o any.
 Muitos programadores que não tem muito conhecimento de TypeScript usam o any para 
 se livrar dos erros que aparecem cada vez que o tipo do dado não é respeitado.
 o ANY é uma má prática, somente utilizar com um objetivo específico.
 */

/**************************************************/
//UNION TYPE
// variável que une varios tipos na declaração
// Ex:

let id: string | number = "10";

//id = 200 é permitido
//id = true dá erro
//id = [] também da erro

/**************************************************/
//TYPE ALIAS

type myIdtype = number | string;
const userId: myIdtype = 10;
const productId: myIdtype = "abc";

//Ou seja mais de uma "constante/variável de programação" compartilhando o mesmo tipo

/**************************************************/
//ENUM

//Conjunto de variáveis para enumeração que serão reutilizados com bastante frequência
//para deixar o código menor e sem repetições
//Ex:

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  nome: "camisa gola V",
  size: Size.G,
};

/**************************************************/
//LITERAL TYPES
//literal types é quando o tipo não é algum default (string, number, boolean...)
//o literal type é criado por nós

let pokemonGeneralType = "Pikachu";

const pokemonLiteralType = "Pikachu";

//este conceito é mais poderoso quando é utilizado juntamente com o Union type
//porque assim você pode limitar as opções e deixá-las constantes

function movePokemon(direction: "up" | "down" | "left" | "right") {
  console.log("exemplo");
}

movePokemon("up");
//movePokemon("forward") não aceita

/**************************************************/
//FUNÇÕES
//Nas funções a gente também pode tipar os PARÂMETROS pq se não tipar ele já
//fica automaticamente tipado como ANY

function sum(a: number, b: number) {
  return a + b;
}

//sum(12,12)
//sum(12,true) não funciona.

//FUNÇÕES
//Nas funções a gente pode também tipar o RETORNO

function sayHelloTo(name: string): string {
  return `hello ${name}`;
}

sayHelloTo("Andressa");

//Abaixo função que não retorna nada
//VOID é o tipo de função que não retorna nada

function logger(msg: string): void {
  console.log(msg);
}

logger("teste");

//Abaixo função que tem um dos parametros não obrigatorios
//usa-se o ?
//e só funciona se colocar um if para verificar se o argumento veio ou não veio

function cumprimentar(name: string, greeting?: string) {
  if (greeting) {
    console.log(`Hello ${greeting} ${name}`);
  } else {
    console.log(`Hello ${name}`);
  }
}

cumprimentar("Andressa");
cumprimentar("Andressa", "Miss");

//INTERFACES
//Elas padronizam estruturas para a gente poder utilizar como tipo

interface mathFunctionParams {
  n1: number;
  n2: number;
}

function sumNumbers(nums: mathFunctionParams) {
  return nums.n1 + nums.n2;
}

console.log(sumNumbers({ n1: 1, n2: 2 }));

//sumNumbers(1,2)  diz que só recebeu um parametro em vez de 2
//sumNumbers({1,2}) diz que 1 e 2 não existem no parâmetro mathFunctionParams

function multiplyNumbers(nums: mathFunctionParams) {
  return nums.n1 * nums.n2;
}

const someNumbers: mathFunctionParams = {
  n1: 5,
  n2: 10,
};

console.log(multiplyNumbers(someNumbers));

//NARROING
//checagem de tipos
//é a forma que a gente tem de garantir que um determinado tipo de dado chegue numa determinada linha de código

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`O número é ${info}`);
    return;
  }
  console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

//GENERICS
//aqui o tipo de dado não importa,
//eu quero executar uma função que ela trabalhe com um determinado tipo de dado, mas ele pode ser qualquer um
//quando eu tenho algo que não está determinado por um tipo, a gente sempre vai optar pelos generics já que o any é má prática
//<T> é o tipo

function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`);
  });
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArraysItems(a1);
showArraysItems(a2);

//ou seja, podemos utilizar arrays de todos os tipos

//CLASSES
class User {
  name;
  role;
  isApproved;

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name;
    this.role = role;
    this.isApproved = isApproved;
  }
  showUserName() {
    console.log(`O nome do usuário é ${this.name}`);
  }
  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`User allowed ${this.role}`);
    }
    console.log("Unable to show information");
  }
}

const zeca = new User("zeca", "Admin", true);

zeca.showUserName(); //O nome do usuário é zeca

zeca.showUserRole(false); //"Unable to show information"

console.log(zeca);

//INTERFACES EM CLASSES
//interfaces que ditam como as classes tem que se comportar
//serve quando um projeto possui classes que são muito parecidas então a gente tem um padrão entre elas
//As interfaces começam com o I maiúsculo pra gente entender que aquilo é uma interface

interface Ivehicle {
  brand: string;
  showBrand(): void;
}

class Car implements Ivehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do carro é ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);
fusca.showBrand();

//HERANÇA
//quando se herda algo de outra classe

class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

//DECLARATORS
//recurso especial do typescript
//muito usado para validação de dados
//p/ construir um evento observável em algum determinado ponto (de alguma classe, de alguma função)
//p/ poder utilizar esse recurso é necessario:
//ir ao arquivo tsconfig.json
//descomentar experimentalDecorators: true
//todo decorator é uma função
//todo decorator vai retornar outra função com as informações que queremos alterar
//Os decorators são implementados pela sintaxe de @ 

function BaseParemeters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
};

@BaseParemeters()

class Person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
