//   Aula Tipos de Dados 


//Aqui eu tenho um comentario em linha//


/* o codigo a baixo escreve alguma mensagem no devtools
   Aqui eu tenho um comentário multi linha

   e tudo que é escrito depos das barras são ignorados, independente de ser um comando.

   
 o código a baixo escreve alguma mensagem no detools

 
*/


console.log('Bem Vindo ao mundo')


/*
string

*Cadeia de caracteres

"" // aspas duplas
'' // aspas simples
`` // template literals ou template strings

se eu quero escrever texto eu posso usar esas opções acima.


*/

/*
  Number
     * números

     33 // inteiros
     12.5 // reais - floot
     NaN // Not a Number
     Infinity // infinito




*/

console.log(-33 + 45)


/*
Boolean
 é um tipo de dados que só tem dois valores v ou f
   *somente 2 valores.
    Ele é muito necesario para fazer logica de progarmção.

      true // verdadeiro
      false // falso

*/

console.log(true)

/*
 * undefined
    * indefinido (algo que não vai existir)
    
   
    *null  (è algo que existe porem è vazio)
    * objeto que ñ possui nada dentro
    * diferente de indefinido 
    * 
undefined è um dado indefinido diferente de null que è nulo. 


*/
console.log(null)

/*
* Object
  * objeto è um tipo de dado estrutural, que cria uma estrutura,
   todo objeto irão possuir propriedades e funcionalidades.Objeto é um tipo de dado estrurural.
  * Propriedades / atributos (Propriedades)
  * Funcionalidades / Mètodos
 
   
   { prioridades: ""valor"} 


*/

console.log({
    nome: "Cartoon",
    idade: 26,
    andar: function () {
        console.log('andar')
    }

})
//object

//quando eu quero imprimir só um valor eu uso o .//
connst person = {
    name: 30,
    weight: 88.6,
    isAdmin: true
}
console.log(person.nome)

/* 
*Array (Vetores) ( È um agrupamento de dados)
     * Uma lista
     * Agrupamneto de dado
     
     [ "Cartoon, 36"]



*/
console.log([
    "Leite",
    "Ovos",
    2,
    3,
])
const animals = [
    'Lion',
    'Monkey',
    'Çat',
]

//como acessar valores dentro do Arrey eu uso 

//com os conchetes eu consigo encontrar a posição do Array.
console.log(animals[0])

//se eu quero encontra o valor total do Array
console.log(animals.length)




/* Varieveis
 variaveis são nomes simbolicos para receber algum valor.
Variaveis ñ precisa ter um tipo previamente definido
Podemos mudar o conteudo da variàvel

 * Atalhos de codigo
 * identificadores
 * 3 palavras reservadas para criar uma variavel
     * var (Var alternar entre um valor e outro )
     ## var é global e local, pode funcionar fora de um escopo de bloco
    console.log ('> existe x antes do bloco? ',x)

    {
        var x = 0
    }

    console.log('> existe x depois do bloco? ', x)


    * let ( Let funciona semelhante ao Var )
     * const (A Const ñ pode mudar o seu valor duarante a aplicação, apesar de està no grupo de variavel a const sempre serà const ela ñ muda.)

// conts e let são locais e só funciona no escopo onde foi criada.



#scope
* Escopo determina a visibilidade de alguma variavel no JS

#Block statement
// aqui dentro é um bloco e posso colocar qualquer código// aqui fecha o bloco.



// Variaveis e tiposde dados
// declaração or declaration
   * var name



// assigment or atribuição de valores
   *name= "Cartoon"


// que tipo de dado foi colocado na variavel

    *console.log (typeof name)

// agrupamento de declarações
*let age, isHuman

age = 18
isHuman = true

console.log(name, age, isHuman)

//escrita de texto + variáveis
para que a função funcione precisamos concatenar

// concatenando valores
console.log(ó '+ name + 'tem' + age + ános.')

// interpolando valores com template literals or template strings

console.log(`o ${name} tem ${age} anos.`)



*/



//FUNÇÕES

