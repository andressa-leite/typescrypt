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
//let y: number = 12;  

let y = 12;

//  z = "teste";
//se eu descomentar a linha acima o erro da linha seguinte irá aparecer
//type string is not assingnable to type 'number'
//Porque a tipagem já é automática mesmo que eu não escreva o tipo
//  z = 16     seria uma reatribuição válida


/**************************************************/
//OBJECT:

const myNumbers: number[] = [1,2,3];

/**************************************************/
//TUPLES = um tipo de array/objeto

let myTuple:  [number, string, string[]];

myTuple = [4, "texto", ["a", "B", "c"]];

// myTuple = [false, true, false] NÃO IRÁ FUNCIONAR

/**************************************************/
//OBJECT LITERALS
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 20
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

 let id: string | number = "10"

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
    G = "Grande"
  }

  const camisa = {
    nome: "camisa gola V",
    size: Size.G
  }

  /**************************************************/
  //LITERAL TYPES
  //literal types é quando o tipo não é algum default (string, number, boolean...)
  //o literal type é criado por nós 

  let pokemonGeneralType = "Pikachu"


  const pokemonLiteralType = "Pikachu"

  //este conceito é mais poderoso quando é utilizado juntamento com o Union type
  //porque assim você pode limitar as opções e deixá-las constantes

  function movePokemon(direction: "up" | "down" | "left" | "right"){
    console.log("exemplo")
  }

  movePokemon("up")
  //movePokemon("forward") não aceita

  /**************************************************/ 
  //FUNÇÕES
  //Nas funções a gente também pode tipar os PARÂMETROS pq se não tipar ele já
  //fica automaticamente tipado como ANY

  function sum(a: number, b:number){
    return a + b;
  }

  //sum(12,12)
  //sum(12,true) não funciona.


  //FUNÇÕES
  //Nas funções a gente pode também tipar o RETORNO 

  function sayHelloTo(name: string):string {
    return `hello ${name}`;
  }

  sayHelloTo("Andressa");

  //Abaixo função que não retorna nada
  //VOID é o tipo de função que não retorna nada

  function logger(msg: string) :void{
    console.log(msg)
  }

  logger("teste");

  //Abaixo função que tem um dos parametros não obrigatorios
  //usa-se o ?
  //e só funciona se colocar um if para verificar se o argumento veio ou não veio

function cumprimentar(name: string, greeting?: string){
  if(greeting){
    console.log(`Hello ${greeting} ${name}`);
  }else{
    console.log(`Hello ${name}`);
  }
};

cumprimentar("Andressa");
cumprimentar("Andressa", "Miss");

//INTERFACES
//Elas padronizam algo para a gente poder utilizar como tipo

interface mathFunctionParams{
  n1: number,
  n2: number
}

function sumNumbers(nums: mathFunctionParams){
  return nums.n1 + nums.n2
}

console.log(sumNumbers({n1:1, n2:2}))

//sumNumbers(1,2)  diz que só recebeu um parametro em vez de 2
//sumNumbers({1,2}) diz que 1 e 2 não existem no parâmetro mathFunctionParams

function multiplyNumbers(num: mathFunctionParams){
  
}








































  
