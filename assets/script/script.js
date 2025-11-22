function continuar(){
  const nome = document.getElementById("nome").value
  window.location.href = "pag2.html?nome=" + encodeURIComponent(nome)
}

function sortearJ(numCartas){
  let jogador = []

  for (let index = 0; index < numCartas; index++) {

    //randomiza as cartas e adiciona no array do jogador
    n = Math.floor(Math.random() * 13) + 1
    jogador.push(n)
  }
    return jogador
}

function sorteioJ(){
  //pega a qtde de cartas e o naipe escolhido pelo jogador 
  const numCartas = parseInt(document.getElementById('num').value)
  const naipe = document.querySelector('input[name="naipe"]:checked').value

  //pega os parâmetros da URL
  const params = new URLSearchParams(window.location.search);

  //pega o valor do parâmetro "nome"
  const nome = params.get("nome");

  //chama a função que vai sortear as cartas
  const resultado = sortearJ(numCartas)

 
  // document.getElementById("resultado").innerHTML = "<br><div class='resultado'>" + nome + "<br><br>" + naipe + "</div><br>" + resultado
  mostrarCartasJ(resultado, naipe, nome)
}


function mostrarCartasJ(numeros, naipe, nome){
  //pega a div que vai ser substituída
  const cartas =  document.getElementById("resultado")
  cartas.innerHTML = ""// limpa antes

  //vai mapear os icones possíveis
  const icones = {
    "Copas": "copas.svg",
    "Ouros": "ouros.svg",
    "Paus": "paus.svg",
    "Espadas": "espadas.svg"
  }

  function numMap(num){
    const mapa = {
      1: "A",
      11: "J",
      12: "Q",
      13: "K"
    }
    return mapa[num] || num; //se não estiver no mapa, retorna o próprio número
  }

  const icone = icones[naipe] //seleciona o SVG correto

  for (let index = 0; index < numeros.length; index++) {
    const num = numeros[index]
    const numero = numMap(num)

    cartas.innerHTML += `

    <div id='resultado'>
      <div style='background-color: #d1d1d1; padding: 5px; height: 100px; width: 70px; border-radius: 8px; color: #b421799f; font-weight: bold;'>

        ${numero}<br>
        <center><img src='assets/img/${icone}' style='margin: 12px 0;'></img></center>
        <p style='float: right;'>${numero}</p>
      </div>
    </div>
    ` 
  }

  const totalJ = somarCartasJ(numeros);
  return totalJ
}

//pegar o valor da carta
function valorCarta(carta){
  if(carta === "A") return 1
  if (carta === "J") return 11
  if (carta === "Q") return 12
  if (carta === "K") return 13

  return parseInt(carta); //para cartas de 2–10
}

//somar as cartas do jogador

function somarCartasJ(numeros){
  let soma = 0

  for (let index = 0; index < numeros.length; index++) {
    soma += valorCarta(numeros[index]) 
  }

  return soma
}

// jogar()