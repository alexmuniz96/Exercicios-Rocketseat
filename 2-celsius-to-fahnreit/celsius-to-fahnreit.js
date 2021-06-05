// Crie uma função que vai receber uma string, e transforma Celsius em Fahnreit

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

// degree = grau
// transformDegree("50F")
// Preciso verificar se nessa string tem F ou C
// Criar validação para erro de letras não cadastradas - try...catch, fora da função
// Caminho ideal, passar a formula como uma arrow function
// Váriavel para concatenar com a transformação do valor
// updateDegree - Criar formula que irá extrair somente o número do degree
// Crio um caminho alternativo com o if 

function transformDegree(degree) {
  const celsiusExists =  degree.toUpperCase().includes('C')
  const fahnreitExists = degree.toUpperCase().includes('F')


  //Fluxo de erro
  if(!celsiusExists && !fahnreitExists) {
    throw new Error ('Grau não identificado')
  }

  // Fluxo ideal F -> C
  let updateDegree = Number(degree.toUpperCase().replace('F', ''))
  let formula = fahnreit => (fahnreit - 32) * 5/9
  let degreeSign = "C"

  // Fluxo alternativo
  if(celsiusExists){
   updateDegree = Number(degree.toUpperCase().replace('C', ''))
   formula = celsius => celsius * 9/5 + 32
   degreeSign = "F"
  }

  return formula(updateDegree) + degreeSign
  
}

try {
  console.log(transformDegree("10C"))
  console.log(transformDegree("50F"))
} catch (error) {
  console.log(error)
}










