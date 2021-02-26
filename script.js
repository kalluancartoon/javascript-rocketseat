//Exercio

// 1. Declare uam variavel acima ?

let weight

// 2. Que tipo de dado é variavel acima ?

console.log(typeof weight)

/*

3. Daclare uma variavel e atribua valores para cada um dos dados:
          * name: String
          * age: Number (integer)
          * stars: Number (float)
          * isSubscribed: Boolean 
          
  */


let name = "Cartoon"
let age = 26
let stars = 4.5
lts isSubscribed = true


/*
 4. A variável student abaixo é de que tipo de dados ?
 
 
 4.1 Atribua a ela as mesma propriedades e valores do exercício 3.


 4.2 Mostre no console a seguinte mensagem:

 <name> de idade <age> pesa <weigth> kg.

 Atenção,substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
 
 
*/

let student = {

    name: "Cartoon",
    age: 26,
    weight: 4.5,
    isSubscribed: true,
}


console.log(typeof student)

console.log(`${student.name} de idade ${student.age} pesa ${student.weigth} kg.`)



/*
    5.  Declare uma variavel do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

*/
let students = []

/*
6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não)

*/
students = [
    student
]
console.log(students)

/*
7. Coloque no console o valor da posição zero do Array acima
*/

//console.log(students[0])

/*
8. Crie um novo student e coloque na posição 1 do Arry students
*/

conts john = {
    name: "John",
    age: 32,
    weight: 74.8,
    isSubscribed: true,

}

students = [
    student,
    john
]


/*
   9. Sem rodar o código responda qual é a resposta do código abaixo e por que ? apos sua resposta, rode o código e veja se você acertou.

   console.log(a)
   Var a = 1
*/
Var a

console.log(a)
a = 1
// R: vai ser impresso no console.log undefined, por causa da elevação.