/*
 Funcao é um tipo de dado estrutural, ou seja uma estrutura de dado bem organizada para receber todos os codigos.
 funcao serve para repetir e reagrupar os codigos quantas vez que eu quiser repetir um codigo.
 dar significado ao codigo.

 // criar um aplicativo de frase motivacionais
console.log('Estudar é muito bom')
console.log('Paciencia e persistencia')
console.log('Revisão é mãe do aprendizado')


//declaration -  declacao da funcao
// funtion statement

function createPhrases()  {
    console.log('Estudar é muito bom')
    console.log('Paciencia e persistencia')
    console.log('Revisão é mãe do aprendizado')

}

// executar a funcao
createPhrases()

console.log('fim do programa')

// functio expression
// function anonymous

// parametros (parameters)
const sum = function (number1, number2) {

    console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos


*/
/* Function () constructor
   

   * expressão new
   * criar um novo objeto
   * this keyword
*/

function person () {
      this.name = name
      this.walk = function (){
          return this.name + "está andando"
      }
}


const kalluan = new person ("kalluan")
const Cartoon = new person ("Cartoon")
console.log (kalluan.walk())
console.log (Cartoon.walk())


//Prototype javascript é baseado em prototipos, com variados efeitos.
//__proto__ |. é a função usada para ter acesso aos prototipos.

//  Type conversion (typecasting) vs Type coersion
/* Alteração de um tipo de dado para outro tipo */

//manipulação de dados do array


let tech = ["html", "css","js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
//pegar somente alguns elementos do array
console.log(techs.slice(1,1))
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1,2)
// encontrar a posição de um elemento no array
let index = techs.indexOf('nodejs')
techs.splice(index,1)

console.log(techs)

//Expressões e Operadores
/* expressão são qualquer linhas de codigos que resolve  algo no javascript.
 */
// Operação ecomparação

// Irá comparar valores eretonar um Boolean como resposta á comparação

let one = 1
let two = 2

// ==   igual
console.log(one == 1) //true

// !=   diferente
console.log(one != 1) //false

// ===  estritamente igual
console.log( one ==="1") /*falso pq vai reconhecer a String*/
console.log( one === 1) //true

// !==  estritamento diferente
console.log( two === 2) //true

// >    Maior
console.log(two > 1) //true

// >=   Maior igual
console.log(two >= 1) //true

// <    Menor
console.log(one <two ) //true

// <=   Menor igual
console.log(one <= two) //true

/*
Falsy
Quando um valor é considerado false emcontextos onde um boolean é obrigatorio ( condicionais e loops)

false
0
-0
""
null
undefined
NaN
 */

 /*
 TRUTHY
 quando um valor é considerado true em contextos onde um  boolean é obrigatorio ( condicionais e loops)

 true
 {}
 []
 1
 3.23
 "0"
 "false"
 -1
 Infinity
 -Infinity
 */

 /*
   Operator precedence
    Precedencia de operadores
    
   * grouping                       ( )
   * negação e incremento            ! ++ -- 
   * multiplicação e divisão         * /
   * adição subtração                + -
   * relacional                     < <= > >=
   * igualdade                      == != === !==
   * AND                            &&
   * OR                             ||
   * condicional                    ?:
   * assignment (atribuição)        = += -= *=
 */
 // control flow
 
 // if...esle
 let temperature = 36.5

 if ( temperature >= 37) {
     console.log ('Febre')
 }  else  {
     console.log ('Saudável')
 } 

 // switch
 // O switch é semelhante ao if else porem sua estrutura é mais longa.

 let expression = 1

 switch (expression) {
     case 'a':
         // codigo
         console.log('a')
         break
     case 'b':
         // codigo para expression b
         console.log ('b')
         break
    default:
         console.log ('default')
         break        
 }

 // throw 
 // lançar, disparar
function sayMyName(name ='') {
   if (name === '') {
        throw 'Nome é obrigatório'
   } 

   console.log('depois do erro')


 // try...catch
 // pegar= catch| try=tentar
 //com essa funçao consigo encontrar erros e c/apturalos.     

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

// Estrutra de repetição
// for 
for(let i = 0; i++){
    console.log(i)
}

//break - para a execução do loop

for(let i = 100; i--){
    if(i === 50){
        break;
    }
    
    console.log(i)
}  

// continue - pula a execução do momento

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }
    
    console.log(i)
} 

// Estrutura de repetição
// while
// while faz muito sentido ser usado, quando não sabemos o momento da parada.

let i = 0;
while (i < 10) {
    console.log(i)

    i++;
}

//for...of
// O For of é uma declaração que vai crira um loop, atraves de alguma variavel que tivermos.

