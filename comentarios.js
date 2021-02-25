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