/* Sistemas de notas escolares
  
* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F

*/

let score = 0

function scoreSchool(score){
  if(score >= 90 <=100) {
    console.log("Sua nota é A")
  } else if (score >= 80 && score <= 89){
    console.log("Sua nota é B")
  } else if (score >=70 && score <= 79){
    console.log("Sua nota é C")
  } else if (score >= 60 && score <= 69){
    console.log("Sua nota é D")
  } else if (score < 60 >=0) {
    console.log("Sua nota é F")
  } else {
    console.log("Nota inválida")
  }
}
scoreSchool(45)

// Outra maneira de resolver a a questão seria armazenando cada verificação da nota em variáveis.

