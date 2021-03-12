/* ### Transformar notas escolares 

Crie um algoritimo que transforme as notas do sitema numérico para sistema de notas em caracteres tipo A B C

 *  de 90 para cima -  A
 *  entre 80 - 89   -  B
 *  entre 70 - 79   -  C
 *  entre 60 - 69   -  D
 *  menor que  60   -  F
 */
/*
let score = 100


function getScore (score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;


    if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreF) {
    scoreFinal = "F"
  } else {
    scoreFinal = "Nota inválida"
  }

   return scoreFinal

}



console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))


 */

/*  ### Sistema de gasto familair


Crie um objrto que possuirá 2 propriedades, ambos do tipo array:
* receitas: []
* despesas: []


Agora, crie uma função que irá calcular o total de receitas e despesas e irá msotrauma mensagem se a familia está com saldo positivo ou negativo, seguindo do valor do saldo



*/

/*
let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
  let total = 0;


  for(let value of array) {
    total += value
  }

  return total
}


function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = " Negativo "

  if (itsOk) {
    balanceText = "Positivo"

  }

  console.log(`Seu saldo é ${balanceText}: R$%${total.toFixed(2)}`)

}


calculateBalance()
*/

/*
 ### Celsius em fahrenheit

 Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

 C = (F - 32) * 5/9

 F = C * 9/5 + 32

*/
/*

// transfom('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

// fluxo de erro
  if(!celsiusExists && !fahrenheitExists ) {
    throw new Error('Grau não indenficado')
  }

  // fluxo ideal, F -> C
  let updatedDegree;
  let formula = fahrenheit => (fahrenheit - 32) * 5/9
  let degreeSign = 'C'


//fluxo alternativo C ->
  if(celsiusExists){
     updatedDegree =Number(degree.toUpperCase().replace("C",""));
   formula = Celsius => celsius * 9/5 + 32
   degreeSign = 'F'

  }
  
  
  return formula(updatedDegree) + degreeSign

}




try {
    transformDegree('50F')
    transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}

 */

/*
   # Buscando e contando dados kem arrays 


   Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

   Contar o numero de categorias eo numero de livros em cada categorias
   contar o numero de autores 
   Mostrar Livros do autor Augusto Cury
   Transformar a função acima em uma função que irá receber o nome do autor e decolver os livros desse autor.

*/

const booksByCategory = [
  { 
     category:  "Riqueza",
     books: [
       { 
         title: "Os segredos da mente milionaria",
         author: "T. Harv Eker",
       },
       { 
         title: "O homem mais rico da Babilonia"
         author: "Robert T. Kiyosaki e Sharon L. Lechter",
       },
    ],
  },
  { 
    
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é insubstituivel",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfretar o mal do século",
        author: "Stephen R. Covey",
      },
    ],  
  },
];

const totalCategories = booksByCategory.length 

for(let category of booksByCategory) {
  console.log('Total de livros da categoria: ', category.category)
  console.log(category.books. length)

}


function countAuthors() {
  let authors = [];

  for(let category of booksByCategory) {
      for(let book of category.books) {
          if(authors.indexOf(book.author) == -1) {
               author.push(book.authors)
          }
      }
  }

   console.log("Total de autores: ", authors.length)

}

countAuthors();
function booksOfAuthor(author) {
  let books = [];

  for(let category of booksByCategory) {
      for(let book of category.books) {
          if(book.author === author){
              books.push(book.title)
          }
      }
  }

   console.log(`Livros do autor ${author} : ${books.join(", ")}`)

}
booksOfAugustoCury('Augusto Cury')



