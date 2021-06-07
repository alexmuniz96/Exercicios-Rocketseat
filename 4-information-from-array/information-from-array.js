/* 
  Buscando e contando dados de array
   Baseado no array de jogos por categoria abaixo, faça os seguintes desafios

    * Contar o número de categorias e o números de jogos em cada categoria
    * Contar o número de desenvolvedoras
    * Mostrar jogos da desenvolvedora Respawn Entertainment
    * Transformar a função acima em uma função que irá receber o nome da desenvolvedora e mostrar somente os jogos da mesma
    
*/

const jogosPorCategoria = [
  { 
    categoria: "Fps",
    jogos: [
      {
        titulo: "Apex Legends",
        desenvolvedora: "Respawn Entertainment"
      },
      {
        titulo: "Call of Duty Warzone",
        desenvolvedora: "Raven Software"
      },
      {
        titulo: "Titanfall 2",
        desenvolvedora: "Respawn Entertainment"
      },
      {
        titulo: "Counter Strike",
        desenvolvedora: "Valve"
      },
    ],
  },
  {
    categoria: "Rpg",
    jogos: [
      {
        titulo: "Diablo III",
        desenvolvedora: "Blizzard Entertainment"
      },
      {
        titulo: "Dark Souls",
        desenvolvedora: "From Software"
      },
      {
        titulo: "Final Fantasy",
        desenvolvedora: " Square Enix"
      },
      {
        titulo: "The Witcher 3 Wild Hunt",
        desenvolvedora: "CD Projekt RED"
      },
      {
        titulo: "The Elder Scrolls V Skyrim",
        desenvolvedora: "Bethesda"
      },
      
    ]
  }
]

// Contar o número de categorias

let numeroCategorias = jogosPorCategoria.length
console.log(numeroCategorias)

// Número de jogos em cada categoria
for (let categoria of jogosPorCategoria){
    console.log("O número de jogos na categoria " +  categoria.categoria + " é "  + categoria.jogos.length)
}

// Número de desenvolvedoras
function numeroDesenvolvedoras(){
  let desenvolvedoras = [];

  for (let categoria of jogosPorCategoria) {
    for ( let jogo of categoria.jogos ) {
      if (desenvolvedoras.indexOf(jogo.desenvolvedora)== - 1){
        desenvolvedoras.push(jogo.desenvolvedora)
      } 
    }
  }
  console.log("O número de desenvolvedoras é " + desenvolvedoras.length)
}

numeroDesenvolvedoras()

// Mostrar somente os jogos da Respawn Entertainment

function jogosDaRespawn(){
  let jogos = [];

  for (let categoria of jogosPorCategoria) {
    for ( let jogo of categoria.jogos ) {
      if (jogo.desenvolvedora == "Respawn Entertainment"){
        jogos.push(jogo.titulo)
      } 
    }
  }
  console.log("Os jogos da Respawn Entertainment são " + jogos)
}

jogosDaRespawn()

// Mostrar jogos da desenvolvedora informada

function jogosDaDesenvolvedora(desenvolvedora){
  let jogos = [];

  for (let categoria of jogosPorCategoria) {
    for ( let jogo of categoria.jogos ) {
      if (jogo.desenvolvedora === desenvolvedora){
        jogos.push(jogo.titulo)
      } 
    }
  }
  console.log("Os jogos da " + desenvolvedora + " são: " + jogos)
}

jogosDaDesenvolvedora("CD Projekt RED")





