/* Sistemas de gasto familiar!

  * Crie um objeto que possuira 2 propriedades ambas do tipo array.
  * Criar um função para calcular se o saldo está positivo ou negativo.

*/

let monthlySalary = 1000
let bonus = 350
let income = 120

let waterBill = 2000
let ligthBill = 300
let phoneBill = 100

const financesFamily = {
  revenue: [monthlySalary, bonus, income] , 
  expenses: [waterBill, ligthBill, phoneBill]
}

function sum(array) {
  let total = 0

  for (let value of array){
    total += value
  }
  return total
}

function calculateBalance(){
  const calculateRevenue = sum(financesFamily.revenue)
  const calculateExpenses = sum(financesFamily.expenses)
  const total = calculateRevenue - calculateExpenses
  const itsOk = total >= 0
  const message = "negativo"

  if(itsOk ){
    message = "positivo"
  }

  console.log(`Seu saldo é ${message} R$${total}`)

}

calculateBalance()
